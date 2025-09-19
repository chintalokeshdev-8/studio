

'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, PlusCircle, Scale, Activity, Flame, Footprints, Info, Watch, Radio, Target, Bike, PersonStanding } from "lucide-react";
import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const measurementHistory = [
    { date: "2024-07-20", weight: "75 kg", bp: "120/80 mmHg", bmi: 24.5 },
    { date: "2024-07-13", weight: "75.5 kg", bp: "122/81 mmHg", bmi: 24.7 },
    { date: "2024-07-06", weight: "76 kg", bp: "125/85 mmHg", bmi: 24.8 },
];

const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", className: "bg-blue-100 text-blue-800" };
    if (bmi >= 18.5 && bmi < 25) return { category: "Normal", className: "bg-green-100 text-green-800" };
    if (bmi >= 25 && bmi < 30) return { category: "Overweight", className: "bg-yellow-100 text-yellow-800" };
    if (bmi >= 30 && bmi < 40) return { category: "Obese", className: "bg-red-100 text-red-800" };
    return { category: "Morbidly Obese", className: "bg-red-200 text-red-900" };
};

const getBpCategory = (systolic: number, diastolic: number) => {
    if (systolic < 120 && diastolic < 80) return { category: "Normal", className: "bg-green-100 text-green-800" };
    if (systolic >= 120 && systolic <= 129 && diastolic < 80) return { category: "Elevated", className: "bg-yellow-100 text-yellow-800" };
    if (systolic >= 130 || diastolic >= 80) return { category: "High", className: "bg-red-100 text-red-800" };
    return { category: "Normal", className: "bg-green-100 text-green-800" };
}

const stepsData = {
    steps: 1129,
    goal: 5000,
    slowWalking: 591,
    briskWalking: 538,
    distance: 0.85,
    calories: 34
};

const weeklyActivityData = {
    goal: 150,
    completed: 76,
    briskWalking: 76,
    running: 0,
    cycling: 0,
};

const weekDays = [
    { day: "Mon", date: 15 },
    { day: "Tue", date: 16 },
    { day: "Wed", date: 17, active: true },
    { day: "Thu", date: 18, active: true },
    { day: "Fri", date: 19, active: true },
    { day: "Sat", date: 20 },
    { day: "Sun", date: 21 },
];

const CircularProgress = ({ percentage, children, size = 120, strokeWidth = 10 } : { percentage: number, children: React.ReactNode, size?: number, strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{width: size, height: size}}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    className="text-muted/30"
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size/2}
                    cy={size/2}
                />
                <circle
                    className="text-primary"
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    r={radius}
                    cx={size/2}
                    cy={size/2}
                />
            </svg>
            <div className="absolute">{children}</div>
        </div>
    );
};

const BmiGauge = ({ bmi }: { bmi: number | null }) => {
    const getRotation = (bmiValue: number) => {
        if (bmiValue < 15) return -90;
        if (bmiValue > 45) return 90;
        // Map BMI from 15-45 to -90 to 90 degrees
        return ((bmiValue - 15) / 30) * 180 - 90;
    };

    const rotation = bmi ? getRotation(bmi) : -90;

    return (
        <div className="relative w-[300px] h-[170px] mx-auto">
            <svg viewBox="0 0 100 57" className="w-full h-full overflow-visible">
                {/* Gauge Background Arcs */}
                 <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" strokeWidth="12" className="stroke-muted/30" />

                {/* Colored Arcs for BMI categories */}
                {/* Underweight (blue) < 18.5 */}
                <path d="M 10 50 A 40 40 0 0 1 20.7 15.3" fill="none" strokeWidth="12" stroke="#3b82f6" />
                {/* Normal (green) 18.5 - 25 */}
                <path d="M 20.7 15.3 A 40 40 0 0 1 50 10" fill="none" strokeWidth="12" stroke="#22c55e" />
                {/* Overweight (yellow) 25 - 30 */}
                <path d="M 50 10 A 40 40 0 0 1 79.3 15.3" fill="none" strokeWidth="12" stroke="#facc15" />
                {/* Obese (red) > 30 */}
                <path d="M 79.3 15.3 A 40 40 0 0 1 90 50" fill="none" strokeWidth="12" stroke="#ef4444" />

                {/* Needle */}
                <g transform={`rotate(${rotation} 50 50)`}>
                    <polygon points="50,12 49,50 51,50" fill="hsl(var(--foreground))" />
                    <circle cx="50" cy="50" r="3" fill="hsl(var(--foreground))" />
                </g>
                <text x="50" y="55" textAnchor="middle" className="text-sm font-bold fill-foreground">BODY MASS INDEX</text>
            </svg>
             {bmi !== null && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-2">
                    <p className="text-3xl font-bold" style={{color: 'hsl(var(--nav-profile))'}}>{bmi.toFixed(1)}</p>
                    <Badge className={`text-sm mt-1 ${getBmiCategory(bmi)?.className}`}>{getBmiCategory(bmi)?.category}</Badge>
                </div>
            )}
        </div>
    );
};


