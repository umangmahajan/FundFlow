"use client";

import Link from "next/link";
import { Handshake } from "lucide-react";
import { Button } from "./ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Handshake className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">FundFlow</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Dashboard
            </Link>
            <Link
              href="/transparency"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Transparency
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button asChild>
                <Link href="/dashboard">Access App</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}