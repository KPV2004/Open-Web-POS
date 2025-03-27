"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json(); // แปลง response เป็น JSON
    console.log("Response:", res); // Debug ดู Response
    console.log("Data:", data); // Debug ดู Data ที่ได้จาก API

    if (res.ok) {
      alert("Registered successfully!");
      if(data.token){
        // console.log(data.token)
        localStorage.setItem("token", data.token);
      }
      router.push("/home");
    } else {
      alert("Failed to register");
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
