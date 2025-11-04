"use client";

import SiteHeader from "@/components/site-header";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { MOCK_TRANSPARENCY_LOG } from "@/lib/data";

export default function TransparencyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
                            Public Grant Ledger
                        </h1>
                        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                            Fostering transparency and accountability in the startup ecosystem. This is a public record of grants awarded through the platform.
                        </p>
                    </div>

                    <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Startup Name</TableHead>
                                    <TableHead>Grant Scheme</TableHead>
                                    <TableHead>Industry</TableHead>
                                    <TableHead>Date Awarded</TableHead>
                                    <TableHead className="text-right">Amount Awarded (INR)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {MOCK_TRANSPARENCY_LOG.map((log, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{log.startupName}</TableCell>
                                        <TableCell>{log.grantName}</TableCell>
                                        <TableCell>{log.industry}</TableCell>
                                        <TableCell>{log.date}</TableCell>
                                        <TableCell className="text-right">₹{log.amountAwarded}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </main>
            <footer className="py-6 bg-card border-t">
                <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} FundFlow. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}