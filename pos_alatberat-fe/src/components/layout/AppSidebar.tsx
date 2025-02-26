import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";

import { Home, Box, FileText, BarChart, Settings } from "lucide-react";
import React from "react";
import Image from "next/image";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Master Data",
    icon: Box,
    href: "/",
  },
  {
    title: "Transactions",
    icon: FileText,
    href: "/",
  },
  {
    title: "Reports",
    icon: BarChart,
    href: "/",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pt-7 pb-5">
        <div className="flex flex-wrap justify-between items-start">
          <div className="ml-2 flex items-center overflow-hidden">
            <Image src="/navLogo.svg" alt="logo" width={46} height={46} />
            <div className="grid ml-3">
              <h1 className="font-bold text-2xl truncate">Operanusa</h1>
              <h3 className="text-xs font-normal">by DariData</h3>
            </div>
          </div>
          <SidebarTrigger className="mt-0.5 ml-0.5" />
        </div>
      </SidebarHeader>

      <div className="px-4">
        <Separator className="opacity-30" />
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
