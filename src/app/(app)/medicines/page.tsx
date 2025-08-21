import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FlaskConical, Stethoscope, Microscope, LifeBuoy, Bell, Utensils, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const medicineSchedule = [
    { name: "Paracetamol", dosage: "500mg", time: "After Breakfast", taken: true },
    { name: "Vitamin D3", dosage: "60000 IU", time: "After Lunch", taken: true },
    { name: "Metformin", dosage: "1000mg", time: "After Dinner", taken: false },
    { name: "Omega-3", dosage: "1 capsule", time: "After Dinner", taken: false },
];

const medicineAssistanceItems = [
    { href: '/medicine-assistant', icon: FlaskConical, label: 'AI Medicine Assistant' },
    { href: '#', icon: Stethoscope, label: 'Nearby Pharmacies' },
    { href: '#', icon: Microscope, label: 'Drug Interaction Check' },
    { href: '#', icon: LifeBuoy, label: 'Pharmacist Consultation' },
];

export default function MyMedicinesPage() {
    return (
        <div className="space-y-8">
            <div className="text-left">
                <h1 className="text-3xl font-bold font-headline text-primary">My Medicines</h1>
                <p className="text-muted-foreground">Your daily medication schedule and recovery plan.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bell /> Today's Schedule</CardTitle>
                            <CardDescription>Wednesday, July 17, 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {medicineSchedule.map((med, index) => (
                                    <div key={index} className={`p-4 rounded-lg flex items-center justify-between ${med.taken ? 'bg-green-100/50 border border-green-200' : 'bg-secondary/50'}`}>
                                        <div>
                                            <p className="font-bold text-lg">{med.name}</p>
                                            <p className="text-sm text-muted-foreground">{med.dosage} • {med.time}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id={`med-${index}`} checked={med.taken} />
                                            <Label htmlFor={`med-${index}`}>{med.taken ? 'Taken' : 'Take'}</Label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><Award /> Weekly Progress</CardTitle>
                             <CardDescription>Your adherence to medication and diet plan this week.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1"><p>Medication</p><p>90%</p></div>
                                    <Progress value={90} className="h-2"/>
                                </div>
                                 <div>
                                    <div className="flex justify-between mb-1"><p>Diet</p><p>75%</p></div>
                                    <Progress value={75} className="h-2"/>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Diet & Recovery Plan</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label>Recovery Probability</Label>
                                <div className="flex items-center gap-2 mt-1">
                                    <Progress value={85} className="w-full" />
                                    <span className="font-bold text-primary">85%</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold flex items-center gap-2 mb-2"><Utensils className="text-primary"/> Recommended Diet Plan</h3>
                                <div className="text-sm text-muted-foreground p-3 bg-secondary/50 rounded-lg">
                                    <p>• Low-carb, high-protein diet.</p>
                                    <p>• Avoid sugary drinks and processed foods.</p>
                                    <p>• Drink at least 8 glasses of water daily.</p>
                                </div>
                                <Button variant="link" className="p-0 h-auto mt-2">View Detailed Plan</Button>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader><CardTitle>Medicine Assistance</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                           {medicineAssistanceItems.map((item) => (
                             <Link key={item.label} href={item.href} passHref>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    {item.label}
                                </Button>
                            </Link>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
