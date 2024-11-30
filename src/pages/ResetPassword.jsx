import {useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form } from "../components/Form";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const submit = (e) => {
    e.preventDefault();
    navigate("/"); 
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <Form>
        <div className="w-full flex items-center justify-center text-xl font-bold mt-6">RESET PASSWORD</div>
        <div className="text-gray-500 mt-2">
            Enter the password you want
        </div>
        <form onSubmit={submit}>
          <p className="text-gray-600 font-bold text-base">New Password</p>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter with new password"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />
<p className="text-gray-600 font-bold text-base mt-4">Confirm Password</p>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirm password"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />
          <button
            type="submit"
            className="text-white font-bold w-full rounded-md h-11 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
          >
            RESET PASSWORD
          </button>
        </form>
      </Form>
    </div>
  );
}
export default ResetPassword;