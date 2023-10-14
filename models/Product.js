import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productName: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;
