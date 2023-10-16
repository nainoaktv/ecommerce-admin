import mongooseConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { productName, description, price } = await request.json();
  await mongooseConnect();
  await Product.create({ productName, description, price });
  return NextResponse.json({ message: "Product Added" }, { status: 201 });
}

export async function GET() {
  await mongooseConnect();
  // const products = await Product.find();
  return NextResponse.json(await Product.find());
}
