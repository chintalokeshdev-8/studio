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
        <div className="bg-background">
            <div className="bg-primary text-primary-foreground text-center p-6">
                <h1 className="text-2xl font-bold">AI Symptom Checker</h1>
                <p className="text-sm opacity-90">లక్షణాలు చెప్పండి • Describe your symptoms</p>
            </div>

            <div className="p-4 space-y-6">
                 <div className="text-center">
                    <h2 className="text-xl font-semibold text-primary">AI Symptom Checker</h2>
                    <p className="text-muted-foreground text-sm">(Powered by Dialogflow + Infermedica)</p>
                    <p className="text-muted-foreground mt-1">Select your symptoms to get intelligent health guidance for Chinta Lokesh Babu</p>
                 </div>

                <div className="grid grid-cols-2 gap-4">
                    {commonSymptoms.map(symptom => (
                        <Card 
                            key={symptom.english}
                            onClick={() => handleSymptomClick(symptom.english)}
                            className={cn(
                                "cursor-pointer transition-all",
                                selectedSymptoms.includes(symptom.english) ? 'border-primary ring-2 ring-primary/50' : 'border-border'
                            )}
                        >
                            <CardContent className="p-4 text-center">
                                <p className="font-semibold">{symptom.english}</p>
                                <p className="text-muted-foreground text-sm">{symptom.telugu}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                             <div className="bg-primary/10 p-2 rounded-full">
                                <Mic className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Voice Symptom Input</h3>
                                <p className="text-sm text-muted-foreground">(Telugu/English)</p>
                                <p className="text-sm text-muted-foreground">Speak your symptoms in your preferred language</p>
                            </div>
                        </div>
                        <Button size="sm">Speak Now</Button>
                    </CardContent>
                </Card>
                
                {isPending && (
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                            <h2 className="text-xl font-semibold">Analyzing your symptoms...</h2>
                            <p className="text-muted-foreground">Our AI is working on it. This may take a moment.</p>
                        </CardContent>
                    </Card>
                )}

                {analysis && !isPending && (
                    <Card className="bg-primary/5">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <Sparkles /> AI Analysis Result
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="whitespace-pre-wrap">{analysis.analysis}</p>
                            <p className="text-sm text-muted-foreground italic">
                                Disclaimer: This is an AI-generated analysis and not a substitute for professional medical advice. Please consult a doctor for an accurate diagnosis.
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
            
            <div className="p-4 sticky bottom-16">
                 <Button onClick={handleSubmit} disabled={isPending || selectedSymptoms.length === 0} className="w-full h-12 text-lg">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                         <>
                            <Search className="mr-2 h-5 w-5" />
                            GET AI ANALYSIS
                         </>
                    )}
                </Button>
            </div>
        </div>
    );
}
