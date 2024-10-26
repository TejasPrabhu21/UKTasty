"use server";

import { createClient } from "@supabase/supabase-js";
import { IProduct } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Data fetch functions
 */

export const fetchCustomers = async () => {
  const { data, error } = await supabase.from("User").select("*");
  if (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(error.message);
  }
  return data;
};

export const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("Product")
    .select("*")
    .order("id");
  if (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(error.message);
  }
  return data;
};

export const fetchOrders = async () => {
  const { data, error } = await supabase
    .from("Order")
    .select("*")
    .order("Order_date", { ascending: false });
  if (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(error.message);
  }
  return data;
};

export const fetchPayments = async () => {
  const { data, error } = await supabase
    .from("Payment")
    .select("*")
    .order("Payed_at", { ascending: false });
  if (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(error.message);
  }
  return data;
};

/**
 * Delete Functions
 */

export const deleteOrder = async (orderId: string) => {
  const { data, error } = await supabase
    .from("Order")
    .delete()
    .eq("Order_id", orderId);

  if (error) {
    console.error("Error deleting order:", error.message);
    throw new Error(error.message);
  }

  return data;
};

export const deleteProduct = async (productId: string) => {
  const { data, error } = await supabase
    .from("Product")
    .delete()
    .eq("id", productId);

  if (error) {
    console.error("Error deleting Product:", error.message);
    throw new Error(error.message);
  }

  return data;
};

export const deleteCustomer = async (customerId: string) => {
  const { data, error } = await supabase
    .from("User")
    .delete()
    .eq("User_id", customerId);

  if (error) {
    console.error("Error deleting Customer data:", error.message);
    throw new Error(error.message);
  }

  return data;
};

export const deletePayment = async (paymentId: string) => {
  const { data, error } = await supabase
    .from("Payment")
    .delete()
    .eq("User_id", paymentId);

  if (error) {
    console.error("Error deleting payment data:", error.message);
    throw new Error(error.message);
  }

  return data;
};

/**
 * Edit Functions
 */
export const editProduct = async (formData: FormData) => {
  console.log(formData);
  const id = formData.get("id") as string;
  const productName = formData.get("Product_name") as string | null;
  const productWeight = Number(formData.get("Product_weight"));
  const productPrice = Number(formData.get("Product_price"));

  if (!id || !productName) {
    throw new Error("Missing required fields: id and Product_name");
  }

  const updatedData: IProduct = {
    id,
    Product_name: productName,
    Product_weight: productWeight,
    Product_price: productPrice,
  };

  const { data, error } = await supabase
    .from("Product")
    .update(updatedData)
    .eq("id", Number(id));

  if (error) {
    console.error("Error editing product data:", error.message);
    throw new Error(error.message);
  }
  return data;
};
