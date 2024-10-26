"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IPayment } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Copy } from "lucide-react";
import { useState } from "react";

export const columns: ColumnDef<IPayment>[] = [
  {
    accessorKey: "Payment_id",
    header: "Payment ID",
  },
  {
    accessorKey: "Payed_at",
    header: "Paid At",
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
    accessorKey: "Transaction_id",
    header: "Transaction ID",
  },
  {
    accessorKey: "Payment_method",
    header: "Payment Method",
  },
  {
    accessorKey: "Order_id",
    header: "Order ID",
  },
  {
    accessorKey: "Total_Amount",
    header: "Total Amount",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      return <ActionCell payment={payment} />;
    },
  },
];

const ActionCell = ({ payment }: { payment: IPayment }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(payment.Transaction_id)
            }
          >
            <Copy /> Copy Transaction Id
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
