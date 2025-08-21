import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Bell, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const queue = [
    { token: 19, name: "Suresh Varma", status: "Currently Consulting" },
    { token: 20, name: "Anjali Devi", status: "Waiting" },
    { token: 21, name: "Ravi Teja", status: "Waiting" },
    { token: 22, name: "Priya Sharma", status: "Waiting" },
    { token: 23, name: "Chinta Lokesh Babu", status: "You are here" },
    { token: 24, name: "Mounika Reddy", status: "Waiting" },
];

const messages = [
    { sender: "doctor", text: "Hello Chinta, your turn is next. Please be ready.", time: "10:30 AM" },
    { sender: "user", text: "Okay, doctor. I have my reports ready.", time: "10:32 AM" },
    { sender: "doctor", text: "Excellent. I will call you in shortly.", time: "10:33 AM" },
];

const quickQuestions = [
    "How long is the wait?",
    "Is the doctor available?",
    "Can I share my reports?",
];


export default function OpdQueuePage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline text-primary">Chat & OPD Queue</h1>
                <p className="text-muted-foreground">Live updates and chat for Dr. Rajesh Kumar's clinic.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
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

                 <Card className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 border-b">
                        <Avatar>
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="doctor portrait" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Dr. Rajesh Kumar</CardTitle>
                            <p className="text-sm text-green-600">Online</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 animate-in fade-in duration-500 ${msg.sender === 'user' ? 'justify-end slide-in-from-right-4' : 'slide-in-from-left-4'}`}>
                                {msg.sender === 'doctor' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="doctor portrait" />
                                        <AvatarFallback>DR</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`rounded-lg p-3 max-w-xs md:max-w-md ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                    <p>{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.time}</p>

                                </div>
                                {msg.sender === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile picture" />
                                        <AvatarFallback>CL</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="border-t p-4 space-y-4 flex-col items-start">
                         <div className="flex flex-wrap gap-2">
                            {quickQuestions.map((q, i) => (
                                 <Button key={i} variant="outline" size="sm" className="text-xs">{q}</Button>
                            ))}
                        </div>
                        <div className="flex w-full items-center space-x-2">
                            <Input type="text" placeholder="Type your message..." className="flex-1" />
                            <Button type="submit">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>

        </div>
    );
}
