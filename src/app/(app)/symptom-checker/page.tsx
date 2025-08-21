'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { analyzeSymptoms, SymptomAnalysisOutput } from '@/ai/flows/ai-symptom-check';
import { Loader2, Mic, Sparkles } from 'lucide-react';

const commonSymptoms = ["Fever", "Cough", "Stomach Pain", "Body Pain", "Headache", "Nausea"];

export default function SymptomCheckerPage() {
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
    const [otherSymptoms, setOtherSymptoms] = useState('');
    const [analysis, setAnalysis] = useState<SymptomAnalysisOutput | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleCheckboxChange = (symptom: string) => {
        setSelectedSymptoms(prev => 
            prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
        );
    };

    const handleSubmit = async () => {
        const allSymptoms = [...selectedSymptoms, otherSymptoms].filter(Boolean).join(', ');
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
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline text-primary">AI Symptom Checker</h1>
                <p className="text-muted-foreground">Describe your symptoms to get an AI-powered analysis.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Select Your Symptoms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {commonSymptoms.map(symptom => (
                            <div key={symptom} className="flex items-center space-x-2">
                                <Checkbox 
                                    id={symptom} 
                                    onCheckedChange={() => handleCheckboxChange(symptom)}
                                    checked={selectedSymptoms.includes(symptom)}
                                />
                                <Label htmlFor={symptom} className="text-base">{symptom}</Label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Label htmlFor="other-symptoms" className="text-base font-semibold">Describe other symptoms (or provide more detail)</Label>
                        <Textarea
                            id="other-symptoms"
                            placeholder="e.g., 'I have a mild fever and a dry cough, mostly at night...'"
                            className="mt-2"
                            rows={4}
                            value={otherSymptoms}
                            onChange={(e) => setOtherSymptoms(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={handleSubmit} disabled={isPending} className="w-full sm:w-auto">
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                             <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Get AI Analysis
                             </>
                        )}
                    </Button>
                     <Button variant="outline" className="w-full sm:w-auto">
                        <Mic className="mr-2 h-4 w-4" />
                        Voice Input (Telugu/English)
                    </Button>
                </CardFooter>
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
    );
}
