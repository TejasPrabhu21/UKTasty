"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteButton from "@/components/admin/delete-button";
import { ICustomer } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";

export const columns: ColumnDef<ICustomer>[] = [
  {
    id: "nameWithImage",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center">
          <Image
            src={user.Image || ""}
            alt={user.Name}
            width={100}
            height={100}
            className="h-8 w-8 rounded-full mr-3"
          />
          {user.Name}
        </div>
      );
    },
    header: "Name",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {
    accessorKey: "Phone",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return <ActionCell user={user} />;
    },
  },
];

const ActionCell = ({ user }: { user: ICustomer }) => {
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
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(user.Email)}
          >
            <Copy /> Copy user Email
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(user.Phone ?? "")}
          >
            <Copy /> Copy user Phone
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteButton
              key={user.User_id}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              entity="Customer"
              data={user}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
