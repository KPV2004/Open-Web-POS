"use client"; // ✅ Required for Client Components

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (!isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
