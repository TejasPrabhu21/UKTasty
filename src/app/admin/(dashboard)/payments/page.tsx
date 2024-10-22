import { DataTable } from "@/components/admin/data-table";
import React from "react";
import { columns, IPayment } from "./columns";

async function getData(): Promise<IPayment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}
const Payments = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Payments;
