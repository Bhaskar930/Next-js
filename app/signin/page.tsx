"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border-black border-2  rounded-xl ">
        <input type="text" placeholder="username" className="text-black mr-2 bg-amber-50 rounded-2xl " onChange={(e)=>{
            setUsername(e.target.value)
        }} />
        <input type="password" placeholder="password" className="text-black bg-amber-50  rounded-2xl" onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <button onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin",{
                
                      username,
                      password

                
              
            })
        }}>SignIn</button>
      </div>
    </div>
  );
}
