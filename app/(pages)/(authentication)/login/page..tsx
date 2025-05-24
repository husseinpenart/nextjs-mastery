"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={() => signIn("github")}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
