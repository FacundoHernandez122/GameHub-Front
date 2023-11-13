import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleRemoveItem = () => {
    dispatch(removeItem({ _id: item._id }));
  };

  return (
    <div className="cart-item">
      <div className="row">
        <div className="col-lg-4 col-md-8 col-sm-12 d-flex cart_image">
          <img
            src={`${baseURL}/img/${item.img}`}
            alt="Product"
            className="img-fluid cart_img ms-2 d-none d-md-block"
          />
        </div>
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body cart_info">
            <h5 className="cart_item_title">{item.name}</h5>
            <div className="cart_price_value">US$ {item.price}</div>
          </div>
          <div className="d-flex justify-content-end mt-auto">
            <button className="btn cart_button" onClick={handleRemoveItem}>
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
