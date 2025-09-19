
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartPulse, MessageSquare, Siren, Users, TestTube, FlaskConical, LifeBuoy, Stethoscope, Microscope, Pill, Headset, Phone, Link2, CalendarCheck, User, Heart, Baby } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const quickAccessItems = [
  { href: '/', icon: Stethoscope, label: 'Dashboard', description: 'హోమ్', color: 'hsl(var(--nav-home))' },
  { href: '/symptom-checker', icon: HeartPulse, label: 'AI Symptom Check', description: 'వైద్య లక్షణాలు తనిఖీ', color: 'hsl(var(--nav-symptoms))' },
  { href: '/health-tracker', label: 'Health Tracker', description: 'ఆరోగ్య ట్రాకర్', icon: Heart, color: 'hsl(var(--nav-profile))' },
  { href: '/pregnancy-tracker', label: 'Pregnancy', description: 'గర్భం', icon: Baby, color: 'hsl(var(--nav-appointments))' },
  { href: '/opd-queue', icon: MessageSquare, label: 'Chat & Queue', description: 'మీ వంతు & చాట్', color: 'hsl(var(--nav-chat))' },
  { href: '/appointments', icon: CalendarCheck, label: 'Appointments', description: 'సమయం నమోదు చేసుకోండి', color: 'hsl(var(--nav-appointments))' },
  { href: '/junior-doctors', icon: Headset, label: '24/7 Jr. Doctors', description: 'ఉచిత సలహా', color: 'hsl(var(--nav-junior-doctors))' },
  { href: '/lab-reports', icon: TestTube, label: 'Diagnostics', description: 'రిపోర్టులు చూడండి', color: 'hsl(var(--nav-diagnostics))' },
  { href: '/medicines', icon: Pill, label: 'My Medicines', description: 'మీ మందులు', color: 'hsl(var(--nav-medicines))' },
  { href: '/profile', icon: User, label: 'Profile', description: 'ప్రొఫైల్', color: 'hsl(var(--nav-profile))' },
  { href: '/emergency', icon: Siren, label: 'Emergency', description: 'తక్షణ సహాయం', color: 'hsl(var(--nav-emergency))' },
];

const medicineAssistanceItems = [
    { 
        icon: FlaskConical, 
        title: 'AI Medicine Assistant',
        description: 'Get instant answers about your medications.',
        buttonText: 'Ask AI',
        href: '/medicine-assistant'
    },
    { 
        icon: Users, 
        title: 'Pharmacist Consultation',
        description: 'Speak with a licensed pharmacist for expert advice.',
        buttonText: 'Consult',
        href: '#'
    },
];

const healthOverviewItems = [
    { value: "12", label: "Total Visits", icon: Users },
    { value: "2", label: "Active Conditions", icon: HeartPulse },
    { value: "4", label: "Medications", icon: Pill },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for doctors, medicines, reports..." className="pl-10 h-12 text-base" />
        </div>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary-foreground/50">
              <AvatarImage src="/images/profile.jpg" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Chinta Lokesh Babu</h2>
              <p className="text-sm opacity-80">Patient ID: PAT001</p>
            </div>
          </div>
          <div className="text-right">
              <p className="font-bold text-lg">B+ Positive</p>
              <p className="text-sm opacity-80">Blood Group</p>
          </div>
        </CardContent>
      </Card>


      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Card className="text-center p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full flex flex-col items-center justify-center aspect-square">
                <div className="p-3 rounded-full mb-3" style={{backgroundColor: `${item.color.replace(')', ' / 0.1)')}`}}>
                    <item.icon className="h-10 w-10" style={{color: item.color}} />
                </div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
          <div className="grid grid-cols-1 gap-4">
              {healthOverviewItems.map((item) => (
                   <Card key={item.label} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-muted/50 rounded-full">
                              <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="font-semibold">{item.label}</p>
                        </div>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                  </Card>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Medicine Assistance</h2>
          <div className="space-y-4">
            {medicineAssistanceItems.map((item) => (
               <Link key={item.title} href={item.href} passHref>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                              <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <Button size="sm" variant="ghost" style={{color: 'hsl(var(--nav-medicines))'}}>{item.buttonText}</Button>
                      </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
