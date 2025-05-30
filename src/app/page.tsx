"use client"
import { usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname();
  return (
    <div>
      <h1 className="text-center text-6xl text-purple-700 transform-stroke">
        Masterey concepts of nextjs
      </h1>
      <p>you are currently here {pathName}</p>
    </div>
  );
}
