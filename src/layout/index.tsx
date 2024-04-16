import NavigationDrawer from "@/components/NavigationDrawer";
import React, { ReactNode } from "react";
import {useRouter} from "next/router"

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[200px] h-full"></div>
      {showHeader && <NavigationDrawer /> }
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
 
export default Layout;