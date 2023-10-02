import React, { useState, useMemo } from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { buyItem, clearCart } from "../redux/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handlePaymentSelect = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const showLoginToast = () => {
    toast.error("Debes iniciar sesión para comprar.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleBuy = async (event) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    event.preventDefault();

    if (!user.isAuthenticated) {
      showLoginToast();
      return;
    }

    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/orders`,
        data: {
          games: cart,
          subtotal: totalAmount,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log("Data sent in the request:", {
        user: user,
        games: cart,
        subtotal: totalAmount,
      });

      dispatch(clearCart());

      cart.forEach((game) => {
        dispatch(buyItem(game));
        navigate("/thanksForBuy");
      });

      console.log("Response data:", response.data);
    } catch (err) {
      console.log(err.msg);
    }
  };

  return (
    <>
      <div className=" container checkout-container  d-flex justify-content-center align-items-center">
        <div className="semi-container pt-5">
          <div className="row">
            <div className="col-12 ">
              <div className="checkout-header">
                <h2>Payment process</h2>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="payment-icons-container ">
              <div
                className={`payment-method ${
                  selectedPayment === "visa" ? "selected" : ""
                }`}
                onClick={() => handlePaymentSelect("visa")}
              >
                <span
                  className={`payment-icon-circle ${
                    selectedPayment === "visa" ? "selected-circle" : ""
                  }`}
                ></span>

                <img src="/img/visa.png" alt="Visa" className="payment-icon" />
              </div>

              <div
                className={`payment-method ${
                  selectedPayment === "mastercard" ? "selected" : ""
                }`}
                onClick={() => handlePaymentSelect("mastercard")}
              >
                <span
                  className={`payment-icon-circle  ${
                    selectedPayment === "mastercard" ? "selected-circle" : ""
                  }`}
                ></span>

                <img
                  src="/img/tarjeta.png"
                  alt="Mastercard"
                  className="payment-icon"
                />
              </div>

              <div
                className={`payment-method  ${
                  selectedPayment === "paypal" ? "selected" : ""
                }`}
                onClick={() => handlePaymentSelect("paypal")}
              >
                <span
                  className={`payment-icon-circle  ${
                    selectedPayment === "paypal" ? "selected-circle" : ""
                  }`}
                ></span>

                <img
                  src="/img/paypal.png"
                  alt="PayPal"
                  className="payment-icon"
                />
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 ps-5 pe-5  pt-3">
              <div className="checkout-form h-100 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>

                    <input
                      type="text"
                      id="cardNumber"
                      className="form-control"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="expiration">Expiration date</label>

                    <input
                      type="text"
                      id="expiration"
                      className="form-control"
                      placeholder="MM/AA"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>

                    <input
                      type="text"
                      id="cvv"
                      className="form-control"
                      placeholder="123"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fullName">Full name</label>

                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="example@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="identityNumber">
                      Number of identity card
                    </label>

                    <input
                      type="text"
                      id="identityNumber"
                      className="form-control"
                      placeholder="12345"
                    />
                  </div>

                  <div className="total_amount_checkout">
                    Total Amount: US$ {totalAmount.toFixed(2)}
                  </div>

                  <div className="text-center col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                    <Link>
                      <button
                        className="btn "
                        type="submit"
                        onClick={handleBuy}
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
