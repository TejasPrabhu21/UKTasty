declare module "next-auth" {
  interface User {
    role: string;
  }

  interface Session {
    user: {
      role: string;
      email: string;
      name: string;
    };
  }

  interface JWT {
    role: string;
  }
}

export interface IUserData {
  name: string;
  email: string;
  role: string;
}

export interface INavItem {
  title: string;
  icon: React.ReactElement;
  url: string;
}

export interface SidebarData {
  navItems: INavItem[];
}

export type ICustomer = {
  User_id: string;
  Email: string;
  Name: string;
  Image?: string;
  Address?: string;
  Phone?: string;
  created_at: string;
};

export type IProduct = {
  id: string;
  Product_name: string;
  Product_weight: number;
  Product_price: number;
};

export type IOrders = {
  Order_id: string;
  Order_date: string;
  User_id: string;
  Order_Status: "pending" | "processing" | "success" | "failed";
  Address: string;
  Total_Amount: number;
  Delivery_Fee: number;
  Payment_Method?: string;
  Payment_Status?: string;
};

export type IPayment = {
  Payment_id: number;
  Payed_at: string;
  User_id: number;
  Transaction_id: string;
  Payment_method?: string;
  Order_id: number;
  Total_Amount: number;
};
