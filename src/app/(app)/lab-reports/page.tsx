

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Eye, Upload, Search, MapPin, TestTube, Sparkles, XRay, Scan } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const labReports = [
  { testName: "Complete Blood Count", date: "2024-07-15", doctor: "Dr. Rajesh Kumar", status: "Completed" },
  { testName: "Lipid Profile", date: "2024-06-20", doctor: "Dr. Rajesh Kumar", status: "Completed" },
  { testName: "Thyroid Function Test", date: "2024-07-16", doctor: "Dr. Priya Sharma", status: "Processing" },
  { testName: "Urinalysis", date: "2024-07-17", doctor: "Dr. Rajesh Kumar", status: "Pending" },
  { testName: "HbA1c", date: "2024-06-20", doctor: "Dr. Rajesh Kumar", status: "Completed" },
];

const imagingReports = [
    { testName: "Chest X-Ray", date: "2024-07-10", doctor: "Dr. Rajesh Kumar", status: "Completed", type: "x-ray" },
    { testName: "MRI Brain Scan", date: "2024-05-12", doctor: "Dr. Arjun Kumar", status: "Completed", type: "mri" },
    { testName: "Abdominal Ultrasound", date: "2024-07-18", doctor: "Dr. Priya Sharma", status: "Processing", type: "x-ray" },
]

const diagnosticTests = [
    { name: "Complete Blood Picture (CBP)", lab: "Apollo Diagnostics", price: 300, category: "Blood" },
    { name: "COVID-19 RT-PCR", lab: "Vijaya Diagnostics", price: 1200, category: "Imaging" },
    { name: "Thyroid Profile (T3, T4, TSH)", lab: "Dr. Lal PathLabs", price: 600, category: "Blood" },
    { name: "MRI Brain Scan", lab: "Yashoda Hospitals Lab", price: 5000, category: "Imaging" },
    { name: "Full Body Checkup", lab: "Apollo Diagnostics", price: 2500, category: "Packages" },
    { name: "Vitamin D Test", lab: "Vijaya Diagnostics", price: 800, category: "Blood" },
];

const getStatusBadgeClass = (status: string) => {
    switch (status) {
        case "Completed":
            return "bg-green-100 text-green-800 border-green-200";
        case "Processing":
            return "bg-blue-100 text-blue-800 border-blue-200";
        case "Pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
        default:
            return "";
    }
}

const ReportTable = ({ reports }: { reports: any[] }) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Test Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Ordered By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {reports.map((report, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">{report.testName}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.doctor}</TableCell>
                    <TableCell>
                        <Badge variant="outline" className={getStatusBadgeClass(report.status)}>
                            {report.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                        {report.status === "Completed" ? (
                            <div className="flex gap-2 justify-end">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    <FileDown className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8 border-primary/50 text-primary hover:text-primary hover:bg-primary/10">
                                    <Sparkles className="h-4 w-4" />
                                </Button>
                            </div>
                        ) : (
                            <span className="text-xs text-muted-foreground">Not Available</span>
                        )}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);


export default function DiagnosticsPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold" style={{color: 'hsl(var(--nav-diagnostics))'}}>Diagnostics + Reports</h1>
                <p className="text-muted-foreground">Find diagnostic tests and view your reports.</p>
            </div>
            <Tabs defaultValue="diagnostics" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="diagnostics">Find Diagnostics</TabsTrigger>
                    <TabsTrigger value="reports">My Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="diagnostics" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Find a Test</CardTitle>
                            <CardDescription>Search for labs and tests near you.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="relative md:col-span-2">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input placeholder="Search test name, lab, or package..." className="pl-10" />
                                </div>
                                <Select>
                                    <SelectTrigger>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <SelectValue placeholder="Location" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="guntur">Guntur</SelectItem>
                                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                        <SelectItem value="vijayawada">Vijayawada</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        <SelectItem value="blood">Blood Tests</SelectItem>
                                        <SelectItem value="imaging">Imaging</SelectItem>
                                        <SelectItem value="packages">Health Packages</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-4">
                                {diagnosticTests.map(test => (
                                    <Card key={test.name} className="p-4 flex flex-col sm:flex-row justify-between sm:items-center">
                                        <div className="mb-4 sm:mb-0">
                                            <p className="font-bold text-lg">{test.name}</p>
                                            <p className="text-sm text-muted-foreground">{test.lab}</p>
                                            <Badge variant="outline" className="mt-2">{test.category}</Badge>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="text-xl font-bold" style={{color: 'hsl(var(--nav-diagnostics))'}}>₹{test.price}</p>
                                            <Button style={{backgroundColor: 'hsl(var(--nav-diagnostics))'}}>Book Now</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="reports" className="mt-6">
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-start">
                            <div>
                                <CardTitle>My Reports</CardTitle>
                                <CardDescription>View, download, and analyze your medical test results.</CardDescription>
                            </div>
                             <Button style={{backgroundColor: 'hsl(var(--nav-diagnostics))'}}>
                                <Upload className="mr-2 h-4 w-4" />
                                Upload Report
                            </Button>
                        </CardHeader>
                        <CardContent>
                           <Tabs defaultValue="lab" className="w-full">
                                <TabsList>
                                    <TabsTrigger value="lab" className="flex items-center gap-2"><TestTube className="h-4 w-4"/> Lab Reports</TabsTrigger>
                                    <TabsTrigger value="xray" className="flex items-center gap-2"><XRay className="h-4 w-4"/> X-Rays</TabsTrigger>
                                    <TabsTrigger value="mri" className="flex items-center gap-2"><Scan className="h-4 w-4"/> MRI Scans</TabsTrigger>
                                </TabsList>
                                <TabsContent value="lab" className="mt-4">
                                     <ReportTable reports={labReports} />
                                </TabsContent>
                                <TabsContent value="xray" className="mt-4">
                                    <ReportTable reports={imagingReports.filter(r => r.type === 'x-ray')} />
                                </TabsContent>
                                <TabsContent value="mri" className="mt-4">
                                     <ReportTable reports={imagingReports.filter(r => r.type === 'mri')} />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
