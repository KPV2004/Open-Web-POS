"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<String>("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name ,role}),
    });

    if (res.ok) {
      alert("Registered successfully!");
    } else {
      alert("Failed to register");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Role" onChange={(e) => setRole(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
