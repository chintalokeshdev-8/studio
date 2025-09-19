
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  HeartPulse,
  MessageSquare,
  Siren,
  User,
  TestTube,
  Pill,
  CalendarCheck,
  LayoutGrid,
  Headset,
  Activity,
  ChevronRight,
  Heart,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { PregnantLadyIcon } from "../icons/pregnant-lady-icon";

const menuItems = [
  { href: "/", label: "Home", telugu: "హోమ్", icon: LayoutGrid, color: "hsl(var(--nav-home))" },
  { href: "/health-tracker", label: "Health Tracker", telugu: "ఆరోగ్య ట్రాకర్", icon: Heart, color: "hsl(var(--nav-profile))" },
  { href: "/symptom-checker", label: "AI Symptom Checker", telugu: "లక్షణాలు", icon: HeartPulse, color: "hsl(var(--nav-symptoms))" },
  { href: "/pregnancy-tracker", label: "Pregnancy Care", telugu: "గర్భం", icon: PregnantLadyIcon, color: "hsl(var(--nav-appointments))" },
  { href: "/appointments", label: "Appointments", telugu: "నమోదులు", icon: CalendarCheck, color: "hsl(var(--nav-appointments))" },
  { href: "/opd-queue", label: "Chat & Queue", telugu: "మీ వంతు & చాట్", icon: MessageSquare, color: "hsl(var(--nav-chat))" },
  { href: "/junior-doctors", label: "Jr. Doctors", telugu: "డాక్టర్లు", icon: Headset, color: "hsl(var(--nav-junior-doctors))" },
  { href: "/lab-reports", label: "Diagnostics", telugu: "రిపోర్టులు", icon: TestTube, color: "hsl(var(--nav-diagnostics))" },
  { href: "/medicines", label: "Medicines", telugu: "మందులు", icon: Pill, color: "hsl(var(--nav-medicines))" },
  { href: "/profile", label: "Profile", telugu: "ప్రొఫైల్", icon: User, color: "hsl(var(--nav-profile))" },
  { href: "/emergency", label: "Emergency", telugu: "తక్షణ సహాయం", icon: Siren, color: "hsl(var(--nav-emergency))" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (viewportRef.current) {
        const scrollAmount = 200;
        viewportRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (viewportRef.current) {
        const scrollAmount = -200;
        viewportRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="sticky top-0 z-20 flex items-center justify-between p-3 bg-background border-b border-t-4 border-t-primary">
        <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary rounded-lg">
                <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">MedBridgee</h1>
        </div>
        <Avatar className="h-8 w-8">
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>CL</AvatarFallback>
        </Avatar>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24">
          {children}
      </main>
      <footer className="sticky bottom-0 z-20 mt-auto bg-background border-t">
        <div className="relative">
            <div className="absolute top-0 left-0 h-full flex items-center pl-2 bg-gradient-to-r from-background to-transparent w-12 z-10">
                <Button variant="ghost" size="icon" className="bg-muted rounded-full h-8 w-8" onClick={handleScrollLeft}>
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                </Button>
            </div>
            <ScrollArea className="w-full" viewportRef={viewportRef}>
                <nav className="flex w-max space-x-1 p-2 px-12 justify-center">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                           <Link href={item.href} key={item.label} className="flex-shrink-0">
                               <div className={cn(
                                   "flex flex-col items-center justify-center gap-1 rounded-lg transition-transform duration-200 ease-in-out w-24 py-1",
                                   isActive ? "scale-105" : "scale-100"
                               )}>
                                   <div
                                        className="p-2 rounded-full"
                                        style={{
                                            backgroundColor: isActive ? `${item.color.replace(')', ' / 0.1)')}` : 'transparent',
                                        }}
                                    >
                                       <item.icon className="h-6 w-6" style={{ color: item.color }} />
                                   </div>
                                   <div className="text-center leading-tight">
                                        <p className="text-xs font-bold"
                                           style={{color: isActive ? item.color : 'hsl(var(--foreground))'}}>
                                           {item.label}
                                        </p>
                                        <p className="text-[10px] font-medium"
                                           style={{color: isActive ? item.color : 'hsl(var(--muted-foreground))'}}>
                                           {item.telugu}
                                        </p>
                                   </div>
                               </div>
                           </Link>
                       );
                    })}
                </nav>
                <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
             <div className="absolute top-0 right-0 h-full flex items-center pr-2 bg-gradient-to-l from-background to-transparent w-12">
                <Button variant="ghost" size="icon" className="bg-muted rounded-full h-8 w-8" onClick={handleScrollRight}>
                    <ChevronRight className="h-5 w-5 text-foreground" />
                </Button>
            </div>
        </div>
      </footer>
    </div>
  );
}
