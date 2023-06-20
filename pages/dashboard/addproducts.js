import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Layout from "../../components/Layout";

const addproducts = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [slug, setSlug] = useState();
  const [count, setCount] = useState();
  const [des, setDes] = useState();

  const handleUpload = async () => {
    //uploading image
    setUploading(true);
    try {
      if (!selectedFile) return;
      const imgData = new FormData();
      imgData.append("myImage", selectedFile);
      console.log(imgData);
      const { data } = await axios.post("/api/upload", imgData);

      console.log(data.done);
      const sendProduct = await axios.post("/api/products/addProduct", {
        name,
        price,
        slug,
        image: data.done,
        count,
        des,
      });
      console.log(sendProduct);
    } catch (error) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <Layout>
      <div className="container">
        <section className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add products heading</h3>
          </div>
          <div className="panel-body">
            <form
              action="designer-finish.html"
              className="form-horizontal"
              role="form"
            >
              <div className="form-group">
                <label for="name" className="col-sm-3 control-label">
                  Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control mt-5"
                    name="name"
                    id="name"
                    placeholder="Enter name of product"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="slug" className="col-sm-3 control-label">
                  slug
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="slug"
                    id="slug"
                    placeholder="Enter product slug"
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="description" className="col-sm-3 control-label">
                  description
                </label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    onChange={(e) => setDes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <label for="price" className="col-sm-3 control-label">
                  price
                </label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Enter the price of product"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="count" className="col-sm-3 control-label">
                  count
                </label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    name="count"
                    id="count"
                    placeholder="Enter the count of product"
                    onChange={(e) => setCount(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-3">
                  <div className="max-w-4xl mx-auto p-20 space-y-6">
                    <input
                      type="file"
                      onChange={({ target }) => {
                        if (target.files) {
                          const file = target.files[0];
                          setSelectedFile(file);
                        }
                      }}
                    />
                    \
                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      style={{ opacity: uploading ? ".5" : "1" }}
                      className="bg-red-600 p-3 w-32 text-center rounded text-white"
                    >
                      {uploading ? "Uploading.." : "Upload"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default addproducts;
