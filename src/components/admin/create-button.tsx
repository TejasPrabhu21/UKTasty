"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IFormField } from "@/app/admin/(dashboard)/products/page";
import { addProduct } from "@/lib/actions";
import Image from "next/image";

const CreateButton = ({ formFields }: { formFields: IFormField[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    await addProduct(formData);
    console.log("Add new product");
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"default"}
            className="w-max font-medium flex gap-2 justify-start items-center px-2 py-1 mb-4"
          >
            <Plus />
            Add Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Item</DialogTitle>
            <DialogDescription>Add product details to add.</DialogDescription>
          </DialogHeader>
          <form onSubmit={createUser}>
            {formFields.map((field) => (
              <div key={field.name} className="mt-2">
                <label htmlFor={field.name} className="block mb-1">
                  {field.label.charAt(0).toUpperCase() + field.label.slice(1)}:
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full border rounded p-1"
                />
              </div>
            ))}

            <div>
              <label htmlFor="image" className="block mb-1 mt-2">
                Product Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
                className="w-full border rounded p-1"
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <label>Image Preview</label>
                <Image
                  src={imagePreview}
                  alt="Product preview"
                  height={300}
                  width={500}
                  className="mt-2 max-w-full h-auto max-h-48 object-contain"
                />
              </div>
            )}
            <div className="my-3 flex gap-5">
              <Button variant={"default"} type="submit">
                Submit
              </Button>
              <Button variant={"outline"} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateButton;
