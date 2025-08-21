import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Heart, Droplets, Phone, Mail, MapPin, Shield, FileDown, Pencil, ShieldAlert, Users, HeartPulse, Pill, Trash2, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

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

const healthOverviewItems = [
    { value: "12", label: "Total Visits", icon: Users },
    { value: "2", label: "Active Conditions", icon: HeartPulse },
    { value: "4", label: "Medications", icon: Pill },
];

export default function ProfilePage() {
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
                                <div className="flex items-center gap-2"><User /> 28 years old</div>
                                <div className="flex items-center gap-2"><Heart /> Male</div>
                                <div className="flex items-center gap-2"><Droplets /> B+ Positive</div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><MapPin /> Guntur, Guntur District</div>
                            </div>
                        </div>
                        <Button style={{backgroundColor: 'hsl(var(--nav-profile))'}}><Pencil className="mr-2 h-4 w-4" /> Edit Profile</Button>
                    </div>
                    <Separator className="my-6" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-3"><Mail style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5"/><span>chinta.lokesh@email.com</span></div>
                        <div className="flex items-center gap-3"><Phone style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5"/><span>+91 98765 43210</span></div>
                        <div className="flex items-start gap-3"><MapPin style={{color: 'hsl(var(--nav-profile))'}} className="h-5 w-5 mt-1"/><span>H.No 1-2-3, Jubilee Hills, Hyderabad, India</span></div>
                    </div>
                </CardContent>
            </Card>

            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
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
                </div>
                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {healthOverviewItems.map((item) => (
                                 <Card key={item.label} className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                         <div className="p-2 bg-muted/50 rounded-full">
                                            <item.icon className="h-5 w-5" style={{color: 'hsl(var(--nav-profile))'}} />
                                        </div>
                                        <p className="font-semibold">{item.label}</p>
                                      </div>
                                      <p className="text-2xl font-bold">{item.value}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                    <Card>
                        <CardHeader>
                            <CardTitle>Health Insurance</CardTitle>
                            <CardDescription>Star Health - Family Plan</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 font-semibold"><Shield style={{color: 'hsl(var(--nav-profile))'}}/> Status: <Badge className="bg-green-100 text-green-800">Active</Badge></div>
                            <Button variant="link" className="p-0 h-auto mt-2" style={{color: 'hsl(var(--nav-profile))'}}>View Network Hospitals</Button>
                        </CardContent>
                    </Card>
                    <Button variant="destructive" className="w-full"><ShieldAlert className="mr-2 h-4 w-4" /> Manage Emergency Contacts</Button>
                </div>
            </div>
        </div>
    );
}
