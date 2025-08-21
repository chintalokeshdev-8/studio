import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Eye, Upload } from "lucide-react";

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
            return "bg-green-100 text-green-800 border-green-200";
        case "Processing":
            return "bg-blue-100 text-blue-800 border-blue-200";
        case "Pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
        default:
            return "";
    }
}


export default function LabReportsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Lab Reports</h1>
                    <p className="text-muted-foreground">View and download your medical test results.</p>
                </div>
                <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Report
                </Button>
            </div>
            
            <Card>
                <CardContent className="p-0">
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
                                        <Badge variant="outline" className={getStatusBadgeClass(report.status)}>
                                            {report.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {report.status === "Completed" ? (
                                            <div className="flex gap-2 justify-end">
                                                <Button variant="outline" size="icon">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="icon">
                                                    <FileDown className="h-4 w-4" />
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
