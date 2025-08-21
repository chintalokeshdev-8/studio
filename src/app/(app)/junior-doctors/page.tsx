import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Video, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const doctors = [
    { 
        name: "Dr. Ananya Sharma", 
        specialty: "General Physician", 
        experience: "5 years", 
        languages: "English, Telugu, Hindi", 
        status: "Online", 
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor"
    },
    { 
        name: "Dr. Vikram Singh", 
        specialty: "Pediatrician", 
        experience: "8 years", 
        languages: "English, Hindi", 
        status: "Online", 
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "male doctor"
    },
    { 
        name: "Dr. Priya Desai", 
        specialty: "General Physician", 
        experience: "3 years", 
        languages: "English, Telugu", 
        status: "Offline", 
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "female doctor portrait"
    },
    { 
        name: "Dr. Rohan Gupta", 
        specialty: "General Physician", 
        experience: "4 years", 
        languages: "English, Telugu", 
        status: "Online", 
        avatar: "https://placehold.co/100x100.png",
        dataAiHint: "male doctor"
    },
];

export default function JuniorDoctorsPage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline text-primary">24/7 Junior Doctors</h1>
                <p className="text-muted-foreground mt-2">Get instant consultation from our team of dedicated junior doctors, anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-16 w-16 border-2 border-primary">
                                <AvatarImage src={doctor.avatar} data-ai-hint={doctor.dataAiHint} />
                                <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    {doctor.name}
                                    <Badge variant={doctor.status === 'Online' ? 'default' : 'secondary'} className={doctor.status === 'Online' ? 'bg-green-500' : ''}>
                                        {doctor.status}
                                    </Badge>
                                </CardTitle>
                                <CardDescription>{doctor.specialty}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-3 text-sm">
                            <p className="text-muted-foreground"><BadgeCheck className="inline-block mr-2 h-4 w-4 text-primary"/>{doctor.experience} of experience</p>
                            <p className="text-muted-foreground">Speaks: {doctor.languages}</p>
                        </CardContent>
                        <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                            <Button disabled={doctor.status === 'Offline'}>
                                <Video className="mr-2 h-4 w-4" /> Video Call
                            </Button>
                            <Button variant="outline" disabled={doctor.status === 'Offline'}>
                                <Phone className="mr-2 h-4 w-4" /> Audio Call
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
