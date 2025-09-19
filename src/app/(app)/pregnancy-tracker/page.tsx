
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Baby, CalendarDays, Camera, FileText, Flame, HeartHand, Info, Phone, ShieldAlert, Utensils, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const pregnancyFeatures = [
    { title: "Diet Plan (ఆహార ప్రణాళిక)", icon: Utensils, href: "#" },
    { title: "Daily Activities (రోజువారీ కార్యకలాపాలు)", icon: Flame, href: "#" },
    { title: "Scans & Reports (స్కాన్‌లు & నివేదికలు)", icon: FileText, href: "#" },
    { title: "Care Support (సంరక్షణ మద్దతు)", icon: HeartHand, href: "#" },
]

export default function PregnancyTrackerPage() {
    const pregnancyWeek = 22;
    const progressPercentage = (pregnancyWeek / 40) * 100;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-appointments))'}}>Pregnancy Tracker</h1>
                <p className="text-muted-foreground mt-2">Your journey to motherhood, week by week.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Your Pregnancy Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-center">
                        <p className="text-lg font-semibold">Week {pregnancyWeek} / 40</p>
                        <p className="text-muted-foreground">Second Trimester</p>
                    </div>
                    <Progress value={progressPercentage} className="h-4" />
                    <div className="flex justify-between text-xs font-medium text-muted-foreground">
                        <span>Week 1</span>
                        <span>Week 40</span>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pregnancyFeatures.map(feature => (
                     <Link key={feature.title} href={feature.href} passHref>
                        <Card className="text-center p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full flex flex-col items-center justify-center aspect-square">
                           <div className="p-3 rounded-full mb-3" style={{backgroundColor: 'hsla(var(--nav-appointments)/0.1)'}}>
                                <feature.icon className="h-10 w-10" style={{color: 'hsl(var(--nav-appointments))'}} />
                            </div>
                            <p className="font-bold text-sm">{feature.title}</p>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><CalendarDays /> This Week's Guide</CardTitle>
                            <CardDescription>What to expect in Week {pregnancyWeek}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Baby's Development</h4>
                                <div className="flex items-start gap-4">
                                     <Baby className="h-8 w-8 mt-1" style={{color: 'hsl(var(--nav-appointments))'}}/>
                                     <p className="text-muted-foreground">
                                        Your baby is now about the size of a small doll, and their senses are developing rapidly. They can hear your voice, and you might start to feel their first movements, known as "quickening."
                                    </p>
                                </div>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg mb-2">Mother's Changes</h4>
                                 <div className="flex items-start gap-4">
                                    <HeartHand className="h-8 w-8 mt-1" style={{color: 'hsl(var(--nav-appointments))'}}/>
                                    <p className="text-muted-foreground">
                                        You may be feeling more energetic as morning sickness subsides. Your baby bump is becoming more noticeable. It's a great time to focus on a healthy diet and gentle exercise.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Award/> Congratulations!</CardTitle>
                             <CardDescription>This will be your certificate after delivery.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center p-8 bg-muted/40 rounded-lg space-y-4">
                            <Camera className="mx-auto h-16 w-16 text-muted-foreground"/>
                            <p className="font-semibold text-muted-foreground">Awaiting the big day!</p>
                             <p className="text-sm text-muted-foreground">After delivery, you'll find a beautiful certificate here with your and your baby's photo.</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Doctor & Emergency</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="female doctor" />
                                    <AvatarFallback>DR</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold">Dr. Meena Reddy</p>
                                    <p className="text-sm text-muted-foreground">Gynecologist</p>
                                </div>
                            </div>
                             <Button className="w-full justify-start gap-2" variant="outline"><Phone className="h-4 w-4"/> Call Doctor</Button>
                             <Button className="w-full justify-start gap-2" variant="outline"><Video className="h-4 w-4"/> Video Consult</Button>
                              <Button className="w-full justify-start gap-2 text-destructive border-destructive/50 hover:bg-destructive/10 hover:text-destructive" variant="outline">
                                <ShieldAlert className="h-4 w-4"/> Emergency Contact
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
