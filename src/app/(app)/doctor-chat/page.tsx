import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const messages = [
    { sender: "doctor", text: "Hello Chinta, how are you feeling today?", time: "10:30 AM" },
    { sender: "user", text: "I'm feeling a bit better, doctor. The fever has gone down.", time: "10:32 AM" },
    { sender: "doctor", text: "That's good to hear. Are you taking the medications as prescribed?", time: "10:33 AM" },
    { sender: "user", text: "Yes, I am. But I have a question.", time: "10:34 AM" },
];

const quickQuestions = [
    "How should I take my medications?",
    "When is my next appointment?",
    "Can I get a refill for my prescription?",
    "What are the side effects of this medicine?",
];

export default function DoctorChatPage() {
    return (
        <div className="h-[calc(100vh-10rem)] flex flex-col max-w-4xl mx-auto">
            <Card className="flex-1 flex flex-col">
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
                <CardFooter className="border-t p-4 space-y-4 flex-col">
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
    )
}
