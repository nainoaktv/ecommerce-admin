"use client";
import { useSession } from "next-auth/react";
import Layout from "./components/Layout";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-yellow-600 gap-1 rounded-lg">
          <img
            src={session?.user?.image}
            alt="user image"
            className="w-8 h-8 rounded-lg"
          />
          <span className="px-2 pt-1 text-black">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
