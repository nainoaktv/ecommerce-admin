import Link from "next/link";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Layout>
      <div className="max-w-max">
        <Link
          href={"/products/new"}
          className="flex bg-slate-300 rounded-md bg m-2 py-1 px-2 transition-colors duration-300 hover:bg-yellow-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Products
        </Link>
      </div>
    </Layout>
  );
}
