import mongooseConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newProductName: productName,
    newDescription: description,
    newPrice: price,
  } = await request.json();
  await mongooseConnect();
  await Product.findByIdAndUpdate(id, { productName, description, price });
  return NextResponse.json(
    { message: "Product has been updated!" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await mongooseConnect();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
