import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Store } from "./../context/Cart";

const Navbar = () => {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const logOutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "register/login" });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Cage Game
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  about
                </Link>
              </li>
              {session?.user?.isAdmin && (
                <li className="nav-item dropdown ms-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Admin Dashboard
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <Link
                        className="dropdown-item text-light"
                        href="/dashboard/addproducts"
                      >
                        Add new product
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-light"
                        href="/dashboard/productEditDelete"
                      >
                        Edit or Delete products
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-nav ms-auto">
            <Link href="/cart" className="nav-item nav-link">
              <ShoppingBasketIcon />
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            {status === "loading" ? (
              "loading"
            ) : session?.user ? (
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {session.user.name}
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          order history
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={logOutClickHandler}
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/register/login" className="nav-item nav-link">
                login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
