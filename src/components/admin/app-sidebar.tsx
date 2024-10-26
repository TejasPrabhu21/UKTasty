"use client";

import * as React from "react";
import { NavUser } from "@/components/admin/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import icon from "@/assets/icon.png";
import { IUserData, SidebarData } from "@/lib/types";
import { ModeToggle } from "../theme/theme-toggle";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function AppSidebar({
  data,
  user,
  ...props
}: { data: SidebarData; user: IUserData } & React.ComponentProps<
  typeof Sidebar
>) {
  const pathname = usePathname();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-4">
                <Image
                  src={icon}
                  width={80}
                  height={80}
                  alt="Kinara Icon"
                  className="w-10 h-10 rounded-xl"
                />

                <div className="grid flex-1 text-left text-md leading-tight">
                  <span className="truncate text-lg font-bold">UKTasty</span>
                  <span className="truncate text-xs">Admin Panel</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="my-2">
          {data.navItems.map((item) => (
            <SidebarMenuItem
              key={item.title}
              className={clsx(
                pathname.includes(item.url) ? "bg-muted rounded-md" : ""
              )}
            >
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
