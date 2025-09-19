
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartPulse, MessageSquare, Siren, Users, TestTube, FlaskConical, LifeBuoy, Stethoscope, Microscope, Pill, Headset, Phone, Link2, CalendarCheck, User, Heart, Baby, Leaf, Droplets, Wind, Brain, LayoutGrid, Activity, FileText, MapPin, UserPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { PregnantLadyIcon } from '@/components/icons/pregnant-lady-icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatDistanceToNow } from "date-fns";
import { Switch } from "@/components/ui/switch";


const quickAccessItems = [
  { href: "/", icon: LayoutGrid, label: 'Dashboard', description: 'హోమ్', color: 'hsl(var(--nav-home))' },
  { href: '/symptom-checker', icon: HeartPulse, label: 'AI Symptom Checker', description: 'వైద్య లక్షణాలు తనిఖీ', color: 'hsl(var(--nav-symptoms))' },
  { href: '/health-tracker', label: 'Health Tracker', description: 'ఆరోగ్య ట్రాకర్', icon: Activity, color: 'hsl(var(--nav-profile))' },
  { href: '/pregnancy-tracker', label: 'Pregnancy Care', description: 'గర్భం', icon: PregnantLadyIcon, color: 'hsl(var(--nav-appointments))' },
  { href: '/appointments', icon: CalendarCheck, label: 'Appointments', description: 'సమయం నమోదు చేసుకోండి', color: 'hsl(var(--nav-appointments))' },
  { href: '/opd-queue', icon: MessageSquare, label: 'Chat & Queue', description: 'మీ వంతు & చాట్', color: 'hsl(var(--nav-chat))' },
  { href: '/junior-doctors', icon: Headset, label: '24/7 Jr. Doctors', description: 'ఉచిత సలహా', color: 'hsl(var(--nav-junior-doctors))' },
  { href: '/lab-reports', icon: TestTube, label: 'Diagnostics', description: 'రిపోర్టులు చూడండి', color: 'hsl(var(--nav-diagnostics))' },
  { href: '/medicines', icon: Pill, label: 'My Medicines', description: 'మీ మందులు', color: 'hsl(var(--nav-medicines))' },
  { href: '/profile', icon: User, label: 'Profile', description: 'ప్రొఫైల్', color: 'hsl(var(--nav-profile))' },
  { href: '/emergency', icon: Siren, label: 'Emergency', description: 'తక్షణ సహాయం', color: 'hsl(var(--nav-emergency))' },
];

const medicineAssistanceItems = [
    { 
        icon: FlaskConical, 
        title: 'AI Medicine Assistant',
        description: 'Get instant answers about your medications.',
        buttonText: 'Ask AI',
        href: '/medicine-assistant'
    },
    { 
        icon: Users, 
        title: 'Pharmacist Consultation',
        description: 'Speak with a licensed pharmacist for expert advice.',
        buttonText: 'Consult',
        href: '#'
    },
];

const healthOverviewItems = {
  totalVisits: {
    value: "12",
    label: "Total Visits",
    icon: Users,
    data: [
      { date: "2024-07-15", reason: "Fever & Cold", doctor: "Dr. Shashank" },
      { date: "2024-06-20", reason: "Regular Checkup", doctor: "Dr. Siva Parvathi" },
      { date: "2024-03-10", reason: "Stomach Pain", doctor: "Dr. Nageswarao" },
    ]
  },
  activeConditions: {
    value: "2",
    label: "Active Conditions",
    icon: HeartPulse,
    data: [
        { condition: "Fever & Cold", since: "2024-07-15", status: "Improving" },
        { condition: "Allergic Rhinitis", since: "2024-01-01", status: "Ongoing" },
    ]
  },
  medications: {
    value: "4",
    label: "Medications",
    icon: Pill,
    data: [
        { name: "Paracetamol", dosage: "500mg", frequency: "As needed" },
        { name: "Cetirizine", dosage: "10mg", frequency: "Once a day" },
        { name: "Metformin", dosage: "1000mg", frequency: "Twice a day" },
        { name: "Vitamin D3", dosage: "60000 IU", frequency: "Once a week" },
    ]
  },
};


const StomachIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8.5 2.5C5.5 2.5 4.5 5.5 4.5 8.5C4.5 11.5 5.5 13.5 8.5 13.5C11.5 13.5 12.5 11.5 12.5 8.5C12.5 5.5 11.5 2.5 8.5 2.5z" />
        <path d="M15.5 12.5C15.5 12.5 16.5 13.5 16.5 15.5C16.5 17.5 15.5 18.5 15.5 18.5" />
        <path d="M4.5 8.5C4.5 8.5 4.5 14.5 8.5 17.5C12.5 20.5 15.5 18.5 15.5 18.5" />
    </svg>
);


const organHealthData = [
    {
      name: "Heart",
      health: 95,
      icon: Heart,
      image: "https://picsum.photos/seed/heart/100/100",
      dataAiHint: "heart organ",
      color: "hsl(var(--nav-emergency))",
    },
    {
      name: "Liver",
      health: 92,
      icon: Leaf,
      image: "https://picsum.photos/seed/liver/100/100",
      dataAiHint: "liver organ",
      color: "hsl(var(--nav-diagnostics))",
    },
    {
      name: "Kidneys",
      health: 90,
      icon: Droplets,
      image: "https://picsum.photos/seed/kidneys/100/100",
      dataAiHint: "kidneys organ",
      color: "hsl(var(--nav-chat))",
    },
    {
      name: "Lungs",
      health: 88,
      icon: Wind,
      image: "https://picsum.photos/seed/lungs/100/100",
      dataAiHint: "lungs organ",
      color: "hsl(var(--nav-junior-doctors))",
    },
    {
      name: "Brain",
      health: 98,
      icon: Brain,
      image: "https://picsum.photos/seed/brain/100/100",
      dataAiHint: "brain organ",
      color: "hsl(var(--nav-symptoms))",
    },
    {
        name: "Stomach (Gut)",
        health: 93,
        icon: StomachIcon,
        image: "https://picsum.photos/seed/stomach/100/100",
        dataAiHint: "stomach organ",
        color: "hsl(var(--nav-medicines))",
    }
];

