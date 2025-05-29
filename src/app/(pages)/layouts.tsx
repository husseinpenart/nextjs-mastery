import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav style={{ background: "#ddd", padding: 10 }}>🔗 Nav for Pages</nav>
     
      {children}
    </>
  );
}
