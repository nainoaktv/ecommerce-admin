"use client";
import Layout from "@/app/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteProductPage({ params }) {
  const { id } = params;
  const [productInfo, setProductInfo] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products/?id=" + id).then((response) => {
      console.log("this is the res data", response.data);
      setProductInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  const removeProduct = () => {
    axios.delete("/api/products/?id=" + id);
    goBack();
  };

  return (
    <Layout>
      <h1 className="text-center">
        DELETE &nbsp;"{productInfo?.productName}"?
      </h1>

      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={removeProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