const CircularProgress = ({ percentage, children, size = 100, strokeWidth = 8, color } : { percentage: number, children: React.ReactNode, size?: number, strokeWidth?: number, color?: string }) => {
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
                    stroke={color || "hsl(var(--primary))"}
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

const bloodRequests = [
    { patientName: "lokesh chinta", bloodType: "O+", city: "guntur", contactInfo: "lokesh@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 5) },
    { patientName: "venkatesh", bloodType: "A+", city: "hyderabad", contactInfo: "venky@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 30) },
    { patientName: "surya", bloodType: "B-", city: "guntur", contactInfo: "surya@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 60 * 2) },
    { patientName: "pavan", bloodType: "AB+", city: "vijayawada", contactInfo: "pavan@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 60 * 5) },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const cities = ["All", "guntur", "hyderabad", "vijayawada", "mumbai", "bangalore"];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for doctors, medicines, reports..." className="pl-10 h-12 text-base" />
        </div>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary-foreground/50">
              <AvatarImage src="/images/profile.jpg" />
              <AvatarFallback>CLB</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Chinta Lokesh Babu</h2>
              <p className="text-sm opacity-80">Patient ID: PAT001</p>
            </div>
          </div>
          <div className="text-right">
              <p className="font-bold text-lg">O+ Positive</p>
              <p className="text-sm opacity-80">Blood Group</p>
          </div>
        </CardContent>
      </Card>

       <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--primary))'}}><Heart style={{color: 'hsl(var(--primary))'}}/>Organ Health Overview</CardTitle>
                <div className="text-sm text-muted-foreground">
                    <p>A summary of your key organ health based on recent reports.</p>
                    <p>మీ గత నివేదికల(Reports) ప్రకారం, మీ ముఖ్య అవయవాల ఆరోగ్య స్థితి యొక్క సారాంశం ఇది.</p>
                </div>
          </CardHeader>
          <CardContent className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {organHealthData.map((organ) => (
                  <Card key={organ.name} className="p-2 flex flex-col items-center text-center">
                      <CircularProgress percentage={organ.health} size={80} strokeWidth={6} color={organ.color}>
                          <Image
                              src={organ.image}
                              alt={organ.name}
                              width={40}
                              height={40}
                              data-ai-hint={organ.dataAiHint}
                              className="rounded-full object-cover"
                          />
                      </CircularProgress>
                      <p className="mt-2 text-sm font-bold">{organ.name}</p>
                      <p className="font-semibold text-base" style={{color: organ.color}}>{organ.health}%</p>
                      <p className="text-xs text-muted-foreground">Healthy</p>
                  </Card>
              ))}
          </CardContent>
      </Card>


      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Card className="text-center p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full flex flex-col items-center justify-center aspect-square">
                <div className="p-3 rounded-full mb-3" style={{backgroundColor: `${item.color.replace(')', ' / 0.1)')}`}}>
                    <item.icon className="h-10 w-10" style={{color: item.color}} />
                </div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
          <div className="grid grid-cols-1 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                    <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-muted/50 rounded-full">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <p className="font-semibold">Total Visits</p>
                            </div>
                            <p className="text-2xl font-bold">{healthOverviewItems.totalVisits.value}</p>
                        </div>
                    </Card>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2"><Users />Total Visits</DialogTitle>
                        <DialogDescription>Your recent appointment history.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {healthOverviewItems.totalVisits.data.map((visit, index) => (
                            <div key={index} className="p-3 border rounded-lg">
                                <p className="font-semibold">{visit.reason}</p>
                                <p className="text-sm text-muted-foreground">{visit.doctor}</p>
                                <p className="text-xs text-muted-foreground mt-1">{visit.date}</p>
                            </div>
                        ))}
                    </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                    <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-muted/50 rounded-full">
                                    <HeartPulse className="h-5 w-5 text-primary" />
                                </div>
                                <p className="font-semibold">Active Conditions</p>
                            </div>
                            <p className="text-2xl font-bold">{healthOverviewItems.activeConditions.value}</p>
                        </div>
                    </Card>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2"><HeartPulse />Active Conditions</DialogTitle>
                         <DialogDescription>Your current health conditions.</DialogDescription>
                    </DialogHeader>
                     <div className="space-y-3 max-h-96 overflow-y-auto">
                        {healthOverviewItems.activeConditions.data.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                                <div>
                                    <p className="font-semibold">{item.condition}</p>
                                    <p className="text-sm text-muted-foreground">Since: {item.since}</p>
                                </div>
                                <Badge variant="outline">{item.status}</Badge>
                            </div>
                        ))}
                    </div>
                </DialogContent>
              </Dialog>

             <Dialog>
                <DialogTrigger asChild>
                    <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-muted/50 rounded-full">
                                    <Pill className="h-5 w-5 text-primary" />
                                </div>
                                <p className="font-semibold">Medications</p>
                            </div>
                            <p className="text-2xl font-bold">{healthOverviewItems.medications.value}</p>
                        </div>
                    </Card>
                </DialogTrigger>
                 <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2"><Pill />Medications</DialogTitle>
                        <DialogDescription>Your current medication plan.</DialogDescription>
                    </DialogHeader>
                     <div className="space-y-3 max-h-96 overflow-y-auto">
                        {healthOverviewItems.medications.data.map((med, index) => (
                            <div key={index} className="p-3 border rounded-lg">
                                <p className="font-semibold">{med.name}</p>
                                <p className="text-sm text-muted-foreground">{med.dosage} &bull; {med.frequency}</p>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Medicine Assistance</h2>
          <div className="space-y-4">
            {medicineAssistanceItems.map((item) => (
               <Link key={item.title} href={item.href} passHref>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                              <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>

                          </div>
                          <Button size="sm" variant="ghost" style={{color: 'hsl(var(--nav-medicines))'}}>{item.buttonText}</Button>
                      </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

       <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-2 font-extrabold text-2xl"><Droplets className="text-destructive"/> Blood Donation</CardTitle>
              <CardDescription>Connect with donors or request blood in critical moments.</CardDescription>
          </CardHeader>
          <CardContent>
              <Tabs defaultValue="find" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                      <TabsTrigger value="find" className="text-sm font-semibold h-14">
                          Find a Donor
                      </TabsTrigger>
                      <TabsTrigger value="request" className="text-sm font-semibold h-14 whitespace-normal text-center">
                          Request Blood
                      </TabsTrigger>
                      <TabsTrigger value="register" className="text-sm font-semibold h-14 whitespace-normal text-center flex-col gap-1">
                          <div className='flex items-center gap-2'><UserPlus className="h-4 w-4"/>Become a Donor</div>
                      </TabsTrigger>
                  </TabsList>
                  <div className="mt-6">
                      <TabsContent value="find" className="mt-0">
                          <div className="space-y-4">
                              <div className="grid sm:grid-cols-2 gap-4">
                                  <Select>
                                      <SelectTrigger>
                                          <SelectValue placeholder="Filter by Blood Type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                          {bloodGroups.map(bg => <SelectItem key={bg} value={bg}>{bg}</SelectItem>)}
                                      </SelectContent>
                                  </Select>
                                  <Select>
                                      <SelectTrigger>
                                          <SelectValue placeholder="Filter by City" />
                                      </SelectTrigger>
                                      <SelectContent>
                                          {cities.map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}
                                      </SelectContent>
                                  </Select>
                              </div>
                              <div className="space-y-3 max-h-96 overflow-y-auto p-1">
                                  {bloodRequests.map((req, index) => (
                                      <Card key={index} className="p-4 shadow-sm">
                                          <div className="flex justify-between items-start">
                                              <div>
                                                  <p className="font-extrabold text-lg flex items-center gap-2">
                                                      <User className="h-4 w-4"/> {req.patientName}
                                                  </p>
                                                  <div className="flex items-center gap-4 mt-2">
                                                      <Badge variant="destructive" className="text-base font-bold px-3 py-1">{req.bloodType}</Badge>
                                                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                          <MapPin className="h-4 w-4"/> {req.city}
                                                      </p>
                                                  </div>
                                              </div>
                                              <div className="text-right">
                                                  <Button style={{backgroundColor: "hsl(var(--primary))"}}>Contact</Button>
                                                  <p className="text-xs text-muted-foreground mt-2">
                                                      {formatDistanceToNow(req.postedAt, { addSuffix: true })}
                                                  </p>
                                              </div>
                                          </div>
                                      </Card>
                                  ))}
                              </div>
                          </div>
                      </TabsContent>
                      <TabsContent value="request" className="mt-0">
                          <form className="space-y-4">
                              <div className="space-y-2">
                                  <Label htmlFor="patientName">Patient Name</Label>
                                  <Input id="patientName" placeholder="Enter patient's name" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                      <Label htmlFor="bloodType">Blood Group</Label>
                                      <Select>
                                          <SelectTrigger id="bloodType">
                                              <SelectValue placeholder="Select" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              {bloodGroups.slice(1).map(bg => <SelectItem key={bg} value={bg}>{bg}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="city">City</Label>
                                       <Select>
                                          <SelectTrigger id="city">
                                              <SelectValue placeholder="Select City" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              {cities.slice(1).map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <Label htmlFor="contactInfo">Contact Info (Phone or Email)</Label>
                                  <Input id="contactInfo" placeholder="Enter contact details" />
                              </div>
                              <Button type="submit" variant="destructive" className="w-full">Post Blood Request</Button>
                          </form>
                      </TabsContent>
                      <TabsContent value="register" className="mt-0">
                          <form className="space-y-6">
                              <div className="space-y-2">
                                  <Label htmlFor="donorName">Full Name</Label>
                                  <Input id="donorName" placeholder="Enter your full name" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                      <Label htmlFor="donorBloodType">Blood Group</Label>
                                      <Select>
                                          <SelectTrigger id="donorBloodType">
                                              <SelectValue placeholder="Select" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              {bloodGroups.slice(1).map(bg => <SelectItem key={bg} value={bg}>{bg}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="donorCity">City</Label>
                                       <Select>
                                          <SelectTrigger id="donorCity">
                                              <SelectValue placeholder="Select City" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              {cities.slice(1).map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}
                                          </SelectContent>
                                      </Select>
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <Label htmlFor="donorContact">Contact Info (Phone or Email)</Label>
                                  <Input id="donorContact" placeholder="Enter contact details" />
                              </div>
                               <div className="flex items-center space-x-4 rounded-md border p-4">
                                  <UserPlus className="h-6 w-6"/>
                                  <div className="flex-1 space-y-1">
                                      <p className="text-sm font-medium leading-none">Available to Donate</p>
                                      <p className="text-sm text-muted-foreground">
                                          Enable this to appear in searches for nearby donation requests.
                                      </p>
                                  </div>
                                  <Switch id="availability-mode" />
                              </div>
                              <Button type="submit" className="w-full" style={{backgroundColor: 'hsl(var(--nav-emergency))'}}>Register as a Donor</Button>
                          </form>
                      </TabsContent>
                  </div>
              </Tabs>
          </CardContent>
      </Card>
    </div>
  );
}
