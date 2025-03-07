import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController, 
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import Product from "../models/productModel.js";  // Move Product model import to the top

const router = express.Router();

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get all products
router.get("/get-product", getProductController);

// Get single product
router.get("/get-product/:slug", getSingleProductController);

// Get product photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter product
router.post("/product-filters", productFiltersController);

// Product count
router.get("/product-count", productCountController);

// Product per page
router.get("/product-list/:page", productListController);

// Search product
router.get("/search/:keyword", searchProductController);

// Related product
router.get("/related-product/:pid/:cid", realtedProductController);

// Category-wise product
router.get("/product-category/:slug", productCategoryController);

// Payments Routes
router.get("/braintree/token", braintreeTokenController);
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

// ✅ Add Review API
router.post("/add-review/:productId", async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { productId } = req.params;

    if (!rating || !comment.trim()) {
      return res.status(400).json({ message: "Rating and comment are required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const newReview = { rating, comment };
    product.reviews.push(newReview);
    await product.save();

    res.status(201).json({ message: "Review added successfully", reviews: product.reviews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding review", error });
  }
});

export default router;  
