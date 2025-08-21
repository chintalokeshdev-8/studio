'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { analyzeSymptoms, SymptomAnalysisOutput } from '@/ai/flows/ai-symptom-check';
import { Loader2, Mic, Sparkles, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const commonSymptoms = [
    { english: "Fever", telugu: "జ్వరం" },
    { english: "Headache", telugu: "తలనొప్పి" },
    { english: "Cough", telugu: "దగ్గు" },
    { english: "Cold", telugu: "జలుబు" },
    { english: "Stomach Pain", telugu: "కడుపునొప్పి" },
    { english: "Vomiting", telugu: "వాంతులు" },
    { english: "Body Pain", telugu: "శరీర నొప్పులు" },
    { english: "Breathing Issues", telugu: "ఊపిరితిత్తుల సమస్య" },
    { english: "Chest Pain", telugu: "ఛాతీ నొప్పి" },
    { english: "Dizziness", telugu: "తల తిరుగుట" },
];

export default function SymptomCheckerPage() {
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
    const [analysis, setAnalysis] = useState<SymptomAnalysisOutput | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSymptomClick = (symptom: string) => {
        setSelectedSymptoms(prev => 
            prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
        );
    };

    const handleSubmit = async () => {
        const allSymptoms = selectedSymptoms.join(', ');
        if (!allSymptoms) {
            // Optionally, show an error toast
            return;
        }

        startTransition(async () => {
            const result = await analyzeSymptoms({ symptoms: allSymptoms });
            setAnalysis(result);
        });
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-symptoms))'}}>AI Symptom Checker</h1>
                <p className="text-muted-foreground mt-2">Select your symptoms to get intelligent health guidance.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Select Your Symptoms</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {commonSymptoms.map(symptom => (
                        <div
                            key={symptom.english}
                            onClick={() => handleSymptomClick(symptom.english)}
                            className={cn(
                                "cursor-pointer transition-all rounded-lg p-4 text-center border-2",
                                selectedSymptoms.includes(symptom.english) ? 'border-primary bg-primary/10' : 'bg-muted/40 border-transparent hover:border-muted-foreground/20'
                            )}
                             style={selectedSymptoms.includes(symptom.english) ? {borderColor: 'hsl(var(--nav-symptoms))', backgroundColor: 'hsla(var(--nav-symptoms)/0.1)'} : {}}
                        >
                            <p className="font-semibold">{symptom.english}</p>
                            <p className="text-muted-foreground text-sm">{symptom.telugu}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="border-primary/20" style={{backgroundColor: 'hsla(var(--nav-symptoms)/0.1)', borderColor: 'hsla(var(--nav-symptoms)/0.2)'}}>
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full" style={{backgroundColor: 'hsla(var(--nav-symptoms)/0.1)'}}>
                            <Mic className="h-6 w-6" style={{color: 'hsl(var(--nav-symptoms))'}}/>
                        </div>
                        <div>
                            <h3 className="font-semibold" style={{color: 'hsl(var(--nav-symptoms))'}}>Voice Symptom Input</h3>
                            <p className="text-sm text-muted-foreground">Speak your symptoms in Telugu or English</p>
                        </div>
                    </div>
                    <Button style={{backgroundColor: 'hsl(var(--nav-symptoms))'}}>Speak Now</Button>
                </CardContent>
            </Card>
            
            {isPending && (
                <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <Loader2 className="h-12 w-12 animate-spin mb-4" style={{color: 'hsl(var(--nav-symptoms))'}} />
                        <h2 className="text-xl font-semibold">Analyzing your symptoms...</h2>
                        <p className="text-muted-foreground">Our AI is working on it. This may take a moment.</p>
                    </CardContent>
                </Card>
            )}

            {analysis && !isPending && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--nav-symptoms))'}}>
                            <Sparkles /> AI Analysis Result
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="whitespace-pre-wrap leading-relaxed">{analysis.analysis}</p>
                        <p className="text-sm text-muted-foreground italic pt-4 border-t">
                            Disclaimer: This is an AI-generated analysis and not a substitute for professional medical advice. Please consult a doctor for an accurate diagnosis.
                        </p>
                    </CardContent>
                </Card>
            )}

            <div className="p-4 sticky bottom-20">
                    <Button onClick={handleSubmit} disabled={isPending || selectedSymptoms.length === 0} className="w-full h-12 text-lg font-bold" style={{backgroundColor: 'hsl(var(--nav-symptoms))'}}>
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                            <>
                            <Search className="mr-2 h-5 w-5" />
                            GET AI ANALYSIS ({selectedSymptoms.length})
                            </>
                    )}
                </Button>
            </div>
        </div>
    );
}
