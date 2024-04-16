// layout/Auth.tsx
import { ReactNode, useState } from "react";
import NavigationDrawer from "@/components/NavigationDrawer";
import ProjectDisplay from "@/components/TodayTask";
import { Box } from "@mui/material";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [authorized, setAuthorized] = useState<boolean>(true);

  if (authorized) {
    return children
  } else {
    return <div>please login</div>;
  }
};

export default AuthLayout;
