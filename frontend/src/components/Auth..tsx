import { useState } from "react";
import { type SignupInput } from "@ashu777/cricket-common";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { LabledInput } from "./LabledInput";
import axios from "axios";

const Auth = ({ types }: { types: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState<String | null>(null);

  const sendRequest = async () => {
    if (
      !postInputs.email ||
      !postInputs.password ||
      (types === "signup" && !postInputs.name)
    ) {
      setErrors("please fill in all Required fields ");
      return;
    }
    setLoader(true);

    try {
      setErrors(null);
      const response = await axios.post(
        `http://127.0.0.1:8787/api/v1/user/${
          types === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/finalhome");
      setLoader(false);
    } catch (e: any) {
      console.log(e);
      if (e.response?.data?.error) {
        setErrors(e.response.data.error);
      } else {
        setErrors("somthing went wrong");
      }
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="">
      <Navbar
        path=""
        title1="home"
        title1Path=""
        title2="How to use"
        title2Path=""
        title3="login"
        title3Path="SignupInput"
      />
      <div className="mt-10 sm:w-90 sm:m-auto sm:mt-18 ">
        <div className=" pb-5 pl-5">
          <a
            href="/"
            className="inline-flex items-center border border-red-300 px-3 py-1.5 rounded-md text-red-500 hover:bg-indigo-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            <span className="ml-1 font-bold text-lg">Back</span>
          </a>
        </div>
        <div className="border border-red-500  flex flex-col justify-center items-center  mx-5 py-10   ">
          <div className="text-2xl mb-2 text-white font-extralight border px-2 py-1 bg-[#e20001] ">
            {types === "signin" ? "Welcome back" : "Create an account "}
          </div>
          {/* name */}
          {types === "signup" ? (
            <LabledInput
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
              title="Name"
              placeholder="Enter your name"
            />
          ) : null}
          {/* email  */}
          <LabledInput
            title="Email"
            type="email"
            placeholder="Enter your email"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          {/* password  */}
          <LabledInput
            title="Password"
            type="password"
            placeholder="*********"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <div></div>
          <button
            onClick={sendRequest}
            disabled={loader}
            className="bg-[#e20001] font-extralight hover:bg-red-400 py-2 px-5 text-white rounded mt-4 flex items-center justify-center gap-2"
          >
            {loader ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </>
            ) : types === "signup" ? (
              "Register"
            ) : (
              "Login"
            )}
          </button>

          <div className="mt-4">
            {types === "signup"
              ? "Already have an account?"
              : "Create New Account"}
            {
              <Link
                className="ml-1 text-slate-400"
                to={types === "signup" ? "/signin" : "/signup"}
              >
                {types === "signup" ? "Login" : "Register"}
              </Link>
            }
          </div>
          {errors && <div className="text-red-500 text-sm mt-3">{errors}</div>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
