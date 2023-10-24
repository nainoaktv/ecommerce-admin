"use client";
import Layout from "@/app/components/Layout";
import EditProductForm from "@/app/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topic`);
    }

    return res.json();
  } catch (error) {
    console.log(error.message, error);
  }
};

export default async function EditProductPage({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { productName, description, price } = product;
  console.log(`id for this product: ${id}`);

  return (
    <Layout>
      <h1>Edit Product</h1>
      <EditProductForm
        id={id}
        productName={productName}
        description={description}
        price={price}
      />
    </Layout>
  );
}
