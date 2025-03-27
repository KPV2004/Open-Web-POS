"use client";

import { useState } from "react";
import Image from 'next/image'
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Cross, Eye, EyeOff, X } from 'lucide-react'; // Imported for password visibility icons

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const delay = async (ms:number) => {
    return new Promise((resolve) => 
        setTimeout(resolve, ms));
    };

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    

    const data = await res.json();
    console.log("Response:", res);
    console.log("Data:", data);

    if (res.ok) {
    //   alert("Registered successfully!");
      setStatus(true);
      setIsDisplay(true)
      if(data.token){
        localStorage.setItem("token", data.token);
      }
      await delay(2000);
      router.push("/home");
      setIsDisplay(false)
      
    } else {
      setIsDisplay(true)
      setStatus(false);
      await delay(2000);
      setStatus(false);
      setIsDisplay(false)

    //   alert("Failed to register");
    }
  };
  
  const handleClose = () => {
    setIsDisplay(false);
    setStatus(false);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white h-dvh w-full flex justify-center items-center font-noto">
      <div className="w-[90%] h-[90%] bg-[#596daf] flex flex-col justify-center items-center gap-[8%] rounded-4xl">
        {/* <Image src={`/icon.png`} alt={"Open Web POS"} width="200" height="200" /> */}
        <div className="">
        <h1 className="text-6xl font-bold">Login</h1>
        </div>
        <div className="flex flex-col items-center gap-5 w-full">
          <input 
            type="email" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="text-xl px-5 py-5 w-[30%] bg-white text-black" 
          />
          <div className="relative w-[30%]">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="password" 
              onChange={(e) => setPassword(e.target.value)} 
              className="text-xl px-5 py-5 w-full bg-white text-black" 
            />
            <button 
              onClick={togglePasswordVisibility} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="text-gray-500" size={20} />
              ) : (
                <Eye className="text-gray-500" size={20} />
              )}
            </button>
          </div>
        </div>
        <button 
          className="bg-[#39617b] w-[30%] py-[1%] cursor-pointer hover:bg-[#49617b] text-2xl font-medium" 
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
      {isDisplay && 
        <div className="absolute bg-white h-[70%] w-[60%] shadow-2xl flex flex-col items-center rounded-2xl ">
            <div className="flex justify-end w-full p-5 text-black">
            <button className="cursor-pointer fixed" onClick={handleClose}>
                <X/>
            </button>
            </div>
            {status &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-[10%]">
            <Icon icon="iconoir:check-circle" style={{ color: "green", width:"30%" ,height:"30%" }} />
            <h1 className="text-black text-4xl font-bold">Login successfully</h1>
            </div>
            }
            {!status &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-[10%]">
            <Icon icon="iconoir:xmark-circle" style={{ color: "red", width:"30%" ,height:"30%" }} />
            <h1 className="text-black text-4xl font-bold">Failed to Login</h1>
            </div>
            }
        </div>
      }
    </div>
  );
}