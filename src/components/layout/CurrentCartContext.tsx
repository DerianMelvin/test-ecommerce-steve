"use client";
import { CartType } from "@/app/(shop)/cart/page";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type CurrentCartContextType = {
  currentCart: CartType | null;
  setCurrentCart: Dispatch<SetStateAction<CartType | null>>;
};

export const currentCartContext = createContext<CurrentCartContextType | null>(
  null
);

export default function CurrentCartContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentCart, setCurrentCart] = useState<CartType | null>(null);

  return (
    <currentCartContext.Provider value={{ currentCart, setCurrentCart }}>
      {children}
    </currentCartContext.Provider>
  );
}
