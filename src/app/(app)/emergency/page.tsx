
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ShieldAlert, PlusCircle, AlertTriangle, Droplet, User, Building, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatDistanceToNow } from "date-fns";
import { Switch } from "@/components/ui/switch";

const emergencyContacts = [
    { name: "Apollo Emergency Ambulance", distance: "2.5 km", available: true },
    { name: "Care Hospital Emergency", distance: "4 km", available: true },
    { name: "Dr. Rajesh Kumar (Emergency)", distance: "N/A", available: false },
    { name: "Police Emergency", distance: "1.2 km", available: true },
    { name: "Fire Department", distance: "3 km", available: true },
]

const bloodRequests = [
    { patientName: "lokesh chinta", bloodType: "O+", city: "guntur", contactInfo: "lokesh@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 5) },
    { patientName: "venkatesh", bloodType: "A+", city: "hyderabad", contactInfo: "venky@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 30) },
    { patientName: "surya", bloodType: "B-", city: "guntur", contactInfo: "surya@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 60 * 2) },
    { patientName: "pavan", bloodType: "AB+", city: "vijayawada", contactInfo: "pavan@email.com", postedAt: new Date(Date.now() - 1000 * 60 * 60 * 5) },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const cities = ["All", "guntur", "hyderabad", "vijayawada", "mumbai", "bangalore"];

export default function EmergencyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-destructive">Emergency Services</h1>
                <p className="text-muted-foreground mt-2">In case of emergency, use the options below immediately.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Button className="h-24 text-2xl font-bold" variant="destructive">
                    <Phone className="mr-4 h-8 w-8" /> CALL AMBULANCE - 108
                </Button>
                <Button className="h-24 text-2xl font-bold" variant="secondary">
                    <MapPin className="mr-4 h-8 w-8" /> Share My Location
                </Button>
            </div>
            
            <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><ShieldAlert/> Critical Information</CardTitle>
                    <CardDescription>Share this with emergency services.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    <p><strong>Name:</strong> Chinta Lokesh Babu</p>
                    <p><strong>Age:</strong> 27 Years</p>
                    <p><strong>Blood Group:</strong> O+ Positive</p>
                    <p><strong>Contact:</strong> +91 8008334948</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Droplet className="text-destructive"/> Blood Donation</CardTitle>
                    <CardDescription>Connect with donors or request blood in critical moments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="find">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="find">Find a Donor</TabsTrigger>
                            <TabsTrigger value="request">Request Blood</TabsTrigger>
                            <TabsTrigger value="register"><UserPlus className="mr-2 h-4 w-4"/>Become a Donor</TabsTrigger>
                        </TabsList>
                        <TabsContent value="find" className="mt-4">
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
                                        <Card key={index} className="p-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-bold text-lg flex items-center gap-2">
                                                        <User className="h-4 w-4"/> {req.patientName}
                                                    </p>
                                                    <div className="flex items-center gap-4 mt-2">
                                                        <Badge variant="destructive" className="text-base">{req.bloodType}</Badge>
                                                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                            <MapPin className="h-4 w-4"/> {req.city}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <Button>Contact</Button>
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
                        <TabsContent value="request" className="mt-4">
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
                        <TabsContent value="register" className="mt-4">
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
                    </Tabs>
                </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Emergency Contacts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {emergencyContacts.map(contact => (
                                <li key={contact.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                    <div>
                                        <p className="font-semibold">{contact.name}</p>
                                        <p className="text-sm text-muted-foreground">{contact.distance}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant={contact.available ? 'default' : 'destructive'} className={contact.available ? 'bg-green-500' : ''}>
                                            {contact.available ? 'Available' : 'Unavailable'}
                                        </Badge>
                                        <Button size="icon" variant="outline"><Phone className="h-4 w-4"/></Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                 <div className="space-y-8">
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><AlertTriangle/> Medical Alerts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <h4 className="font-semibold">Current Medications:</h4>
                                <p className="text-muted-foreground">Metformin, Paracetamol</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Known Allergies:</h4>
                                <p className="text-muted-foreground">Penicillin</p>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle>Emergency Instructions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                           <p>1. Stay calm and do not panic.</p>
                           <p>2. Call the ambulance or your nearest emergency contact.</p>
                           <p>3. Share your live location if possible.</p>
                           <p>4. Inform them about your medical alerts.</p>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </div>
    )
}

    