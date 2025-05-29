import { authOptions } from "@/src/app/lib/auth/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

const { data: session, status } = useSession();

  // if (!session) redirect("/Signin");

  return <h1 className="text-xl">Welcome {session?.user?.email}</h1>;
}
