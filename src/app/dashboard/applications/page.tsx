import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_APPLICATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Application Tracking
        </h1>
        <p className="text-muted-foreground">
          Monitor the status of all your grant applications.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Your Submissions</CardTitle>
            <CardDescription>A log of all grants you have applied for through FundFlow.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Grant ID</TableHead>
                <TableHead>Scheme Name</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount (INR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_APPLICATIONS.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.id}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        app.status === "Approved"
                          ? "default"
                          : app.status === "Rejected"
                          ? "destructive"
                          : "secondary"
                      }
                      className={cn(app.status === "Approved" && "bg-green-500/20 text-green-400 border-green-500/20 hover:bg-green-500/30", "font-semibold")}
                    >
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">₹{app.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
