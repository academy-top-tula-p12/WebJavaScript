import type { Metadata } from "next";
import Header from "../components/header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Employees List",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
