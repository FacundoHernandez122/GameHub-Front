import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, React } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import slugify from "slugify";
import axios from "axios";
import NavigateBar from "./NavigateBar";
import Footer from "./Footer";
import Login from "./Login";

import "./NavigateBar.css";

import "./UserProfile.css";

function UserProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const idOrder = useParams();
  const [account, setAccount] = useState("");
  const [orderList, setOrderList] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const order = useSelector((state) => state.order);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/user/${params.username}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAccount(response.data);
      } catch (err) {
        console.log(err.msg);
      }
    };

    getUser();
  }, []);

  const handleSave = async () => {
    try {
      const updatedUserData = {
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        address: newAddress,
      };
      const response = await axios.patch(
        `${baseURL}/user/${params.username}/edit`,

        updatedUserData
      );

      if (response.status === 200) {
        setAccount(updatedUserData);
        handleClose();
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <>
      {user ? (
        <>
          <div className="cont_background">
            <div>
              <NavigateBar />
            </div>
            <div className="container scale_container_profile p">
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="backModal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="editProfile-form h-100 ">
                          <form>
                            <div className="form-group">
                              <label htmlFor="firstname">Firstname</label>
                              <input
                                type="text"
                                id="firstname"
                                className="form-control"
                                value={newFirstname}
                                placeholder={account.firstname}
                                onChange={(e) =>
                                  setNewFirstname(e.target.value)
                                }
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="lastname">Lastname</label>
                              <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                value={newLastname}
                                placeholder={account.lastname}
                                onChange={(e) => setNewLastname(e.target.value)}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="Email">Email</label>
                              <input
                                type="text"
                                id="Email"
                                className="form-control"
                                value={newEmail}
                                placeholder={account.email}
                                onChange={(e) => setNewEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="Address">Address</label>
                              <input
                                type="text"
                                id="Address"
                                className="form-control"
                                value={newAddress}
                                placeholder={account.address}
                                onChange={(e) => setNewAddress(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary btn_editProfile"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="row pt-5">
                <div className="col-lg-4 col-md-6 col-sm-12 pt-5 mt-3 d-flex align-items-center pb-2">
                  <div className="image_user ">
                    <img src="./img/Hongo.png" alt="" />
                  </div>
                  <h2 className="ps-4 pt-3">{account.username}</h2>
                </div>
              </div>

              <div className="row profile_mainBox pt-5 pb-5">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  {account.orders ? (
                    <div className="">
                      {account.orders.map((order) => (
                        <div key={order._id} className="ms-5 ps-4">
                          {order.games.map((game) => (
                            <div
                              key={game.name}
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
                                    <div className="image-overlay">
                                      <h3 className="price">USD {game.name}</h3>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No hay juegos disponibles.</p>
                  )}
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                  <div className="profile_dataCard mx-auto ">
                    <div className="profile_data ">
                      <h5 className="profile_data_title">
                        <strong>Account Details</strong>
                      </h5>
                      <hr />
                      <p>Firstname: {account.firstname}</p>
                      <p>Lastname: {account.lastname}</p>
                      <p>Email: {account.email}</p>
                      <p>Address: {account.address}</p>
                      <p>Phone: {account.phone}</p>
                      <div className="d-flex justify-content-center">
                        <Button
                          className="btn_editProfile"
                          variant="primary"
                          onClick={handleShow}
                        >
                          Edit Profile
                        </Button>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5 pb-5">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UserProfile;
