import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartPulse, MessageSquare, Siren, Users, FileText, FlaskConical, LifeBuoy, Stethoscope, Microscope, Pill, Headset } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const quickAccessItems = [
  { href: '/symptom-checker', icon: HeartPulse, label: 'AI Symptom Check' },
  { href: '/doctor-chat', icon: MessageSquare, label: 'Doctor Chat' },
  { href: '/emergency', icon: Siren, label: 'Emergency' },
  { href: '/junior-doctors', icon: Headset, label: '24/7 Junior Doctors' },
  { href: '/opd-queue', icon: Users, label: 'OPD Queue' },
  { href: '/lab-reports', icon: FileText, label: 'Lab Reports' },
];

const medicineAssistanceItems = [
    { href: '/medicine-assistant', icon: FlaskConical, label: 'AI Medicine Assistant' },
    { href: '#', icon: Stethoscope, label: 'Nearby Pharmacies' },
    { href: '#', icon: Microscope, label: 'Drug Interaction Check' },
    { href: '#', icon: LifeBuoy, label: 'Pharmacist Consultation' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline text-primary">Welcome back, Chinta Lokesh Babu</h1>
          <p className="text-muted-foreground">Here's your health summary for today.</p>
        </div>
        <Card className="p-4 w-full sm:w-auto">
            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile picture" />
                    <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">Patient ID: <Badge variant="secondary">12345</Badge></p>
                    <p className="text-sm text-muted-foreground">28 Yrs | Male | B+ Positive</p>
                </div>
            </div>
        </Card>
      </div>

      <section>
        <h2 className="text-2xl font-semibold font-headline mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Card className="text-center p-4 hover:bg-accent hover:text-accent-foreground transition-colors group cursor-pointer h-full flex flex-col items-center justify-center">
                <item.icon className="h-10 w-10 mb-2 text-primary group-hover:text-accent-foreground" />
                <p className="font-semibold">{item.label}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold font-headline mb-4">Health Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Users className="text-primary"/> Total Visits</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">12</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><HeartPulse className="text-primary"/> Active Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Diabetes, Hypertension</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Pill className="text-primary"/> Current Medications</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">View schedule</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold font-headline mb-4">Medicine Assistance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {medicineAssistanceItems.map((item) => (
             <Link key={item.label} href={item.href} passHref>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-semibold">{item.label}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
