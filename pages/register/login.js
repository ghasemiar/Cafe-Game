import Layout from "./../../components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
        toast.error(result.result);
      }
    } catch (error) {
      toast.error(getError(error));
    }
  };
  return (
    <Layout>
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

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
              <p>
                Don't have account{" "}
                <Link href={"/register/signup"}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Login;
