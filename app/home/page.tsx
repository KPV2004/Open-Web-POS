"use client"; // ✅ Required for client-side hooks

import withAuth from "@/utils/withAuth";

const Home = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    
  return (
    <div>
        <h1>Welcome to the Home!</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withAuth(Home); // ✅ Only wrap Client Pages
