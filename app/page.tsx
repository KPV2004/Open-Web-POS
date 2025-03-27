"use client"
import Image from 'next/image'
import { useRouter } from "next/navigation"; // ✅ Correct import

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div>
      <Image src={`/icon.png`} alt={"Open Web POS"} width="100" height="100" />
      <h1>Home</h1>
      <h1>กดหดกห</h1>
    </div>
  );
}

