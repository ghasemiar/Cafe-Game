import Layout from "./../../components/Layout";
import getError from "./../../utils/error";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

const signup = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit(submitHandler)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              {...register("name", {
                                required: "Please enter name",
                              })}
                            />
                            {errors.name && (
                              <div className="text-danger">
                                {errors.name.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              {...register("email", {
                                required: "Please enter email",
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                  message: "Please enter valid email",
                                },
                              })}
                            />
                            {errors.email && (
                              <div className="text-danger">
                                {errors.email.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              {...register("password", {
                                required: "Please enter password",
                                minLength: {
                                  value: 6,
                                  message: "password is more than 5 chars",
                                },
                              })}
                            />
                            {errors.password && (
                              <div className="text-danger">
                                {errors.password.message}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              {...register("confirmPassword", {
                                required: "Please enter confirm password",
                                validate: (value) =>
                                  value === getValues("password"),
                                minLength: {
                                  value: 6,
                                  message:
                                    "confirm password is more than 5 chars",
                                },
                              })}
                            />
                            {errors.confirmPassword && (
                              <div className="text-danger">
                                {errors.confirmPassword.message}
                              </div>
                            )}
                            {errors.confirmPassword &&
                              errors.confirmPassword.type === "validate" && (
                                <div className="text-danger">
                                  Password do not match
                                </div>
                              )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <input
                            type="submit"
                            value="Register"
                            className="btn btn-primary btn-lg"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default signup;
