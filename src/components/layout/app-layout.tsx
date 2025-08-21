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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const menuItems = [
  { href: "/", label: "Home", telugu: "హోమ్", icon: LayoutGrid, color: "hsl(var(--nav-home))" },
  { href: "/symptom-checker", label: "Symptoms", telugu: "లక్షణాలు", icon: HeartPulse, color: "hsl(var(--nav-symptoms))" },
  { href: "/opd-queue", label: "Chat & Queue", telugu: "మీ వంతు & చాట్", icon: MessageSquare, color: "hsl(var(--nav-chat))" },
  { href: "/appointments", label: "Appointments", telugu: "నమోదులు", icon: CalendarCheck, color: "hsl(var(--nav-appointments))" },
  { href: "/junior-doctors", label: "Jr. Doctors", telugu: "డాక్టర్లు", icon: Headset, color: "hsl(var(--nav-junior-doctors))" },
  { href: "/lab-reports", label: "Diagnostics", telugu: "రిపోర్టులు", icon: TestTube, color: "hsl(var(--nav-diagnostics))" },
  { href: "/medicines", label: "Medicines", telugu: "మందులు", icon: Pill, color: "hsl(var(--nav-medicines))" },
  { href: "/profile", label: "Profile", telugu: "ప్రొఫైల్", icon: User, color: "hsl(var(--nav-profile))" },
  { href: "/emergency", label: "Emergency", telugu: "తక్షణ సహాయం", icon: Siren, color: "hsl(var(--nav-emergency))" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background border-b">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
                <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">MedBridge</h1>
            </div>
        </div>
        <Avatar>
            <AvatarImage src="/images/profile.jpg" />
            <AvatarFallback>CL</AvatarFallback>
        </Avatar>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24">
          {children}
      </main>
      <footer className="sticky bottom-0 z-20 mt-auto bg-background border-t">
        <ScrollArea className="w-full whitespace-nowrap">
            <nav className="flex w-max space-x-4 p-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                       <Link href={item.href} key={item.label} className="flex-shrink-0">
                           <div className={cn(
                               "flex flex-col items-center justify-center gap-1 p-1 rounded-lg transition-transform duration-200 ease-in-out w-20",
                               isActive ? "scale-110" : "scale-100"
                           )}>
                               <div
                                    className="p-2 rounded-full"
                                    style={{
                                        backgroundColor: `${item.color.replace(')', ' / 0.1)')}`,
                                    }}
                                >
                                   <item.icon className="h-6 w-6" style={{ color: item.color }} />
                               </div>
                               <div className="text-center leading-tight mt-1">
                                    <p className="text-xs font-bold"
                                       style={{color: item.color}}>
                                       {item.label}
                                    </p>
                                    <p className="text-[10px] font-semibold"
                                       style={{color: item.color}}>
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
      </footer>
    </div>
  );
}
