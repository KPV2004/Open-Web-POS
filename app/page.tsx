
"use client"
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

    </div>
  );
}
