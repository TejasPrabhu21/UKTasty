// import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { ICustomer, IOrders, IPayment, IProduct } from "@/lib/types";
import {
  deleteCustomer,
  deleteOrder,
  deletePayment,
  deleteProduct,
} from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const DeleteButton = ({
  isOpen,
  setIsOpen,
  entity,
  data,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  entity: "Product" | "Customer" | "Order" | "Payment";
  data: IProduct | ICustomer | IOrders | IPayment;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const deleteHandler = async () => {
    try {
      switch (entity) {
        case "Product":
          await deleteProduct((data as IProduct).id);
          break;
        case "Customer":
          await deleteCustomer((data as ICustomer).User_id);
          break;
        case "Order":
          await deleteOrder((data as IOrders).Order_id);
          break;
        case "Payment":
          await deletePayment((data as IPayment).Payment_id.toString());
          break;
        default:
          throw new Error("Unknown entity type");
      }
      console.log(`${entity} deleted successfully`);
      setIsOpen(false);
      router.refresh();
      toast({
        title: "Deleted Successfully",
        description: `The ${entity.toLowerCase()} has been deleted.`,
        variant: "default",
      });
    } catch (error) {
      if (error) {
        console.error("Delete error:", error);
        toast({
          title: "Error",
          description: "Couldn't delete data. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="w-full text-red-600 font-bold flex gap-2 justify-start items-center px-2 py-1"
            onClick={() => setIsOpen(true)}
          >
            <Trash2Icon size={18} />
            Delete
          </Button>
        </AlertDialogTrigger>

        {/* AlertDialog Content */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteHandler()}
              className="bg-red-600 hover:bg-red-500"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteButton;
