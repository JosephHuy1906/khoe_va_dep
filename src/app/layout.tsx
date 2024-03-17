import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import PrimaryLayoutComponent from "@/components/primaryLayout/PrimaryLayout.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yến sào khánh hoà Khoẻ & đẹp",
  description: "Yến Sào khánh hoà Khoẻ & đẹp tại quận Tân Bình",
  icons: {
    icon: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PrimaryLayoutComponent>{children}</PrimaryLayoutComponent>
        </Providers>
      </body>
    </html>
  );
}
