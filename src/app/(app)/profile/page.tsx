import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Heart, Droplets, Phone, Mail, MapPin, Shield, FileDown, Pencil, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recentVisits = [
  { date: "2024-07-15", reason: "Fever & Cold", doctor: "Dr. Rajesh Kumar" },
  { date: "2024-06-20", reason: "Regular Checkup", doctor: "Dr. Rajesh Kumar" },
  { date: "2024-03-10", reason: "Stomach Pain", doctor: "Dr. Priya Sharma" },
];

const medicalReports = [
    { name: "Complete Blood Count", date: "2024-07-15" },
    { name: "Lipid Profile", date: "2024-06-20" },
    { name: "X-Ray Chest", date: "2023-11-05" },
]

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile picture" />
                    <AvatarFallback className="text-3xl">CL</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-3xl font-bold font-headline">Chinta Lokesh Babu</h1>
                    <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-2"><User /> 28 years old</div>
                        <div className="flex items-center gap-2"><Heart /> Male</div>
                        <div className="flex items-center gap-2"><Droplets /> B+ Positive</div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card><CardContent className="p-4"><p className="font-semibold">Total Visits</p><p className="text-2xl font-bold">12</p></CardContent></Card>
                <Card><CardContent className="p-4"><p className="font-semibold">Active Conditions</p><p className="text-2xl font-bold">2</p></CardContent></Card>
                <Card><CardContent className="p-4"><p className="font-semibold">Current Medications</p><p className="text-2xl font-bold">4</p></CardContent></Card>
                <Card><CardContent className="p-4"><p className="font-semibold">Last Test Date</p><p className="text-2xl font-bold">15 Jul 2024</p></CardContent></Card>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader><CardTitle>Recent Visits</CardTitle></CardHeader>
                        <CardContent>
                           <ul className="space-y-4">
                             {recentVisits.map((visit, index) => (
                               <li key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
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
                </div>
                <div className="space-y-8">
                    <Card>
                        <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-3"><Mail className="text-primary"/><span>chinta.lokesh@email.com</span></div>
                            <div className="flex items-center gap-3"><Phone className="text-primary"/><span>+91 98765 43210</span></div>
                            <div className="flex items-start gap-3"><MapPin className="text-primary mt-1"/><span>H.No 1-2-3, Jubilee Hills, Hyderabad, India</span></div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Health Insurance</CardTitle>
                            <CardDescription>Star Health - Family Plan</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 font-semibold"><Shield className="text-primary"/> Status: <Badge className="bg-green-600 text-white">Active</Badge></div>
                            <Button variant="link" className="p-0 h-auto mt-2">View Network Hospitals</Button>
                        </CardContent>
                    </Card>
                    <div className="grid grid-cols-2 gap-4">
                        <Button><Pencil className="mr-2 h-4 w-4" /> Edit Profile</Button>
                        <Button variant="destructive"><ShieldAlert className="mr-2 h-4 w-4" /> Emergency Contacts</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
