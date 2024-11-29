import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form } from "../components/Form";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 


  const submit = (e) => {
    e.preventDefault();

    if (email === "neymar@gmail.com" && password === "neymarcareco") {
      navigate("/dashboard"); 
    } else {
      if (password !== "neymarcareco") {
        alert("Senha incorreta");
      } else if (email !== "neymar@gmail.com") {
        alert("Email incorreto");
      }
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">

      <Form>

        <div className="w-full flex items-center justify-center text-xl font-bold mt-6">SIGN IN</div>

        <div className="text-gray-500 mt-2">
          Enter your credentials to access your account
        </div>

        <form onSubmit={submit}>
    
          <p className="text-gray-600 font-bold text-base">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />


          <p className="text-gray-600 font-bold text-base mt-4">Password</p>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <button
            type="submit"
            className="text-white font-bold w-full rounded-md h-11 mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            SIGN IN
          </button>
        </form>

        <div className="w-full mt-8 flex justify-center">
          <p className="text-gray-500">Forgot your password?</p>
          <NavLink to="/resetpassword" className="text-fuchsia-800 underline ml-1">
            Reset Password
          </NavLink>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
