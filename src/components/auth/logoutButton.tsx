import React from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };
  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default LogoutButton;
