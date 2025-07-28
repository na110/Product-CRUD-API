import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      minlength: [3, "Product title must be at least 3 characters"],
      maxlength: [100, "Product title must not exceed 100 characters"],
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Product price can not be nigative"],
    },

    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: ["clothing", "books", "food", "mobile", "electronics"],
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [1000, "Product description must no excced 1000 characters"],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
