import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page new",
  description: "This blog our page"
}

export default function BlogLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
      <html lang="ru">
        <body>{children}</body>
      </html>
    );
}

