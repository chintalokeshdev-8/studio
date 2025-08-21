'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { aiMedicineAssistant, AiMedicineAssistantOutput } from '@/ai/flows/ai-medicine-assistant';
import { Loader2, Sparkles, Pill, AlertTriangle, FileText } from 'lucide-react';

export default function MedicineAssistantPage() {
    const [medicineName, setMedicineName] = useState('');
    const [result, setResult] = useState<AiMedicineAssistantOutput | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!medicineName) return;

        startTransition(async () => {
            const res = await aiMedicineAssistant({ medicineName });
            setResult(res);
        });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline text-primary">AI Medicine Assistant</h1>
                <p className="text-muted-foreground">Get information about medications, dosages, and side effects.</p>
            </div>

            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Enter Medicine Name</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            placeholder="e.g., Paracetamol"
                            value={medicineName}
                            onChange={(e) => setMedicineName(e.target.value)}
                            disabled={isPending}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isPending || !medicineName}>
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Fetching...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Get Information
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            {isPending && (
                <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                        <h2 className="text-xl font-semibold">Loading Medicine Data...</h2>
                        <p className="text-muted-foreground">Our AI is preparing the information for you.</p>
                    </CardContent>
                </Card>
            )}

            {result && !isPending && (
                <Card className="bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">{result.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-semibold flex items-center gap-2 mb-2"><Pill /> Dosage</h3>
                            <p>{result.dosage}</p>
                        </div>
                         <hr/>
                        <div>
                            <h3 className="font-semibold flex items-center gap-2 mb-2"><AlertTriangle /> Side Effects</h3>
                            <p>{result.sideEffects}</p>
                        </div>
                        <Card className="bg-yellow-50 border-yellow-200 mt-6">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-yellow-800 text-base"><FileText size={16}/> Disclaimer</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-yellow-700">
                                This information is AI-generated and for informational purposes only. It is not a substitute for professional medical advice. Always consult with a qualified healthcare provider before making any decisions about your health or treatment.
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
