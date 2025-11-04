"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Rocket,
  FileText,
  BarChart2,
  User,
  Settings,
} from "lucide-react";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/dashboard/grants", label: "Grant Matching", icon: Rocket },
  { href: "/dashboard/applications", label: "Applications", icon: FileText },
  { href: "/dashboard/profile", label: "Startup Profile", icon: User },
];

const bottomLinks = [
  { href: "/transparency", label: "Transparency Log", icon: BarChart2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === link.href}
                  tooltip={link.label}
                >
                  <a>
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          {bottomLinks.map((link) => (
             <SidebarMenuItem key={link.href}>
                <Link href={link.href} passHref legacyBehavior>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(link.href)}
                    tooltip={link.label}
                  >
                    <a>
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
