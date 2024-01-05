import React from "react";
import {Link} from "react-router-dom"

import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
function Login() {
 
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 border border-zinc-500 p-6 rounded-xl shadow-xl">
        <h1 className="text-center">Login</h1>
        <Input inputType="email" placeholder="Email"/>
        <PasswordInput placeholder="Password"/>
        <Button text="Login"/>
        <Link to='/signup'>Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
