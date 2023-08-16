import QueryProvider from "@/providers/QueryProvider";
import "@/styles/globals.css";
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <body> 
        <QueryProvider> 
           {children}
        </QueryProvider>
      </body>
    </html>
  );
}