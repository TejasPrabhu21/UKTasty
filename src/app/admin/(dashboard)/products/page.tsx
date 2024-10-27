import { IProduct } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/admin/data-table";
import CreateButton from "@/components/admin/create-button";
import { fetchProducts } from "@/lib/actions";

export interface IFormField {
  label: string;
  name: string;
  type: string;
  placeHolder?: string;
}

async function getData(): Promise<IProduct[]> {
  const data = await fetchProducts();
  return data;
}

export default async function Products() {
  const data = await getData();
  const formFields: IFormField[] = [
    {
      label: "Name",
      name: "Product_name",
      type: "text",
      placeHolder: "Enter product name",
    },
    {
      label: "Weight",
      name: "Product_weight",
      type: "number",
      placeHolder: "Enter weight per unit of product",
    },
    {
      label: "Price",
      name: "Product_price",
      type: "number",
      placeHolder: "Enter price of product",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-5">Products</h2>
      <CreateButton formFields={formFields} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
