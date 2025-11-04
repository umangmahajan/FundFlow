import DashboardNav from "@/components/dashboard-nav";
import { Sidebar, SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Handshake } from "lucide-react";
import Link from "next/link";
import UserNav from "@/components/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <div className="flex h-full flex-col">
          <div className="p-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Handshake className="size-6 text-primary" />
              <span className="font-bold text-lg font-headline group-data-[state=collapsed]:hidden">
                FundFlow
              </span>
            </Link>
          </div>
          <DashboardNav />
        </div>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="flex-1">
                    {/* Can add breadcrumbs or page title here */}
                </div>
                <UserNav />
            </div>
        </header>
        <main className="flex-1 p-4 md:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
