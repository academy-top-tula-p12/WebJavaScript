import type { Metadata } from "next";
import Header from "@/components/header";
import DashboardMenu from "./components/dashboardmenu";
import "@/app/globals.css"


export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <DashboardMenu />
        {children}
    </>
  );
}
