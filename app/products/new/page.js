"use client";
import Layout from "@/app/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(e) {
    e.preventDefault();
    const data = { productName, description, price };
    await axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter Product Name..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price(USD)</label>
        <input
          type="text"
          placeholder="Enter Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          type="submit"
          className="bg-slate-300 rounded-md bg m-2 py-1 px-2 transition-colors duration-300 hover:bg-yellow-600"
        >
          Save
        </button>
      </form>
    </Layout>
  );
}
