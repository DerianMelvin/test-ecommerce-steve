"use client";
import { Snackbar } from "@mui/material";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ShopNotification = {
  productDeletedNotification: boolean;
  cartAddedNotification: boolean;
};

export type ShopNotificationContextType = {
  open: ShopNotification;
  setOpen: Dispatch<SetStateAction<ShopNotification>>;
};

export const shopNotificationContext =
  createContext<ShopNotificationContextType | null>(null);

export default function ShopNotificationContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<ShopNotification>({
    productDeletedNotification: false,
    cartAddedNotification: false,
  });

  return (
    <shopNotificationContext.Provider value={{ open, setOpen }}>
      {children}
      <Snackbar
        open={open.productDeletedNotification}
        onClose={() =>
          setOpen((prev) => ({ ...prev, productDeletedNotification: false }))
        }
        message="Product successfully deleted"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
      />
      <Snackbar
        open={open.cartAddedNotification}
        onClose={() =>
          setOpen((prev) => ({ ...prev, cartAddedNotification: false }))
        }
        message="Product added to cart"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
      />
    </shopNotificationContext.Provider>
  );
}
