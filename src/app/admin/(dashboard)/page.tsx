import { Package2, Users, ShoppingCart, CreditCard } from "lucide-react";
import Link from "next/link";
import React from "react";

const Overview = () => {
  const navItems = [
    {
      title: "Products",
      icon: Package2,
      url: "/admin/products",
    },
    {
      title: "Users",
      icon: Users,
      url: "/admin/users",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      url: "/admin/orders",
    },
    {
      title: "Payments",
      icon: CreditCard,
      url: "/admin/payments",
    },
  ];

  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {navItems.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
          >
            <div className="flex items-center gap-2">
              <item.icon className="size-4" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your {item.title.toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Overview;
