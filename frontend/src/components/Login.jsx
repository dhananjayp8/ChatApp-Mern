import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      //toast.success(res.data.message);
      console.log(res.data);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    // console.log(user);
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="w-full mx-auto text-center flex items-center mt-3">
            <p className="mr-1 ml-6">Don't have an account?</p>
            <Link to={"/register"}>Signup</Link>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
