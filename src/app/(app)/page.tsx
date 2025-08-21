import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartPulse, MessageSquare, Siren, Users, FileText, FlaskConical, LifeBuoy, Stethoscope, Microscope, Pill, Headset, Phone, Link2, CalendarCheck, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const quickAccessItems = [
  { href: '/symptom-checker', icon: HeartPulse, label: 'AI Symptom Check', description: 'వైద్య లక్షణాలు తనిఖీ' },
  { href: '/opd-queue', icon: MessageSquare, label: 'Chat & Queue', description: 'మీ వంతు & చాట్' },
  { href: '/appointments', icon: CalendarCheck, label: 'Appointments', description: 'సమయం నమోదు చేసుకోండి' },
  { href: '/emergency', icon: Siren, label: 'Emergency', description: 'తక్షణ సహాయం' },
  { href: '/junior-doctors', icon: Headset, label: '24/7 Junior Doctors', description: 'ఉచిత సలహా' },
  { href: '/lab-reports', icon: FileText, label: 'Lab Reports', description: 'రిపోర్టులు చూడండి' },
  { href: '/medicines', icon: Pill, label: 'My Medicines', description: 'మీ మందులు' },
  { href: '/profile', icon: User, label: 'Profile', description: 'ప్రొఫైల్' },
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
    { value: "12", label: "Total Visits", icon: Users, color: "text-blue-500" },
    { value: "2", label: "Active Conditions", icon: HeartPulse, color: "text-green-500" },
    { value: "4", label: "Medications", icon: Pill, color: "text-orange-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Chinta!</h1>
            <p className="text-muted-foreground">Here is your health summary for today.</p>
          </div>
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4"/>
            Search
          </Button>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="text-primary">Patient Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
            <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-bold">Chinta Lokesh Babu</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-bold">27 years</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Blood Group</p>
                <p className="font-bold">B+</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-bold">8008334948</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">Patient ID</p>
                <p className="font-bold">PAT001</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">Village</p>
                <p className="font-bold">Jubilee Hills</p>
            </div>
             <div>
                <p className="text-sm text-muted-foreground">District</p>
                <p className="font-bold">Hyderabad</p>
            </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Card className="text-center p-4 hover:bg-muted/50 transition-colors cursor-pointer h-full flex flex-col items-center justify-center aspect-square">
                <div className={cn("p-3 rounded-full mb-3", item.label === 'Emergency' ? 'bg-red-100' : 'bg-primary/10' )}>
                    <item.icon className={cn("h-6 w-6", item.label === 'Emergency' ? 'text-red-600' : 'text-primary' )} />
                </div>
                <p className="font-semibold text-sm">{item.label}</p>
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
                          <Button size="sm" variant="ghost">{item.buttonText}</Button>
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
