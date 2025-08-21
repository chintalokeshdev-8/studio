import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Bell, Send, Stethoscope, Briefcase, Plane } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const queue = [
    { token: 19, name: "Suresh Varma", status: "Consulting" },
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
                <h1 className="text-3xl font-bold text-primary">Chat & OPD Queue</h1>
                <p className="text-muted-foreground">Live updates and chat for Dr. Rajesh Kumar's clinic.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-primary/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-primary"><User /> Your Token</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-6xl font-bold text-primary">#23</p>
                                <div className="flex items-center justify-center gap-2 mt-4 text-primary/80">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-semibold">Est. Wait: 5 mins</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Now Serving</CardTitle>
                                <CardDescription>Patient with the doctor</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-6xl font-bold">#19</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Doctor Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <Briefcase className="h-6 w-6 text-yellow-700"/>
                                <div>
                                    <p className="font-bold text-yellow-800">In Surgery</p>
                                    <p className="text-sm text-yellow-700">Estimated back in 2 hours</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <Stethoscope className="h-6 w-6 text-green-700"/>
                                <div>
                                    <p className="font-bold text-green-800">Available</p>
                                    <p className="text-sm text-green-700">The doctor is available for consultation.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <Plane className="h-6 w-6 text-red-700"/>
                                <div>
                                    <p className="font-bold text-red-800">On Leave</p>
                                    <p className="text-sm text-red-700">Doctor will be back tomorrow.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Live Queue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {queue.map(patient => (
                                    <div key={patient.token} className={`flex items-center justify-between p-3 rounded-lg ${patient.token === 23 ? 'bg-primary/10' : 'bg-muted/40'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${patient.token === 23 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                                {patient.token}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{patient.name}</p>
                                            </div>
                                        </div>
                                        <Badge variant={patient.status === 'Consulting' ? 'default' : (patient.token === 23 ? 'outline' : 'secondary')}
                                           className={patient.status === 'Consulting' ? 'bg-primary' : (patient.token === 23 ? 'border-primary text-primary' : '')}
                                        >
                                            {patient.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </div>

                 <Card className="flex flex-col h-[70vh]">
                    <CardHeader className="flex flex-row items-center gap-4 border-b">
                        <Avatar>
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="doctor portrait" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Dr. Rajesh Kumar</CardTitle>
                            <p className="text-sm text-green-600 font-medium flex items-center gap-1.5"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>Online</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'justify-end ml-auto' : 'justify-start'}`}>
                                {msg.sender === 'doctor' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="doctor portrait" />
                                        <AvatarFallback>DR</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p>{msg.text}</p>
                                    <p className={`text-xs mt-1 text-right ${msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.time}</p>

                                </div>
                                {msg.sender === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/images/profile.jpg" />
                                        <AvatarFallback>CL</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="border-t p-4 space-y-4 flex-col items-start bg-muted/30">
                         <div className="flex flex-wrap gap-2">
                            {quickQuestions.map((q, i) => (
                                 <Button key={i} variant="outline" size="sm" className="text-xs">{q}</Button>
                            ))}
                        </div>
                        <div className="flex w-full items-center space-x-2">
                            <Input type="text" placeholder="Type your message..." className="flex-1" />
                            <Button type="submit" size="icon">
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
