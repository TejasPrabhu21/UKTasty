"use client";

import DeleteButton from "@/components/admin/delete-button";
import EditButton from "@/components/admin/edit-button";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "Product_name",
    header: "Product Name",
  },
  {
    accessorKey: "Product_weight",
    header: "Product Weight (grams)",
  },
  {
    accessorKey: "Product_price",
    header: "Product Price (₹)",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return <ActionCell product={product} />;
    },
  },
];

const ActionCell = ({ product }: { product: IProduct }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="flex justify-start items-center gap-5">
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <EditButton
              key={product.id}
              product={product}
              isOpen={isEditOpen}
              setIsOpen={setIsEditOpen}
            />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <DeleteButton
              key={product.id}
              isOpen={isDeleteOpen}
              setIsOpen={setIsDeleteOpen}
              entity="Product"
              data={product}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
