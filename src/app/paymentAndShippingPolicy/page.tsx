import { Dot } from "lucide-react";
import React from "react";

const Policy = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        {/* Refund and Cancellation Policy */}
        <h1 className="text-2xl font-bold mb-4">
          Refund and Cancellation Policy
        </h1>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Refund Policy:</strong> The amount paid towards any product
            with respect to KINARA TASTY is non-refundable.
          </li>
          <li>
            <strong>Order Placement:</strong> Once the order is placed by the
            customer, the amount paid cannot be used for changes to any of the
            products.
          </li>
          <li>
            <strong>No Cancellation Policy:</strong> We do not offer any
            cancellation policy. The paid amount is non-refundable and cannot be
            interchanged or exchanged for any reason.
          </li>
        </ul>

        {/* Shipping and Delivery Policy */}
        <h1 className="text-2xl font-bold mb-4">Shipping & Delivery Policy</h1>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Delivery Time:</strong> All orders will be delivered within
            8 to 14 days from the date of order confirmation, or sooner.
          </li>
          <Dot className="h-5 w-5" />
          <li>
            <strong>Shipping Locations:</strong> We currently offer shipping to
            Karnataka and Goa.
          </li>
          <li>
            <strong>Shipping Charges:</strong> For orders below ₹2000, a flat
            shipping fee of ₹100 will be applied. For orders ₹2000 or above,
            shipping is free.
          </li>
          <li>
            <strong>No Cancellation Policy:</strong> We do not offer a
            cancellation policy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
