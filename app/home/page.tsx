"use client"; // ✅ Required for client-side hooks


import withAuth from "@/utils/withAuth";

const Home = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    
  return (
    <div className="h-screen w-full bg-red-300">
        <h1 className="bg-green-300">Welcome to the Home!</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withAuth(Home); // ✅ Only wrap Client Pages
