"use client";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
    const segment = useSelectedLayoutSegment()

  return (
    <>
      <nav style={{ background: "#ddd", padding: 10 }}>🔗 Nav for Pages</nav>
      <p>You are currently here: {pathName}</p> /  <p>Active segment: {segment}</p>
      {children}
    </>
  );
}