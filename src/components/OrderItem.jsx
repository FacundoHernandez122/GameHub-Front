import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, React } from "react";
import axios from "axios";

import "./CartItem.css";

function OrderItem() {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const user = useSelector((state) => state.user);

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [order, setOrder] = useState("");

  useEffect(() => {
    const getOrder = async () => {
      console.log("Aca entró");

      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/orders/${order.user}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setOrder(response.data);
        console.log(setOrder);
      } catch (err) {
        console.log(err.msg);
      }
    };

    getOrder();
  }, [orderId, user.token]);

  return (
    <div className="cart-item">
      <div className="container containerWrapperCard p-0 pt-5 m-auto">
        {order ? (
          <div className="row">
            {order.games.map((game) => (
              <div
                key={game._id}
                className="wrapperCards col-sm-12 col-md-12 col-lg-6 col-xl-4 m-0"
              >
                <NavLink
                  to={`/${slugify(game.name, {
                    replacement: "_",
                    lower: true,
                  })}`}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <div className="wrapperImg m-3">
                      <img
                        className="animated fadeInRight cardImg"
                        src={`${baseURL}/img/${game.img}`}
                        alt=""
                      />
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay ordenes disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default OrderItem;
