import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function Edit(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [slug, setSlug] = useState();
  const [count, setCount] = useState();
  const [des, setDes] = useState();

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  const handleUpdate = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const imgData = new FormData();
      imgData.append("myImagee", selectedFile);
      console.log(imgData);
      const { data } = await axios.post("/api/upload", imgData);
      console.log(data);
      const sendProduct = await axios.post("/api/products/updateProducts", {
        id: props.pid,
        name,
        price,
        slug,
        image: data.done,
        count,
        des,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <>
      <MDBBtn onClick={toggleShow}>EDIT</MDBBtn>

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div style={{ marginRight: "50px", marginLeft: "50px" }}>
                <section
                  className="panel panel-default"
                  style={{ textAlign: "center" }}
                >
                  <div className="panel-heading">
                    <h3 className="panel-title">Update product</h3>
                  </div>
                  <div className="panel-body">
                    <form
                      action="designer-finish.html"
                      className="form-horizontal"
                      role="form"
                    >
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control mt-5"
                          name="name"
                          id="name"
                          placeholder="Enter name of product"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="slug"
                          id="slug"
                          placeholder="Enter product slug"
                          onChange={(e) => setSlug(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          onChange={(e) => setDes(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          id="price"
                          placeholder="Enter the price of product"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          name="count"
                          id="count"
                          placeholder="Enter the count of product"
                          onChange={(e) => setCount(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
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
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <button
                className="btn btn-danger"
                color="secondary"
                disabled={uploading}
                onClick={toggleShow}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleUpdate}>
                Save
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
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
