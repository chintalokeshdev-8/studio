import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartPulse, MessageSquare, Siren, Users, FileText, FlaskConical, LifeBuoy, Stethoscope, Microscope, Pill, Headset, Phone, Link2, CalendarCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const quickAccessItems = [
  { href: '/symptom-checker', icon: HeartPulse, label: 'AI Symptom Check', description: 'వైద్య లక్షణాలు తనిఖీ' },
  { href: '/opd-queue', icon: Users, label: 'OPD Queue', description: 'మీ వంతు తెలుసుకోండి' },
  { href: '/doctor-chat', icon: MessageSquare, label: 'Doctor Chat', description: 'వైద్యులతో మాట్లాడండి' },
  { href: '/appointments', icon: CalendarCheck, label: 'Appointments', description: 'సమయం నమోదు చేసుకోండి' },
  { href: '/emergency', icon: Siren, label: 'Emergency', description: 'తక్షణ సహాయం' },
  { href: '/junior-doctors', icon: Headset, label: '24/7 Junior Doctors', description: 'ఉచిత సలహా' },
  { href: '/lab-reports', icon: FileText, label: 'Lab Reports', description: 'రిపోర్టులు చూడండి' },
  { href: '/medicines', icon: Pill, label: 'My Medicines', description: 'మీ మందులు' },
];

const medicineAssistanceItems = [
    { 
        icon: FlaskConical, 
        title: 'AI Medicine Assistant',
        description: 'Get instant answers about your medications, dosages, and side effects',
        buttonText: 'Ask AI Assistant',
        href: '/medicine-assistant'
    },
    { 
        icon: Phone, 
        title: 'Nearby Pharmacies',
        description: 'Find pharmacies near you with your prescribed medications in stock',
        buttonText: 'Find Pharmacies',
        href: '#'
    },
    { 
        icon: Link2, 
        title: 'Drug Interaction Check',
        description: 'Check for potential interactions between your medications',
        buttonText: 'Check Interactions',
        href: '#'
    },
     { 
        icon: Users, 
        title: 'Pharmacist Consultation',
        description: 'Speak directly with a licensed pharmacist for expert advice',
        buttonText: 'Consult Pharmacist',
        href: '#'
    },
];

const healthOverviewItems = [
    { value: "12", label: "Total Visits", icon: Users, color: "text-blue-500" },
    { value: "2", label: "Active Conditions", icon: HeartPulse, color: "text-green-500" },
    { value: "3", label: "Current Medications", icon: Pill, color: "text-orange-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search symptoms, doctors, medicines..." className="pl-10 h-12" />
      </div>

      <Card className="bg-primary/90 text-primary-foreground overflow-hidden">
        <CardContent className="p-6 relative">
             <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                <Siren className="h-4 w-4 text-white" />
            </div>
            <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white">
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile picture" />
                    <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-bold">Welcome back, Chinta Lokesh Babu</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                <div>
                    <p className="opacity-80">Patient ID</p>
                    <p className="font-semibold">PAT001</p>
                </div>
                <div>
                    <p className="opacity-80">Gender</p>
                    <p className="font-semibold">Male</p>
                </div>
                <div>
                    <p className="opacity-80">Age</p>
                    <p className="font-semibold">27 years</p>
                </div>
                 <div>
                    <p className="opacity-80">Contact</p>
                    <p className="font-semibold">8008334948</p>
                </div>
                <div>
                    <p className="opacity-80">Blood Group</p>
                    <p className="font-semibold">B+</p>
                </div>
            </div>
             <p className="text-center mt-4 font-medium">How can we help you today?</p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Card className="text-center p-4 hover:bg-primary/5 transition-colors cursor-pointer h-full flex flex-col items-center justify-center">
                <div className={cn("p-3 rounded-full mb-2", item.label === 'Emergency' ? 'bg-red-100' : 'bg-primary/10' )}>
                    <item.icon className={cn("h-7 w-7", item.label === 'Emergency' ? 'text-red-500' : 'text-primary' )} />
                </div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
        <div className="grid grid-cols-3 gap-4">
            {healthOverviewItems.map((item) => (
                 <Card key={item.label} className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-2">
                        <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Medicine Assistance</h2>
        <div className="space-y-4">
          {medicineAssistanceItems.map((item) => (
             <Link key={item.title} href={item.href} passHref>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Button size="sm" variant="outline">{item.buttonText}</Button>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
