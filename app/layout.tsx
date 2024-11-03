import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from "./provider";
import DownloadButton from "@/components/download";
import Image from "next/image";

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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex justify-between items-center p-4 bg-white dark:bg-black-100">
          <Image
            src="/assets/icons/icon.png"
            width={50}
            height={50}
            alt="Hero image"
            priority
            className="rounded-full z-50 shadow-lg"
          />
            <DownloadButton href="/your-download-link" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
