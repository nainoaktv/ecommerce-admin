// import Image from "next/image";
"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const session = useSession();
  console.log(session);

  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // } else if (session.status === "authenticated") {
  //   return <p>User Authenticated</p>;
  // } else if (session.status === "unauthenticated") {
  //   return <p>User Unauthenticated</p>;
  // }

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
