import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDatacontext } from "../context/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserDatacontext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        if (data?.user) {
          setUser(data.user);
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form onSubmit={submitHandler}>
          <img className="w-16 mb-10" src="/img/Uberlogo.png" alt="Uber Logo" />
          <h3 className="text-xl font-medium mb-2">What's your e-mail</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1d1b1b15] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#1d1b1b15] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="password"
          />
          <button className="bg-[#111] mb-2 text-white font-semibold rounded px-4 py-2 w-full border text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 w-full border text-lg placeholder:text-base"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
