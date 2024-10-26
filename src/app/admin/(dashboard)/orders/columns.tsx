"use client";

import DeleteButton from "@/components/admin/delete-button";
import StatusDropdown from "@/components/admin/status-dropdown";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IOrders } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export const columns: ColumnDef<IOrders>[] = [
  {
    accessorKey: "Order_id",
    header: "Order ID",
  },
  {
    accessorKey: "Order_date",
    header: "Order Date",
    sortingFn: "auto",
    cell: ({ getValue }) => {
      const date = new Date(getValue() as string);
      return date.toLocaleString();
    },
  },
  {
    accessorKey: "User_id",
    header: "User ID",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {
    accessorKey: "Total_Amount",
    header: "Total Amount",
  },
  {
    accessorKey: "Delivery_Fee",
    header: "Delivery Fee",
  },
  {
    accessorKey: "Payment_Method",
    header: "Payment Method",
  },
  {
    accessorKey: "Payment_Status",
    header: "Payment Status",
  },
  {
    accessorKey: "Order_Status",
    header: "Order Status",
    cell: ({ row }) => {
      const order = row.original;
      return <DeliveryStatusCell order={order} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return <ActionCell order={order} />;
    },
  },
];

const ActionCell = ({ order }: { order: IOrders }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center gap-5">
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteButton
              key={order.Order_id}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              entity={"Order"}
              data={order}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const DeliveryStatusCell = ({ order }: { order: IOrders }) => {
  const [status, setStatus] = useState(order.Order_Status as string);
  const options = ["Pending", "Shipped", "Delivered", "Cancelled"];

  return (
    <StatusDropdown
      options={options}
      value={status}
      onChange={(newValue) => {
        setStatus(newValue);
        // Handle state change logic here, e.g., update the row data
      }}
    />
  );
};
