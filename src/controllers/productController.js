import productModel from "../models/productModel.js";

/**
 * @desc    Get all products
 * @route   GET /products
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json({
      message: "Products retrieved successfully.",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve products.",
      error: error.messae,
    });
  }
};

/**
 * @desc    Create a new product
 * @route   POST /products
 */
export const creatNewProduct = async (req, res) => {
  try {
    const { body } = req;
    const newProduct = await productModel.create(body);
    return res.status(201).json({
      message: "Product created successfully.",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create product.",
      error: error.messae,
    });
  }
};

/**
 * @desc    Update an existing product
 * @route   PUT /products/:id
 */
export const updateProduct = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedProduct = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(400).json({
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update product.",
      error: error.messae,
    });
  }
};

/**
 * @desc    Delete a product
 * @route   DELETE /products/:id
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const eletetedProduct = await productModel.findByIdAndDelete(id);

    if (!eletetedProduct) {
      return res.status(400).json({
        message: "Product not found.",
      });
    }

    return res.status(204).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete product.",
      error: error.messae,
    });
  }
};
