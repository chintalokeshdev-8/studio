
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, PlusCircle, Scale, Activity } from "lucide-react";

const measurementHistory = [
    { date: "2024-07-20", weight: "75 kg", bp: "120/80 mmHg", bmi: 24.5 },
    { date: "2024-07-13", weight: "75.5 kg", bp: "122/81 mmHg", bmi: 24.7 },
    { date: "2024-07-06", weight: "76 kg", bp: "125/85 mmHg", bmi: 24.8 },
];

const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", className: "bg-blue-100 text-blue-800" };
    if (bmi >= 18.5 && bmi < 25) return { category: "Normal", className: "bg-green-100 text-green-800" };
    if (bmi >= 25 && bmi < 30) return { category: "Overweight", className: "bg-yellow-100 text-yellow-800" };
    return { category: "Obese", className: "bg-red-100 text-red-800" };
};

const getBpCategory = (systolic: number, diastolic: number) => {
    if (systolic < 120 && diastolic < 80) return { category: "Normal", className: "bg-green-100 text-green-800" };
    if (systolic >= 120 && systolic <= 129 && diastolic < 80) return { category: "Elevated", className: "bg-yellow-100 text-yellow-800" };
    if (systolic >= 130 || diastolic >= 80) return { category: "High", className: "bg-red-100 text-red-800" };
    return { category: "Normal", className: "bg-green-100 text-green-800" };
}

export default function HealthTrackerPage() {
    const latestBmi = 24.5;
    const bmiInfo = getBmiCategory(latestBmi);

    const latestBp = { systolic: 120, diastolic: 80 };
    const bpInfo = getBpCategory(latestBp.systolic, latestBp.diastolic);

    return (
        <div className="space-y-8">
            <div className="text-left">
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-profile))'}}>Health Tracker</h1>
                <p className="text-muted-foreground">Monitor your BMI, Blood Pressure, and other vital signs.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Scale /> Body Mass Index (BMI)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-5xl font-bold">{latestBmi}</p>
                        <Badge className={`mt-2 text-sm ${bmiInfo.className}`}>{bmiInfo.category}</Badge>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Heart /> Blood Pressure</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-5xl font-bold">{latestBp.systolic}/{latestBp.diastolic} <span className="text-2xl text-muted-foreground">mmHg</span></p>
                        <Badge className={`mt-2 text-sm ${bpInfo.className}`}>{bpInfo.category}</Badge>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><PlusCircle /> Add New Measurement</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input id="weight" type="number" placeholder="e.g., 75" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                         <div className="space-y-2">
                            <Label htmlFor="bpSystolic">BP Systolic</Label>
                            <Input id="bpSystolic" type="number" placeholder="e.g., 120" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="bpDiastolic">BP Diastolic</Label>
                            <Input id="bpDiastolic" type="number" placeholder="e.g., 80" />
                        </div>
                    </div>
                    <Button className="w-full sm:w-auto" style={{backgroundColor: 'hsl(var(--nav-profile))'}}>Save Measurement</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Activity /> Measurement History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Weight</TableHead>
                                <TableHead>Blood Pressure</TableHead>
                                <TableHead>BMI</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {measurementHistory.map((entry, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{entry.date}</TableCell>
                                    <TableCell>{entry.weight}</TableCell>
                                    <TableCell>{entry.bp}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={getBmiCategory(entry.bmi).className}>{entry.bmi}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
}
