
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, MapPin, HeartPulse, Bone, Brain, Stethoscope as StethoscopeIcon, Baby, Leaf } from "lucide-react";

const doctors = [
    {
        name: "Dr. Chinta Ramana",
        specialty: "Cardiologist",
        experience: "18 years",
        hospital: "Apollo Hospital, Jubilee Hills",
        surgeries: "600+ successful cardiac surgeries",
        mainDealing: "Complex angioplasty and valve replacements.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "male doctor portrait",
        location: "Hyderabad"
    },
    {
        name: "Dr. Lakshmi Narasaiah",
        specialty: "Orthopedic Surgeon",
        experience: "14 years",
        hospital: "Care Hospital, Banjara Hills",
        surgeries: "900+ joint replacement surgeries",
        mainDealing: "Knee and hip replacements.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor",
        location: "Hyderabad"
    },
    {
        name: "Dr. Rupa",
        specialty: "Neurologist",
        experience: "22 years",
        hospital: "Yashoda Hospital, Secunderabad",
        surgeries: "400+ successful brain surgeries",
        mainDealing: "Epilepsy and stroke treatment.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor professional",
        location: "Hyderabad"
    },
    {
        name: "Dr. Anjali",
        specialty: "General Physician",
        experience: "10 years",
        hospital: "MaxCure Hospital, Madhapur",
        surgeries: "N/A",
        mainDealing: "General health check-ups and infectious diseases.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor smile",
        location: "Hyderabad"
    },
    {
        name: "Dr. Anusha",
        specialty: "Pediatrician",
        experience: "9 years",
        hospital: "Rainbow Children's Hospital, Banjara Hills",
        surgeries: "N/A",
        mainDealing: "Child care and vaccinations.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor glasses",
        location: "Hyderabad"
    },
    {
        name: "Dr. Subbamma",
        specialty: "Dermatologist",
        experience: "7 years",
        hospital: "KIMS Hospital, Secunderabad",
        surgeries: "100+ cosmetic procedures",
        mainDealing: "Acne treatment and skin rejuvenation.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor professional",
        location: "Hyderabad"
    },
    {
        name: "Dr. Jaya Lakshmi",
        specialty: "Gynaecologist",
        experience: "15 years",
        hospital: "Continental Hospitals, Gachibowli",
        surgeries: "500+ successful deliveries",
        mainDealing: "High-risk pregnancy and infertility.",
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor professional",
        location: "Hyderabad"
    }
];

const departments = [
    { value: "all", label: "All Departments", icon: StethoscopeIcon },
    { value: "cardiology", label: "Cardiology", icon: HeartPulse },
    { value: "orthopedics", label: "Orthopedics", icon: Bone },
    { value: "neurology", label: "Neurology", icon: Brain },
    { value: "gynaecology", label: "Gynaecology", icon: Baby },
    { value: "pediatrics", label: "Pediatrics", icon: Baby },
    { value: "dermatology", label: "Dermatology", icon: Leaf },
    { value: "general", label: "General Physician", icon: StethoscopeIcon },
];

const hospitals = [
    "All Hospitals", "Apollo Hospital, Jubilee Hills", "Care Hospital, Banjara Hills", "Yashoda Hospital, Secunderabad", "MaxCure Hospital, Madhapur", "Rainbow Children's Hospital, Banjara Hills", "KIMS Hospital, Secunderabad", "Continental Hospitals, Gachibowli"
];

export default function AppointmentsPage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-appointments))'}}>Book an Appointment</h1>
                <p className="text-muted-foreground mt-2">Find the right doctor for your needs.</p>
            </div>

            <Card className="p-4 shadow-sm">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Doctor or hospital..." className="pl-10" />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger>
                            <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                            {departments.map(dep => (
                                <SelectItem key={dep.value} value={dep.value}>
                                    <div className="flex items-center gap-2">
                                        <dep.icon className="h-4 w-4" />
                                        {dep.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Hospital" />
                        </SelectTrigger>
                        <SelectContent>
                            {hospitals.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Select>
                         <SelectTrigger>
                            <div className="flex items-center gap-2">
                               <MapPin className="h-4 w-4" />
                               <SelectValue placeholder="Location" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {doctors.map((doctor, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Avatar className="h-28 w-28 border-4" style={{borderColor: 'hsl(var(--nav-appointments))'}}>
                                    <AvatarImage src={doctor.avatar} data-ai-hint={doctor.dataAiHint} />
                                    <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold">{doctor.name}</h3>
                                    <p style={{color: 'hsl(var(--nav-appointments))'}} className="font-semibold">{doctor.specialty}</p>
                                    <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                                    <p className="text-sm text-muted-foreground font-medium mt-1">{doctor.hospital}</p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-3 text-sm">
                                <p><strong className="font-semibold">Successful Surgeries:</strong> {doctor.surgeries}</p>
                                <p><strong className="font-semibold">Main Focus:</strong> {doctor.mainDealing}</p>
                            </div>
                             <div className="mt-6 flex justify-end gap-2">
                                <Button variant="outline">View Profile</Button>
                                <Button style={{backgroundColor: 'hsl(var(--nav-appointments))'}}>Book Appointment</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
