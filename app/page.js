// import Image from "next/image";
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return <div>Logged In {session.user.email}</div>;
}