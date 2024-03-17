import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import PrimaryLayoutComponent from "@/components/primaryLayout/PrimaryLayout.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yến sào khánh hoà giá rẻ chất lượng tại Tân Bình",
  description:
    "Yến Sào khánh hoà giá rẻ chất lượng. Nơi cung cấp yến sào uy tính chất lượng và giá cả phải chăng tại quận Tân Bình, Tp Hồ Chí Minh. Giao hàng trong ngày trong khu vực Hồ Chí Minh, hãy xem và mua ngay để được những giá cả hợp lý",
  icons: {
    icon: "/images/logo.jpeg",
  },
  keywords: [
    "yến sào khánh hoà",
    "yến sào khoẻ và đẹp",
    "yến sào khánh hoà giá rẻ và chất lượng",
    "yến sào khánh hoà giá rẻ tại tân bình",
    "yến sào khánh hoà uy tín chất lượng",
    "khoẻ và đẹp 54",
    "yến sào khánh hoà khoẻ và đẹp",
  ],
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
