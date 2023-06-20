import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Edit from "../../components/Edit";

export default function productEditDelete() {
  const handleDeletePost = async (id) => {
    try {
      const deleteRes = await axios.post("/api/products/deleteGame", {
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload(true);
  };
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/products/showAllProducts");
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          {data?.map((pItem) => (
            <div className="col-lg-4 mt-5" key={pItem.slug}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={pItem.image}
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{pItem.name}</h4>
                  <p className="card-text">{pItem.des}</p>
                  <div className="row">
                    <div className="col-6 text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeletePost(pItem._id)}
                      >
                        DELETE
                      </button>
                    </div>
                    <div className="col-6 text-center">
                      <Edit pid={pItem._id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
