import "../components/css/Cart.css";
import NavigateBar from "./NavigateBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import React, { useMemo } from "react";

import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [account, setAccount] = useState("");

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("There are no games in the cart. Add games before purchasing.");
    } else {
      window.location.href = "/checkOut";
    }
  };

  return (
    <div className="cont_background">
      <div>
        <NavigateBar />
      </div>
      <div className="container scale_container_cart pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5  d-flex align-items-center">
            <h2 className="ps-4 pt-3">Cart</h2>
          </div>
        </div>
        <div className="row cart_mainBox pt-5 p-5">
          <div className="col-lg-8 col-md-12 col-sm-12 cart_content_game">
            {cart.map((item) => (
              <div key={item._id} className="cart_box ">
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 display-flex ">
            <div className="cart_priceCard  mx-auto">
              {" "}
              <div className="cart_price">
                <div className="cart_priceBody">
                  <h5 className="cart_price_title">
                    <strong>Games summary</strong>
                  </h5>
                  <hr />

                  <p>Taxes US$ 0</p>
                  <p>Discounts US$ 0</p>
                  <div className="cart_price_total">
                    <hr />
                    <div>Total Amount US$ {totalAmount.toFixed(2)}</div>
                    <Link>
                      <button onClick={handleBuyNow} className="btn cart_priceButton">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-1 pb-5">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
