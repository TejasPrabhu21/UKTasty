import { columns } from "./columns";
import { DataTable } from "@/components/admin/data-table";
import { fetchCustomers } from "@/lib/actions";

export default async function Users() {
  let data = [];
  try {
    data = await fetchCustomers();
  } catch (err) {
    if (err) {
      throw new Error("Failed to fetch customers.");
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-5">Customers</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
