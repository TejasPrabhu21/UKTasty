import { IOrders } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/admin/data-table";
import { fetchOrders } from "@/lib/actions";

async function getData(): Promise<IOrders[]> {
  const data = await fetchOrders();
  return data;
}

export default async function Orders() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-5">Orders</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
