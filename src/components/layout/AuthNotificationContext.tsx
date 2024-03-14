"use client";
import { Snackbar } from "@mui/material";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type Notification = {
  loginNotification: boolean;
  logoutNotification: boolean;
};

export type NotificationContextType = {
  open: Notification;
  setOpen: Dispatch<SetStateAction<Notification>>;
};

export const authNotificationContext =
  createContext<NotificationContextType | null>(null);

export default function AuthNotificationContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<Notification>({
    loginNotification: false,
    logoutNotification: false,
  });

  return (
    <authNotificationContext.Provider value={{ open, setOpen }}>
      {children}
      <Snackbar
        open={open.loginNotification}
        onClose={() =>
          setOpen((prev) => ({ ...prev, loginNotification: false }))
        }
        message="Successfully Logged In"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
      />
      <Snackbar
        open={open.logoutNotification}
        onClose={() =>
          setOpen((prev) => ({ ...prev, logoutNotification: false }))
        }
        message="Successfully Logged Out"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={3000}
      />
    </authNotificationContext.Provider>
  );
}
