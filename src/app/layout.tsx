import { MantineProvider } from "@mantine/core";
import QueryProvider from "@/providers/QueryProvider";
import '@mantine/core/styles.css'
import "@/styles/globals.css";
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <body> 
        <MantineProvider>
          <QueryProvider> 
            {children}
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}