
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, PlusCircle, Scale, Activity, Flame, Footprints, Info, Watch, Radio, Target, Bike, PersonStanding } from "lucide-react";

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

const CircularProgress = ({ percentage, children, size = 200, strokeWidth = 15 } : { percentage: number, children: React.ReactNode, size?: number, strokeWidth?: number }) => {
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


export default function HealthTrackerPage() {
    const latestBmi = 24.5;
    const bmiInfo = getBmiCategory(latestBmi);

    const latestBp = { systolic: 120, diastolic: 80 };
    const bpInfo = getBpCategory(latestBp.systolic, latestBp.diastolic);

    const stepsPercentage = (stepsData.steps / stepsData.goal) * 100;
    const slowWalkingPercentage = (stepsData.slowWalking / (stepsData.slowWalking + stepsData.briskWalking)) * 100;
    const briskWalkingPercentage = 100 - slowWalkingPercentage;

    const weeklyActivityPercentage = (weeklyActivityData.completed / weeklyActivityData.goal) * 100;

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
                            <CircularProgress percentage={stepsPercentage}>
                                <div className="text-center">
                                    <p className="text-muted-foreground">Steps</p>
                                    <p className="text-4xl font-bold">{stepsData.steps}</p>
                                </div>
                            </CircularProgress>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-3 rounded-full bg-muted/30 flex overflow-hidden">
                                <div className="bg-orange-300" style={{width: `${slowWalkingPercentage}%`}}></div>
                                <div className="bg-orange-500" style={{width: `${briskWalkingPercentage}%`}}></div>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                                <p>{stepsData.slowWalking} <span className="text-muted-foreground">({slowWalkingPercentage.toFixed(0)}%) Slow</span></p>
                                <p>{stepsData.briskWalking} <span className="text-muted-foreground">({briskWalkingPercentage.toFixed(0)}%) Brisk</span></p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-sm text-muted-foreground">Distance</p>
                                <p className="text-2xl font-bold">{stepsData.distance} <span className="text-lg">km</span></p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Calories</p>
                                <p className="text-2xl font-bold">{stepsData.calories} <span className="text-lg">kcal</span></p>
                            </div>
                        </div>
                        <div className="flex justify-around rounded-lg bg-muted/30 p-2">
                            {weekDays.map(d => (
                                <div key={d.date} className={`text-center p-2 rounded-md ${d.active ? 'bg-background shadow-sm' : ''}`}>
                                    <p className="text-xs text-muted-foreground">{d.day}</p>
                                    <p className="font-bold">{d.date}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Target/> Weekly Activity</CardTitle>
                        <CardDescription className="flex items-center gap-1.5"><Info className="h-4 w-4"/> WHO suggestion: {weeklyActivityData.goal} Min per week.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <div className="flex justify-center">
                            <CircularProgress percentage={weeklyActivityPercentage}>
                                <div className="text-center">
                                    <p className="text-4xl font-bold">{weeklyActivityPercentage.toFixed(0)}<span className="text-2xl">%</span></p>
                                    <p className="text-muted-foreground font-medium">{weeklyActivityData.completed} Min</p>
                                </div>
                            </CircularProgress>
                        </div>

                        <div className="space-y-4 text-center">
                            <div className="flex justify-around">
                                <div className="text-center">
                                    <p className="text-muted-foreground text-sm">Brisk Walking</p>
                                    <p className="font-bold text-lg">{weeklyActivityData.briskWalking} <span className="text-sm text-muted-foreground">Min</span></p>
                                </div>
                                 <div className="text-center">
                                    <p className="text-muted-foreground text-sm">Running</p>
                                    <p className="font-bold text-lg">{weeklyActivityData.running} <span className="text-sm text-muted-foreground">Min</span></p>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted-foreground text-sm">Cycling</p>
                                    <p className="font-bold text-lg">{weeklyActivityData.cycling} <span className="text-sm text-muted-foreground">Min</span></p>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full h-12 text-lg" style={{backgroundColor: 'hsl(var(--nav-profile))'}}>Start Exercise</Button>
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
                             <CardTitle className="flex items-center gap-2 text-lg mb-4"><Scale /> Body Mass Index (BMI)</CardTitle>
                             <div className="text-center">
                                <p className="text-5xl font-bold">{latestBmi}</p>
                                <Badge className={`mt-2 text-sm ${bmiInfo.className}`}>{bmiInfo.category}</Badge>
                            </div>
                        </Card>
                        <Card className="p-4">
                             <CardTitle className="flex items-center gap-2 text-lg mb-4"><Heart /> Blood Pressure</CardTitle>
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

    