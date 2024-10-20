export interface IAdminData {
  name: string;
  email: string;
  avatar: string;
}

export interface INavItem {
  title: string;
  icon: React.ReactElement;
  url: string;
}

export interface SidebarData {
  user: IAdminData;
  navItems: INavItem[];
}
