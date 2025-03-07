import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // New state to manage payment method
  const [upiId, setUpiId] = useState(""); // Store UPI ID
  const [upiFormValid, setUpiFormValid] = useState(false); // Validate UPI ID input
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = cart?.reduce((acc, item) => acc + item.price, 0);
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      const myCart = cart.filter((item) => item._id !== pid);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.error(error);
    }
  };

  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      if (data?.clientToken) {
        setClientToken(data.clientToken);
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth?.token]);

  const handleOnlinePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      completeOrder();
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleUPIPayment = () => {
    if (!upiFormValid) {
      toast.error("Please enter a valid UPI ID.");
      return;
    }
    // Handle UPI payment logic here
    toast.success("UPI payment initiated successfully!");
    completeOrder();
  };

  const handleCOD = () => {
    toast.success("Order Placed Successfully with Cash on Delivery");
    completeOrder();
  };

  const completeOrder = () => {
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/dashboard/user/orders");
  };

  const validateUpiId = (id) => {
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/; // Basic UPI ID validation regex
    setUpiFormValid(upiRegex.test(id));
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-image-container">
          <img
            className="cartimg"
            src="https://www.shutterstock.com/image-photo/simply-minimal-design-small-supermarket-260nw-1771380476.jpg"
            alt="cart"
          />
          <div className="cart-text">
            Great choices! <br /> You’re just a few clicks away from making these stunning pieces yours.
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user ? "Hello Guest" : `Hello ${auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout!"
                    }`
                  : "Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7 p-3 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height="130px"
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price: {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-5 cart-summary">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total: {totalPrice()} </h4>

              {auth?.user?.address ? (
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                    Update Address
                  </button>
                </div>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/login", { state: "/cart" })}
                    >
                      Please Login to Checkout
                    </button>
                  )}
                </div>
              )}

              <div className="mt-2">
                {/* Step 1: Ask for payment method */}
                {!paymentMethod ? (
                  <>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => setPaymentMethod("online")}
                    >
                      Pay Online (Card)
                    </button>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => {
                        setPaymentMethod("cod");
                        handleCOD();
                      }}
                    >
                      Cash on Delivery
                    </button>
                  </>
                ) : (
                  <>
                    {/* Step 2: Display payment options based on chosen method */}
                    {paymentMethod === "online" && clientToken && auth?.token && cart?.length > 0 && (
                      <>
                        <DropIn
                          options={{
                            authorization: clientToken,
                            paymentOptionPriority: ["card"],
                          }}
                          onInstance={(instance) => setInstance(instance)}
                        />
                        <button
                          className="btn btn-primary"
                          onClick={handleOnlinePayment}
                          disabled={loading || !instance}
                        >
                          {loading ? "Processing ..." : "Make Payment"}
                        </button>
                        <div>
                        <a
                      
                          className="choose-payment-way"
                          onClick={() => setPaymentMethod("upi")}
                        >
                          Choose Another Way (UPI)
                        </a></div>
                      </>
                    )}

                    {/* UPI Payment Method */}
                    {paymentMethod === "upi" && (
                      <div className="upi-form-container">
                      <form>
                        <h5>Enter Your UPI ID:</h5>
                        <input
                          type="text"
                          placeholder="Enter UPI ID"
                          value={upiId}
                          onChange={(e) => {
                            setUpiId(e.target.value);
                            validateUpiId(e.target.value); // Validate UPI ID
                          }}
                          className="form-control"
                        />
                      </form>
                      <button
                        className="btn btn-primary mt-2"
                        onClick={handleUPIPayment}
                        disabled={!upiFormValid} // Disable if UPI ID is invalid
                      >
                        Pay via UPI
                      </button><div>
                      <a
                        className="choose-payment-way"
                        onClick={() => setPaymentMethod("online")} // Switch back to card payment
                      >
                        Choose Another Way (Card)
                      </a>
                      </div>
                    </div>
                  )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
