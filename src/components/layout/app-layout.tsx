
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

const menuItems = [
  { href: "/", label: "Home", icon: LayoutGrid },
  { href: "/symptom-checker", label: "Symptoms", icon: HeartPulse },
  { href: "/opd-queue", label: "Chat & Queue", icon: MessageSquare },
  { href: "/appointments", label: "Appointments", icon: CalendarCheck },
  { href: "/emergency", label: "Emergency", icon: Siren },
  { href: "/junior-doctors", label: "Jr. Doctors", icon: Headset },
  { href: "/lab-reports", label: "Diagnostics", icon: TestTube },
  { href: "/medicines", label: "Medicines", icon: Pill },
  { href: "/profile", label: "Profile", icon: User },
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
        <nav className="grid grid-cols-5 gap-1 p-1">
            {menuItems.slice(0, 5).map((item) => {
                 const isActive = pathname === item.href;
                 const isEmergency = item.label === 'Emergency';
                 return (
                    <Link href={item.href} key={item.label}>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                            isActive 
                                ? (isEmergency ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground")
                                : (isEmergency ? "text-destructive" : "text-muted-foreground hover:bg-muted/50")
                        )}>
                            <item.icon className="h-5 w-5" />
                            <span className="text-[10px] font-medium text-center leading-tight">{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </nav>
         <nav className="grid grid-cols-4 gap-1 p-1 pt-0">
            {menuItems.slice(5).map((item) => {
                 const isActive = pathname === item.href;
                 return (
                    <Link href={item.href} key={item.label}>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                            isActive 
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-muted/50"
                        )}>
                            <item.icon className="h-5 w-5" />
                             <span className="text-[10px] font-medium text-center leading-tight">{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </nav>
      </footer>
    </div>
  );
}