export default function HealthTrackerPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('m');
    const [weightUnit, setWeightUnit] = useState('kg');


    const calculatedBmi = useMemo(() => {
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (h > 0 && w > 0) {
            let heightInMeters = h;
            if (heightUnit === 'cm') {
                heightInMeters = h / 100;
            } else if (heightUnit === 'ft') {
                heightInMeters = h * 0.3048;
            }

            let weightInKg = w;
            if (weightUnit === 'lbs') {
                weightInKg = w * 0.453592;
            }
            
            return weightInKg / (heightInMeters * heightInMeters);
        }
        return null;
    }, [height, weight, heightUnit, weightUnit]);

    const latestBmi = 24.5;
    const bmiInfo = getBmiCategory(latestBmi);

    const latestBp = { systolic: 120, diastolic: 80 };
    const bpInfo = getBpCategory(latestBp.systolic, latestBp.diastolic);

    const stepsPercentage = (stepsData.steps / stepsData.goal) * 100;
    const slowWalkingPercentage = (stepsData.slowWalking / (stepsData.slowWalking + stepsData.briskWalking)) * 100;
    const briskWalkingPercentage = 100 - slowWalkingPercentage;

    const weeklyActivityPercentage = (weeklyActivityData.completed / weeklyActivityData.goal) * 100;

    const heightPlaceholders: { [key: string]: string } = {
        m: 'e.g., 1.75',
        cm: 'e.g., 175',
        ft: 'e.g., 5.9'
    };

    const weightPlaceholders: { [key: string]: string } = {
        kg: 'e.g., 75',
        lbs: 'e.g., 165'
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-profile))'}}>Health & Activity</h1>
                    <p className="text-muted-foreground">Monitor your vitals, steps, and activity goals.</p>
                </div>
                <Button variant="outline"><Watch className="mr-2 h-4 w-4"/> Connect Watch</Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Footprints/> Today's Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-center">
                            <CircularProgress percentage={stepsPercentage} size={100} strokeWidth={8}>
                                <div className="text-center">
                                    <p className="text-muted-foreground text-xs">Steps</p>
                                    <p className="text-xl font-bold">{stepsData.steps}</p>
                                </div>
                            </CircularProgress>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-2 rounded-full bg-muted/30 flex overflow-hidden">
                                <div className="bg-orange-300" style={{width: `${slowWalkingPercentage}%`}}></div>
                                <div className="bg-orange-500" style={{width: `${briskWalkingPercentage}%`}}></div>
                            </div>
                            <div className="flex justify-between text-xs font-medium">
                                <p>{stepsData.slowWalking} <span className="text-muted-foreground">Slow</span></p>
                                <p>{stepsData.briskWalking} <span className="text-muted-foreground">Brisk</span></p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-xs text-muted-foreground">Distance</p>
                                <p className="text-lg font-bold">{stepsData.distance} <span className="text-base">km</span></p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Calories</p>
                                <p className="text-lg font-bold">{stepsData.calories} <span className="text-base">kcal</span></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Target/> Weekly Activity</CardTitle>
                        <CardDescription className="flex items-center gap-1.5 text-xs"><Info className="h-3 w-3"/> WHO: {weeklyActivityData.goal} Min/week.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex justify-center">
                            <CircularProgress percentage={weeklyActivityPercentage} size={100} strokeWidth={8}>
                                <div className="text-center">
                                    <p className="text-xl font-bold">{weeklyActivityPercentage.toFixed(0)}<span className="text-base">%</span></p>
                                    <p className="text-muted-foreground font-medium text-xs">{weeklyActivityData.completed} Min</p>
                                </div>
                            </CircularProgress>
                        </div>

                        <div className="space-y-3 text-center">
                            <div className="flex justify-around">
                                <div className="text-center">
                                    <p className="text-muted-foreground text-xs">Brisk Walking</p>
                                    <p className="font-bold">{weeklyActivityData.briskWalking} <span className="text-xs text-muted-foreground">Min</span></p>
                                </div>
                                 <div className="text-center">
                                    <p className="text-muted-foreground text-xs">Running</p>
                                    <p className="font-bold">{weeklyActivityData.running} <span className="text-xs text-muted-foreground">Min</span></p>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted-foreground text-xs">Cycling</p>
                                    <p className="font-bold">{weeklyActivityData.cycling} <span className="text-xs text-muted-foreground">Min</span></p>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full h-10" style={{backgroundColor: 'hsl(var(--nav-profile))'}}>Start Exercise</Button>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Activity /> Vital Signs</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                             <CardTitle className="flex items-center gap-2 text-lg mb-4"><Scale /> Last BMI Reading</CardTitle>
                             <div className="text-center">
                                <p className="text-5xl font-bold">{latestBmi}</p>
                                <Badge className={`mt-2 text-sm ${bmiInfo.className}`}>{bmiInfo.category}</Badge>
                            </div>
                        </Card>
                        <Card className="p-4">
                             <CardTitle className="flex items-center gap-2 text-lg mb-4"><Heart /> Last Blood Pressure</CardTitle>
                            <div className="text-center">
                                <p className="text-5xl font-bold">{latestBp.systolic}/{latestBp.diastolic} <span className="text-2xl text-muted-foreground">mmHg</span></p>
                                <Badge className={`mt-2 text-sm ${bpInfo.className}`}>{bpInfo.category}</Badge>
                            </div>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Scale /> BMI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                        <div className="space-y-2">
                             <div className="flex justify-between items-center">
                                <Label htmlFor="height">Height</Label>
                                <Tabs defaultValue={heightUnit} onValueChange={setHeightUnit} className="w-auto">
                                    <TabsList className="h-7 text-xs">
                                        <TabsTrigger value="m" className="h-5 px-2">m</TabsTrigger>
                                        <TabsTrigger value="cm" className="h-5 px-2">cm</TabsTrigger>
                                        <TabsTrigger value="ft" className="h-5 px-2">ft</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                            <Input id="height" type="number" placeholder={heightPlaceholders[heightUnit]} value={height} onChange={(e) => setHeight(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="calc-weight">Weight</Label>
                                <Tabs defaultValue={weightUnit} onValueChange={setWeightUnit} className="w-auto">
                                     <TabsList className="h-7 text-xs">
                                        <TabsTrigger value="kg" className="h-5 px-2">kg</TabsTrigger>
                                        <TabsTrigger value="lbs" className="h-5 px-2">lbs</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                            <Input id="calc-weight" type="number" placeholder={weightPlaceholders[weightUnit]} value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <BmiGauge bmi={calculatedBmi} />
                    </div>
                </CardContent>
            </Card>


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

    

