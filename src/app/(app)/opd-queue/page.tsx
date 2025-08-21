
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

// Assume this is the current status from a data source
const doctorStatus = {
    status: "Available", // Can be "Available", "In Surgery", "On Leave"
    details: "The doctor is available for consultation."
};

const getStatusInfo = (status: string) => {
    switch (status) {
        case "Available":
            return {
                icon: Stethoscope,
                color: "border-green-200",
                textColor: "text-green-800",
                indicator: true,
            };
        case "In Surgery":
            return {
                icon: Briefcase,
                color: "border-yellow-200",
                textColor: "text-yellow-800",
                details: "Estimated back in 2 hours",
                indicator: false,
            };
        case "On Leave":
            return {
                icon: Plane,
                color: "border-red-200",
                textColor: "text-red-800",
                details: "Doctor will be back tomorrow.",
                indicator: false,
            };
        default:
            return {
                icon: Stethoscope,
                color: "border-muted",
                textColor: "text-foreground",
                indicator: false,
            };
    }
};

export default function OpdQueuePage() {
    const currentStatusInfo = getStatusInfo(doctorStatus.status);
    const StatusIcon = currentStatusInfo.icon;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-chat))'}}>Chat & OPD Queue</h1>
                <p className="text-muted-foreground">Live updates and chat for Dr. Rajesh Kumar's clinic.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                     <div className="grid grid-cols-2 gap-4">
                        <Card className="border-primary/20" style={{backgroundColor: 'hsla(var(--nav-chat)/0.1)', borderColor: 'hsla(var(--nav-chat)/0.2)'}}>
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-base" style={{color: 'hsl(var(--nav-chat))'}}><User /> Your Token</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold" style={{color: 'hsl(var(--nav-chat))'}}>#23</p>
                                <div className="flex items-center justify-center gap-2 mt-1 text-xs" style={{color: 'hsla(var(--nav-chat)/0.8)'}}>
                                    <Clock className="w-3 h-3" />
                                    <span className="font-semibold">Est. Wait: 5 mins</span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Now Serving</CardTitle>
                                <CardDescription className="text-xs">Patient with the doctor</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold">#19</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Doctor Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className={`flex items-center gap-4 p-4 ${currentStatusInfo.color} rounded-lg border bg-background`}>
                                <StatusIcon className={`h-6 w-6 ${currentStatusInfo.textColor}`}/>
                                <div className="flex-1">
                                    <p className={`font-bold ${currentStatusInfo.textColor} flex items-center gap-2`}>
                                        {doctorStatus.status}
                                    </p>
                                    <p className={`text-sm ${currentStatusInfo.textColor}/80`}>{doctorStatus.details}</p>
                                </div>
                                {currentStatusInfo.indicator && (
                                    <span className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
                                    </span>
                                )}
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
                                    <div key={patient.token} className={`flex items-center justify-between p-3 rounded-lg ${patient.token === 23 ? 'bg-primary/10' : 'bg-muted/40'}`} style={patient.token === 23 ? {backgroundColor: 'hsla(var(--nav-chat)/0.1)'} : {}}>
                                        <div className="flex items-center gap-3">
                                            <div className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-lg ${patient.token === 23 ? 'text-primary-foreground' : 'bg-muted'}`} style={patient.token === 23 ? {backgroundColor: 'hsl(var(--nav-chat))'} : {}}>
                                                {patient.token}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{patient.name}</p>
                                            </div>
                                        </div>
                                        <Badge variant={patient.status === 'Consulting' ? 'default' : (patient.token === 23 ? 'outline' : 'secondary')}
                                           className={patient.status === 'Consulting' ? 'bg-primary' : (patient.token === 23 ? 'border-primary text-primary' : '')}
                                           style={patient.status === 'Consulting' ? {backgroundColor: 'hsl(var(--nav-chat))'} : (patient.token === 23 ? {borderColor: 'hsl(var(--nav-chat))', color: 'hsl(var(--nav-chat))'} : {})}
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
                            <AvatarImage src="/images/profile.jpg" data-ai-hint="doctor portrait" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Dr. Rajesh Kumar</CardTitle>
                            <p className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                </span>
                                Online
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'justify-end ml-auto' : 'justify-start'}`}>
                                {msg.sender === 'doctor' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/images/profile.jpg" data-ai-hint="doctor portrait" />
                                        <AvatarFallback>DR</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'text-primary-foreground' : 'bg-muted'}`}
                                 style={msg.sender === 'user' ? {backgroundColor: 'hsl(var(--nav-chat))'} : {}}>
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
                            <Button type="submit" size="icon" style={{backgroundColor: 'hsl(var(--nav-chat))'}}>
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
