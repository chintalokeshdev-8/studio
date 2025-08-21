
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  HeartPulse,
  Home,
  MessageSquare,
  Siren,
  User,
  FileText,
  Pill,
  CalendarCheck,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { href: "/", label: "Home", icon: LayoutGrid },
  { href: "/appointments", label: "Appointments", icon: CalendarCheck },
  { href: "/opd-queue", label: "Chat", icon: MessageSquare },
  { href: "/medicines", label: "Medicines", icon: Pill },
  { href: "/lab-reports", label: "Reports", icon: FileText },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/emergency", label: "Emergency", icon: Siren },
  { href: "/symptom-checker", label: "Symptoms", icon: HeartPulse },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background border-b">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
                <HeartPulse className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AarogyaAI</h1>
            </div>
        </div>
        <Avatar>
            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile picture" />
            <AvatarFallback>CL</AvatarFallback>
        </Avatar>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
      </main>
      <footer className="sticky bottom-0 z-20 mt-auto bg-background border-t">
        <nav className="grid grid-cols-4 gap-1 p-1">
            {menuItems.slice(0, 4).map((item) => {
                 const isActive = pathname === item.href;
                 return (
                    <Link href={item.href} key={item.label}>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                            isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50",
                             item.label === 'Emergency' && isActive ? "bg-destructive text-destructive-foreground" : "",
                             item.label === 'Emergency' && !isActive ? "text-destructive" : ""
                        )}>
                            <item.icon className="h-5 w-5" />
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
