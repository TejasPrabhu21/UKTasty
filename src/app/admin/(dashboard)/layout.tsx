import BreadCrumbs from "@/components/admin/bread-crumbs";
import { AppSidebar } from "@/components/admin/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Package2, Users, ShoppingCart, CreditCard } from "lucide-react";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const SideNavData = {
  navItems: [
    {
      title: "Products",
      icon: <Package2 className="size-4" />,
      url: "/admin/products",
    },
    {
      title: "Customers",
      icon: <Users className="size-4" />,
      url: "/admin/customers",
    },
    {
      title: "Orders",
      icon: <ShoppingCart className="size-4" />,
      url: "/admin/orders",
    },
    {
      title: "Payments",
      icon: <CreditCard className="size-4" />,
      url: "/admin/payments",
    },
  ],
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);

  if (session)
    return (
      <main>
        <SidebarProvider>
          <AppSidebar data={SideNavData} user={session?.user} />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadCrumbs />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
    );
};

export default DashboardLayout;
