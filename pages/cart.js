import Image from "next/image";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { Store } from "../context/Cart";
import DeleteIcon from "@mui/icons-material/Delete";

import Layout from "./../components/Layout";
import { useRouter } from "next/router";

function CartPage() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const {
    cart: { cartItems },
  } = state;
  function removeItemHandler(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <Layout>
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>Cart is empty.</div>
      ) : (
        <section className="h-100">
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>{" "}
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={item.image}
                            className="img-fluid rounded-3"
                            alt={item.title}
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{item.title}</p>
                          <p>
                            <span className="text-muted">Size: </span>M{" "}
                            <span className="text-muted">Color: </span>Grey
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <div className="form-outline">
                            <label className="form-label" for="form2">
                              quantty
                            </label>
                            <input
                              id="form2"
                              value="$"
                              type="number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a
                            onClick={() => removeItemHandler(item)}
                            className="text-danger"
                          >
                            <DeleteIcon fontSize="large" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="card">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                      onClick={() => router.push("login?redirect=/shipping")}
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });

// {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
// totla price
