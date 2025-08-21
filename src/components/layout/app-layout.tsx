
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
  { href: "/", label: "Home", icon: LayoutGrid, color: "hsl(var(--nav-home))" },
  { href: "/symptom-checker", label: "Symptoms", icon: HeartPulse, color: "hsl(var(--nav-symptoms))" },
  { href: "/opd-queue", label: "Chat & Queue", icon: MessageSquare, color: "hsl(var(--nav-chat))" },
  { href: "/appointments", label: "Appointments", icon: CalendarCheck, color: "hsl(var(--nav-appointments))" },
  { href: "/junior-doctors", label: "Jr. Doctors", icon: Headset, color: "hsl(var(--nav-junior-doctors))" },
  { href: "/lab-reports", label: "Diagnostics", icon: TestTube, color: "hsl(var(--nav-diagnostics))" },
  { href: "/medicines", label: "Medicines", icon: Pill, color: "hsl(var(--nav-medicines))" },
  { href: "/profile", label: "Profile", icon: User, color: "hsl(var(--nav-profile))" },
  { href: "/emergency", label: "Emergency", icon: Siren, color: "hsl(var(--nav-emergency))" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const renderNav = (items: typeof menuItems) => {
    return items.map((item) => {
        const isActive = pathname === item.href;
        return (
           <Link href={item.href} key={item.label}>
               <div className={cn(
                   "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors"
               )}>
                   <div 
                        className={cn("p-2 rounded-full transition-colors", 
                            isActive ? 'text-white' : 'text-muted-foreground'
                        )}
                        style={ isActive ? { backgroundColor: item.color, color: 'white' } : { color: item.color, backgroundColor: `${item.color.replace(')', ' / 0.1)')}` }}
                    >
                       <item.icon className="h-5 w-5" />
                   </div>
                   <span 
                        className={cn("text-xs font-semibold text-center leading-tight",
                            isActive ? 'text-foreground' : 'text-muted-foreground'
                        )}
                        style={isActive ? {color: item.color} : {}}
                    >
                       {item.label}
                   </span>
               </div>
           </Link>
       );
    })
  }

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
            {renderNav(menuItems.slice(0, 5))}
        </nav>
         <nav className="grid grid-cols-4 gap-1 p-1 pt-0">
            {renderNav(menuItems.slice(5))}
        </nav>
      </footer>
    </div>
  );
}
