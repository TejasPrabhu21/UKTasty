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
