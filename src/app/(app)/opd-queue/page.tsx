import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Bell } from "lucide-react";

const queue = [
    { token: 19, name: "Suresh Varma", status: "Currently Consulting" },
    { token: 20, name: "Anjali Devi", status: "Waiting" },
    { token: 21, name: "Ravi Teja", status: "Waiting" },
    { token: 22, name: "Priya Sharma", status: "Waiting" },
    { token: 23, name: "Chinta Lokesh Babu", status: "You are here" },
    { token: 24, name: "Mounika Reddy", status: "Waiting" },
];

export default function OpdQueuePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline text-primary">OPD Queue Status</h1>
                <p className="text-muted-foreground">Live updates for Dr. Rajesh Kumar's clinic.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-primary/10 border-primary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><User className="text-primary" /> Your Status</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-6xl font-bold text-primary">#23</p>
                        <p className="text-lg text-muted-foreground mt-2">Your Token Number</p>
                        <div className="flex items-center justify-center gap-2 mt-4 text-accent-foreground">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="font-semibold">Estimated Wait: 5 minutes</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Current Status</CardTitle>
                        <CardDescription>Patient currently being consulted</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-6xl font-bold">#19</p>
                        <p className="text-lg text-muted-foreground mt-2">Is with the doctor</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Queue Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {queue.map(patient => (
                            <div key={patient.token} className={`flex items-center justify-between p-3 rounded-lg ${patient.token === 23 ? 'bg-accent/20' : 'bg-secondary/50'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${patient.token === 23 ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                                        {patient.token}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{patient.name}</p>
                                    </div>
                                </div>
                                <Badge variant={patient.status === 'Currently Consulting' ? 'default' : (patient.token === 23 ? 'outline' : 'secondary')}
                                   className={patient.status === 'Currently Consulting' ? 'bg-primary' : (patient.token === 23 ? 'border-accent text-accent-foreground' : '')}
                                >
                                    {patient.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-800"><Bell /> Instructions</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-700 space-y-2">
                    <p>• Please be ready 5 minutes before your estimated turn.</p>
                    <p>• Keep all your necessary documents and previous reports handy.</p>
                    <p>• Only one attendant is allowed with the patient inside the consultation room.</p>
                </CardContent>
            </Card>
        </div>
    )
}
