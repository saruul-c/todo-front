// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Auth from "@/layout/auth";
import Layout from "@/layout/index";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }: AppProps) {
  const isPageNotFound = pageProps.statusCode === 404;
  
  return (
    <Auth>
      <ToastContainer />
      <Layout>
        {isPageNotFound ? ( // If page is not found, display the image
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' // Set height to full view height
          }}>
            <img src="welcome.jpg" alt="404 Not Found" style={{ maxWidth: '40%', height: 'auto' }} />
          </div>
        ) : (
          <Component {...pageProps} /> // Otherwise, display the component
        )}
      </Layout>
    </Auth>
  );
}
