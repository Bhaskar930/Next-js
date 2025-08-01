"use client";

import axios from "axios";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup")
        }}>Signup</button>
      </div>
    </div>
  );
}
