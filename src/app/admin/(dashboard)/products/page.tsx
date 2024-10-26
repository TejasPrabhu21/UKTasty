import { IProduct } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/admin/data-table";
import CreateButton from "@/components/admin/create-button";
import { fetchProducts } from "@/lib/actions";

async function getData(): Promise<IProduct[]> {
  const data = await fetchProducts();
  return data;
}

export default async function Products() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-5">Products</h2>
      <CreateButton colums={columns} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
