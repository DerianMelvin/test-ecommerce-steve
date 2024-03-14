"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.replace("/login");
    } else {
      router.replace("/products");
    }
  }, [router]);
}
