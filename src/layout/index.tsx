import NavigationDrawer from "@/components/NavigationDrawer";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[200px] h-full"></div>
      <NavigationDrawer />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
