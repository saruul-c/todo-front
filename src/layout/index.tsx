import NavigationDrawer from "@/components/NavigationDrawer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <NavigationDrawer />
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: '320px' }}> {/* marginLeft should be equal to the width of the drawer */}
    {children}
  </main>
    </div>
  );
}
