// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Auth from "@/layout/auth";
import Layout from "@/layout/index";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Layout>
        {/* AuthLayout will decide to render NavigationDrawer based on the auth status */}
        <Component {...pageProps} />
      </Layout>
    </Auth>
  );
}
