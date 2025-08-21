import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Eye } from "lucide-react";

const labReports = [
  { testName: "Complete Blood Count", date: "2024-07-15", doctor: "Dr. Rajesh Kumar", status: "Completed" },
  { testName: "Lipid Profile", date: "2024-06-20", doctor: "Dr. Rajesh Kumar", status: "Completed" },
  { testName: "Thyroid Function Test", date: "2024-07-16", doctor: "Dr. Priya Sharma", status: "Processing" },
  { testName: "Urinalysis", date: "2024-07-17", doctor: "Dr. Rajesh Kumar", status: "Pending" },
  { testName: "HbA1c", date: "2024-06-20", doctor: "Dr. Rajesh Kumar", status: "Completed" },
];

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case "Completed":
            return "default";
        case "Processing":
            return "secondary";
        case "Pending":
            return "outline";
        default:
            return "secondary";
    }
}

const getStatusBadgeClass = (status: string) => {
    switch (status) {
        case "Completed":
            return "bg-green-600 text-white";
        case "Processing":
            return "bg-blue-500 text-white";
        case "Pending":
            return "bg-yellow-500 text-white";
        default:
            return "";
    }
}


export default function LabReportsPage() {
    return (
        <div className="space-y-8">
            <div className="text-left">
                <h1 className="text-3xl font-bold font-headline text-primary">Lab Reports</h1>
                <p className="text-muted-foreground">View and download your medical test results.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Your Reports</CardTitle>
                    <CardDescription>List of all completed, processing, and pending lab tests.</CardDescription>
                </CardHeader>
                <CardContent>
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
                            {labReports.map((report, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{report.testName}</TableCell>
                                    <TableCell>{report.date}</TableCell>
                                    <TableCell>{report.doctor}</TableCell>
                                    <TableCell>
                                        <Badge variant={getStatusBadgeVariant(report.status)} className={getStatusBadgeClass(report.status)}>
                                            {report.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {report.status === "Completed" ? (
                                            <div className="flex gap-2 justify-end">
                                                <Button variant="outline" size="sm">
                                                    <Eye className="mr-1 h-4 w-4" /> View
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <FileDown className="mr-1 h-4 w-4" /> Download
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
                </CardContent>
            </Card>
        </div>
    )
}
