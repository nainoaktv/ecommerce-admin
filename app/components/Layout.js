// import Image from "next/image";
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-emerald-950 w-screen h-screen flex items-center">
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

  return (
    <div className="bg-emerald-950 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
