import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Auth from "@/layout/auth";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Layout><div></div>
        <Component {...pageProps} />
      </Layout>
    </Auth>
  );
}
