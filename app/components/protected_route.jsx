"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token || token === "undefined") {
      localStorage.removeItem("access_token");
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
