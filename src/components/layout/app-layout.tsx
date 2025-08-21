
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  HeartPulse,
  Home,
  LayoutDashboard,
  Stethoscope,
  Pill,
  FileText,
  MessageSquare,
  Siren,
  User,
  Users,
  BriefcaseMedical,
  CalendarCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/symptom-checker", label: "Symptoms", icon: HeartPulse },
  { href: "/appointments", label: "Appointments", icon: CalendarCheck },
  { href: "/opd-queue", label: "Chat & Queue", icon: MessageSquare },
  { href: "/medicines", label: "Medicine", icon: Pill },
  { href: "/lab-reports", label: "Reports", icon: FileText },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/emergency", label: "Emergency", icon: Siren },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-primary text-primary-foreground shadow-md">
        <div className="flex items-center gap-2">
            <Stethoscope className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold font-headline">AarogyaAI</h1>
              <p className="text-sm">Your Health Friend</p>
            </div>
        </div>
        <User className="h-6 w-6"/>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {children}
      </main>
      <footer className="sticky bottom-0 z-10 mt-auto bg-card border-t">
        <nav className="grid grid-cols-4">
            {menuItems.slice(0, 4).map((item) => {
                 const isActive = pathname === item.href;
                 return (
                    <Link href={item.href} key={item.label}>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 text-muted-foreground",
                            isActive && "text-primary bg-primary/10",
                            item.label === 'Emergency' && 'text-destructive'
                        )}>
                            <item.icon className="h-6 w-6" />
                            <span className="text-xs font-medium">{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </nav>
        <nav className="grid grid-cols-4">
            {menuItems.slice(4).map((item) => {
                 const isActive = pathname === item.href;
                 return (
                    <Link href={item.href} key={item.label}>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 text-muted-foreground",
                            isActive && "text-primary bg-primary/10",
                            item.label === 'Emergency' && 'text-destructive bg-destructive/10'
                        )}>
                            <item.icon className="h-6 w-6" />
                            <span className="text-xs font-medium">{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </nav>
      </footer>
    </div>
  );
}
