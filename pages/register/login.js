import Layout from "./../../components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { text } from "@fortawesome/fontawesome-svg-core";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, redirect, session]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    console.log(email, password);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        alert(result);
      }
    } catch (error) {
      alert(error);
    }
  };
  const logOutHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/register/login" });
  };
  return (
    <Layout>
      {session?.user ? (
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-12">
              <h2 className="text-white">لطفا از اکانت فعلی خارج شوید</h2>
              <button className="btn btn-danger" onClick={logOutHandler}>
                log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-outline mb-4">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                    />
                    {errors.email && <div>please enter your email</div>}
                    <label className="form-label" for="form1Example13">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 5,
                          massage: "more than 5 char needed",
                        },
                      })}
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                    />
                    {errors.password && <div>{errors.password.message}</div>}
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Sign in
                  </button>
                </form>
                <p className="text-white">
                  Don't have account{" "}
                  <Link className="text-primary" href={"/register/signup"}>
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};
export default Login;
