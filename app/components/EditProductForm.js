"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  id,
  productName,
  description,
  price,
}) {
  const [newProductName, setNewProductName] = useState(productName);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newProductName, newDescription, newPrice }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2>Product Name</h2>
      <input
        onChange={(e) => setNewProductName(e.target.value)}
        value={newProductName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Name"
      />

      <h2>Product Description</h2>
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Product Description"
      />

      <h2>Price (USD)</h2>
      <input
        onChange={(e) => setNewPrice(e.target.value)}
        value={newPrice}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Price"
      />

      <button className="bg-emerald-900 font-bold text-white py-3 px-6 w-fit rounded-lg hover:bg-yellow-600">
        Update Product
      </button>
    </form>
  );
}
