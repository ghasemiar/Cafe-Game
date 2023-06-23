import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import { Store } from "./../../context/Cart";
import axios from "axios";
import styles from "./../../styles/Games.module.css";
import { toast } from "react-toastify";

const Product = ({ singlePost }) => {
  const { state, dispatch } = useContext(Store);
  const [product, setProduct] = useState();
  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    console.log(query.slug);
    const getData = async () => {
      try {
        const response = await axios.post("/api/products/getSingleGame", {
          slug: query.slug,
        });
        console.log(response.data.game);
        setProduct(response.data.game);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  if (!product) {
    return <div>Product not found.</div>;
  }
  function addToCartHandler() {
    const existingItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    console.log(existingItem);
    if (existingItem) {
      return toast("هر کاربر فقط یک ذخیره از هر بازی دارد");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { ...product } });
    }
  }

  return (
    <Layout>
      {/* <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  className="rounded-4 fit"
                  src={product.image}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{product.title}</h4>

                <div className="mb-3">
                  <span className="h5">{product.price}</span>
                </div>

                <p>{product.description}</p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <button
                  onClick={addToCartHandler}
                  className="btn btn-primary shadow-0"
                >
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </button>
              </div>
            </main>
          </div>
        </div>
      </section> */}
      <div className="container" style={{ marginTop: "10%" }}>
        <div class="col-12 pb-3 mt-4 text-end">
          <div
            class="card bg-white border-white border-0"
            id={styles.cardCustom}
          >
            <div class={styles.cardCustomImg}></div>
            <div class={styles.cardCustomAvatar}>
              <img class="img-fluid" src={product.image} alt="Avatar" />
            </div>
            <div class="card-body" style={{ padding: "90px" }}>
              <h4 class="card-title">{product.name}</h4>
              <p class="card-text">{product.des}</p>
              <h5 className="card-title mt-5">
                هزینه ثبت نام : {product.price} هزار تومان
              </h5>
            </div>

            <div class="card-footer">
              <div className="row">
                <div className="col-6 text-start">
                  <button
                    onClick={addToCartHandler}
                    class="btn btn-success"
                    style={{ padding: "10px", margin: "10px" }}
                  >
                    {" "}
                    اضافه کردن این بازی به سبد خرید{" "}
                  </button>
                </div>
                <div className="col-6">
                  <h6 className="mt-3">
                    {" "}
                    تنها <span>{product.count}</span> جای خابی باقی مانده
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
