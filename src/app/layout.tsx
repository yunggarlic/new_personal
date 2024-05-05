import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import fs from "fs";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim Ferrari | Software Developer",
  description:
    "Discover the world of software development with Tim Ferrari, a seasoned software developer with expertise in multiple programming languages and platforms.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
