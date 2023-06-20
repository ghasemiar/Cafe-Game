import ShowGames from "./../components/Games";
import data from "../data/data.js";
import Layout from "./../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const Home = ({ allPosts }) => {
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
    <div>
      <Layout title="alsdfs">
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            {data?.map((pItem) => (
              <ShowGames items={pItem} key={pItem.slug}></ShowGames>
            ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   let res = await fetch("http://localhost:3000/api/products/showAllProducts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let allPosts = await res.json();

//   return {
//     props: { allPosts },
//   };
// }
export default Home;
