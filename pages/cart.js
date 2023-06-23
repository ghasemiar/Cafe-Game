import Image from "next/image";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { Store } from "../context/Cart";
import DeleteIcon from "@mui/icons-material/Delete";

import Layout from "./../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

function CartPage() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const {
    cart: { cartItems },
  } = state;
  console.log(cartItems);
  function removeItemHandler(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <Layout>
      {cartItems.length === 0 ? (
        <div>Cart is empty.</div>
      ) : (
        <section class="h-100 h-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card">
                  <div class="card-body p-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <h5 class="mb-3">
                          <Link href="/" class="text-body">
                            Continue shopping
                          </Link>
                        </h5>
                        <hr />

                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p class="mb-1">Shopping cart</p>
                            <p class="mb-0">You have 4 items in your cart</p>
                          </div>
                        </div>

                        {cartItems.map((item, idx) => (
                          <div key={idx} class="card mb-3">
                            <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={item.image}
                                      class="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: "65px" }}
                                    />
                                  </div>
                                  <div class="ms-3">
                                    <h5>{item.name}</h5>
                                  </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <h5 class="fw-normal mb-0">2</h5>
                                  </div>
                                  <div style={{ width: "50px" }}>
                                    <h5 class="mb-0">{item.price}</h5>
                                  </div>
                                  <a
                                    onClick={() => removeItemHandler(item)}
                                    style={{ backgroundColor: "#cecece" }}
                                  >
                                    <DeleteIcon fontSize="large" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
