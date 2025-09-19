
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Heart, Droplets, Phone, Mail, MapPin, Shield, FileDown, Pencil, ShieldAlert, Users, HeartPulse, Pill, Trash2, Palette, Search, Hospital } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const recentVisits = [
  { date: "2024-07-15", reason: "Fever & Cold", doctor: "Dr. Shashank" },
  { date: "2024-06-20", reason: "Regular Checkup", doctor: "Dr. Siva Parvathi" },
  { date: "2024-03-10", reason: "Stomach Pain", doctor: "Dr. Nageswarao" },
];

const medicalReports = [
    { name: "Complete Blood Count", date: "2024-07-15" },
    { name: "Lipid Profile", date: "2024-06-20" },
    { name: "X-Ray Chest", date: "2023-11-05" },
]

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

const networkHospitals = [
  {
    name: "Ahalya Ivf And Nursing Home",
    address: "Backside Sivalayam, Kothapet ( City - Guntur )",
  },
  {
    name: "Ahalya Nursing Home",
    address: "12-12-54, Behind Sivalayam Temple, Kothapet ( City - Guntur )",
  },
  {
    name: "Amar Orthopaedic Hospital",
    address: "13-2-12, 1St Lane, Old Club Road, Near Gunturvarithita, Opposite Blood Bank, Kothapet, ( City - Guntur )",
  },
  {
    name: "Amaravathi Institute Of Medical Sciences Pvt Ltd",
    address: "D.No:13-4-74, M.N.R Plaza, Oldclub Road, Kothapet ( City - Guntur )",
  },
  {
    name: "American Oncology Insititute",
    address: "Mangalagiri Road, Nri Hospital Campus, Chinakakani ( City - Mangalagiri )",
  },
  {
    name: "American Oncology Institute - A Unit Of Cancer Treatment Services Hyderabad Pvt. Ltd",
    address: "Mangalagiri Road, Nri Hospital Campus, Chinakakani, Guntur, Andhra Pradesh",
  },
];


export default function ProfilePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredHospitals = networkHospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Avatar className="h-28 w-28 border-4" style={{borderColor: 'hsl(var(--nav-profile))'}}>
                            <AvatarImage src="/images/profile.jpg" />
                            <AvatarFallback className="text-3xl">CL</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold">Chinta Lokesh Babu</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><User /> 27 years old</div>
                                <div className="flex items-center gap-2"><Heart /> Male</div>
                                <div className="flex items-center gap-2"><Droplets /> O+ Positive</div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><MapPin /> Rentachintala, Palnadu District</div>
                            </div>
                        </div>
                        <Button style={{backgroundColor: 'hsl(var(--nav-profile))'}}><Pencil className="mr-2 h-4 w-4" /> Edit Profile</Button>
                    </div>
                    <Separator className="my-6" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-3"><Mail style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5"/><span>lokeshbabu9298@gmail.com</span></div>
                        <div className="flex items-center gap-3"><Phone style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5"/><span>+91 8008334948</span></div>
                        <div className="flex items-start gap-3"><MapPin style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5 mt-1"/><span>Rentala village, Rentachintala mandal, Palnadu district, India</span></div>
                    </div>
                </CardContent>
            </Card>

            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                     <section>
                        <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 bg-muted/50 rounded-full">
                                                    <Users className="h-6 w-6" style={{color: 'hsl(var(--nav-profile))'}} />
                                                </div>
                                                <p className="text-lg font-bold">Total Visits</p>
                                            </div>
                                            <p className="text-3xl font-extrabold">{healthOverviewItems.totalVisits.value}</p>
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
                                                <div className="p-3 bg-muted/50 rounded-full">
                                                    <HeartPulse className="h-6 w-6" style={{color: 'hsl(var(--nav-profile))'}} />
                                                </div>
                                                <p className="text-lg font-bold">Active Conditions</p>
                                            </div>
                                            <p className="text-3xl font-extrabold">{healthOverviewItems.activeConditions.value}</p>
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
                                                <div className="p-3 bg-muted/50 rounded-full">
                                                    <Pill className="h-6 w-6" style={{color: 'hsl(var(--nav-profile))'}} />
                                                </div>
                                                <p className="text-lg font-bold">Medications</p>
                                            </div>
                                            <p className="text-3xl font-extrabold">{healthOverviewItems.medications.value}</p>
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Health Insurance</CardTitle>
                            <CardDescription>Star Health - Family Plan</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-2 font-semibold text-lg"><Shield style={{color: 'hsl(var(--nav-profile))'}}/> Status: <Badge className="bg-green-100 text-green-800 text-base">Active</Badge></div>
                             <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="link" className="p-0 h-auto text-base" style={{color: 'hsl(var(--nav-profile))'}}>View Network Hospitals</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[625px]">
                                    <DialogHeader>
                                        <DialogTitle>Network Hospitals</DialogTitle>
                                    </DialogHeader>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            placeholder="Search hospital name or address..."
                                            className="pl-10"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="max-h-[400px] overflow-y-auto space-y-4 pr-3">
                                        {filteredHospitals.map((hospital, index) => (
                                            <div key={index} className="flex items-start gap-4 p-3 border rounded-lg">
                                                <div className="p-2 bg-muted rounded-full mt-1">
                                                    <Hospital className="h-5 w-5" style={{color: 'hsl(var(--nav-profile))'}}/>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">{hospital.name}</p>
                                                    <p className="text-sm text-muted-foreground">{hospital.address}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Palette className="h-5 w-5" style={{color: 'hsl(var(--nav-profile))'}}/>
                                    <p className="font-semibold">Theme</p>
                                </div>
                                <ThemeToggle />
                            </div>
                             <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                                <div className="flex items-center gap-3">
                                   <Trash2 className="h-5 w-5 text-destructive"/>
                                   <p className="font-semibold">Account</p>
                                </div>
                               <Button variant="destructive" size="sm">Delete Account</Button>
                            </div>
                        </CardContent>
                    </Card>
                    
                </div>
                <div className="space-y-8">
                    <Card>
                        <CardHeader><CardTitle>Recent Visits</CardTitle></CardHeader>
                        <CardContent>
                           <ul className="space-y-4">
                             {recentVisits.map((visit, index) => (
                               <li key={index} className="flex justify-between items-center p-3 bg-muted/40 rounded-lg">
                                   <div>
                                       <p className="font-semibold">{visit.reason}</p>
                                       <p className="text-sm text-muted-foreground">{visit.doctor}</p>
                                   </div>
                                   <p className="text-sm font-medium">{visit.date}</p>
                               </li>
                             ))}
                           </ul>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader><CardTitle>Medical Reports</CardTitle></CardHeader>
                        <CardContent>
                           <ul className="space-y-3">
                             {medicalReports.map((report, index) => (
                               <li key={index} className="flex justify-between items-center p-3 border-b last:border-b-0">
                                   <div>
                                       <p className="font-semibold">{report.name}</p>
                                       <p className="text-sm text-muted-foreground">Date: {report.date}</p>
                                   </div>
                                   <Button variant="outline" size="sm"><FileDown className="mr-2 h-4 w-4" />Download</Button>
                               </li>
                             ))}
                           </ul>
                        </CardContent>
                    </Card>
                    <Button variant="destructive" className="w-full"><ShieldAlert className="mr-2 h-4 w-4" /> Manage Emergency Contacts</Button>
                </div>
            </div>
        </div>
    );
}
