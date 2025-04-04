import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/cart";  
import { toast } from "react-hot-toast";
import "../styles/ProductDetailsStyles.css";

import { FaStar, FaThumbsUp } from "react-icons/fa";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();  

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const [liked, setLiked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(0);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const addReview = async () => {
    if (!rating || !reviewText.trim()) {
      toast.error("Please provide a rating and a comment.");
      return;
    }

    try {
      const { data } = await axios.post(`/api/v1/product/add-review/${product._id}`, {
        rating,
        comment: reviewText,
      });

      setReviews(data.reviews); // Update the reviews dynamically
      setReviewText("");
      setRating(0);
      toast.success("Review added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error adding review");
    }
  };
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async () => {
  try {
    const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
    setProduct(data?.product);
    setReviews(data?.product.reviews || []);
    
    // Call getSimilarProduct after setting the product details
    if (data?.product?._id && data?.product?.category?._id) {
      getSimilarProduct(data.product._id, data.product.category._id);
    }
  } catch (error) {
    console.log(error);
  }
};

  const addToCart = (product) => {
    if (!selectedSize && !["bags", "accessories", "jewellery"].includes(product?.category?.name)) {
      toast.error("Please select a size before adding to cart!");
      return;
    }
    const productToAdd = { ...product, selectedSize, quantity }; 
    const updatedCart = [...cart, productToAdd];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item added to cart");
  };

  const handleHelpfulClick = () => {
    setLiked(true);
    setHelpfulCount(helpfulCount + 1);
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img src={`/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} height="600" width="300px" />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Product Detail : {product.productinfo}</h6>
          <h6>Price : {product?.price?.toLocaleString("en-US", { style: "currency", currency: "INR" })}</h6>
          <h6>Category : {product?.category?.name}</h6>
          
          {/* Size & Quantity Selection */}
          {/* Size & Quantity Selection */}
{!(["bags", "accessories", "jewellery"].includes(product?.category?.name)) && (
  <div className="size-quantity-container">
    <div className="size-selector">
      <h6>Select Size:</h6>
      <div className="size-buttons">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  </div>
)}

            <div className="quantity-selector">
              <h6>Quantity:</h6>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              />
            </div>
          
          <button className="btn btn-warning ms-1" onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
      
      <hr />

      {/* Similar Products Section */}
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && <p className="text-center">No Similar Products found</p>}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <Link onClick={`/product/${p.slug}`} ><img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} /></Link>
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text">{p.description.substring(0, 60)}...</p>
                <p className="card-text">
  {p.productinfo ? p.productinfo.substring(0, 60) + "..." : "No details available"}
</p>

                <div className="card-name-price">
                  <button className="btn btn-info ms-1" onClick={() => navigate(`/product/${p.slug}`)}>
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className="add-review">
          <h5>Add a Review</h5>
          <div className="rating-selector">
            {[1, 2, 3, 4, 5].map((num) => (
              <FaStar
                key={num}
                color={num <= rating ? "gold" : "gray"}
                style={{ cursor: "pointer" }}
                onClick={() => setRating(num)}
              />
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
          ></textarea>
          <button className="btn btn-primary" onClick={addReview}>Submit Review</button>
        </div>
    
      {/* Review Section */}
      <div className="review-section">
        <h4>Customer Reviews</h4>
        {reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
               
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src={review.user?.profileImage || "/images/user.png"}
                      alt={review.user?.name}
                      className="review-user-image"
                    />
                    <div className="review-user-info">
                      <h6 className="review-user-name">Customer</h6>
                      
                    </div>
                  </div>

                  <div className="review-rating">
                    <span className="rating-badge">{review.rating.toFixed(1)} ★</span>
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar key={i} color="gold" />
                    ))}
                  </div>

                  <p className="review-comment">{review.comment}</p>

                  <button className="helpful-btn" onClick={handleHelpfulClick} disabled={liked}>
                    <FaThumbsUp /> Helpful ({helpfulCount})
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        
        </div>
    </Layout>
  );
};

export default ProductDetails;
