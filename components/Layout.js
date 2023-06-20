import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{`${title} - Shopping x  `}</title>
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
