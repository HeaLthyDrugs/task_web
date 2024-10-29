import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from "./provider";
import DownloadButton from "@/components/download";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Task",
  description: "Download Task for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <DownloadButton href="/your-download-link" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
