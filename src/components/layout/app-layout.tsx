
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  HeartPulse,
  LayoutDashboard,
  Stethoscope,
  Pill,
  FileText,
  MessageSquare,
  Siren,
  FlaskConical,
  User,
  Users,
  BriefcaseMedical,
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/symptom-checker", label: "Symptom Check", icon: HeartPulse },
  { href: "/opd-queue", label: "OPD Queue", icon: Users },
  { href: "/medicines", label: "My Medicines", icon: Pill },
  { href: "/lab-reports", label: "Lab Reports", icon: FileText },
  { href: "/doctor-chat", label: "Doctor Chat", icon: MessageSquare },
  { href: "/junior-doctors", label: "24/7 Junior Doctors", icon: BriefcaseMedical },
  { href: "/medicine-assistant", label: "AI Medicine Assistant", icon: FlaskConical },
  { href: "/emergency", label: "Emergency", icon: Siren },
  { href: "/profile", label: "My Profile", icon: User },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="p-2">
          <SidebarHeader className="p-2 pb-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="text-primary w-8 h-8" />
              <h1 className="text-xl font-bold font-headline">AarogyaAI</h1>
            </div>
          </SidebarHeader>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label }}
                    as="a"
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://placehold.co/100x100.png" alt="@user" data-ai-hint="profile picture" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
                <span className="font-semibold">Chinta Lokesh Babu</span>
                <span className="text-muted-foreground">Patient ID: 12345</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b md:justify-end">
          <SidebarTrigger className="md:hidden" />
          <Button variant="outline">Logout</Button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background/60">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
