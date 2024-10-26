"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ICustomer, IProduct } from "@/lib/types";

const CreateButton = ({
  columns,
  entity,
}: {
  columns: ICustomer[] | IProduct[];
  entity: string;
}) => {
  const createUser = () => {
    // Logic to create a new user
    console.log("Create new user", entity, columns);
  };
  return (
    <Button onClick={() => createUser()} variant={"default"} className="mb-4">
      <Plus />
      Add Product
    </Button>
  );
};

export default CreateButton;
