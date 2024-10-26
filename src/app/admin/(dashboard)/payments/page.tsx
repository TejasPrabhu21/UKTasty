import { DataTable } from "@/components/admin/data-table";
import React from "react";
import { columns } from "./columns";
import { IPayment } from "@/lib/types";
import { fetchPayments } from "@/lib/actions";

async function getData(): Promise<IPayment[]> {
  const data = await fetchPayments();
  return data;
}

const Payments = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-5">Payments</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Payments;
