import { IProduct } from "@/lib/types";
import { Edit } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { editProduct } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const EditButton = ({
  product,
  isOpen,
  setIsOpen,
}: {
  product: IProduct;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const formData = new FormData(e.currentTarget);
      await editProduct(formData);

      router.refresh();
      toast({
        title: "Deleted Successfully",
        description: `The Product ${formData.get("id")} has been edited.`,
        variant: "default",
      });
    } catch (error) {
      if (error) {
        console.error("Edit error:", error);
        toast({
          title: "Error",
          description: "Couldn't edit data. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-full font-medium flex gap-2 justify-start items-center px-2 py-1 text-primary"
          >
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
            <DialogDescription>
              Make changes to your item here.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEdit}>
            {Object.keys(product).map((key) => (
              <div key={key} className="mt-2">
                <label htmlFor={key} className="block mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <input
                  type="text"
                  id={key}
                  defaultValue={product[key as keyof IProduct]}
                  name={key}
                  className="w-full border rounded p-1"
                  readOnly={key === "id"}
                />
              </div>
            ))}
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

export default EditButton;
