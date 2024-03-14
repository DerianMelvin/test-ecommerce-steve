"use client";
import { Button } from "@mui/material";
import { useContext } from "react";
import {
  NotificationContextType,
  authNotificationContext,
} from "@/components/layout/AuthNotificationContext";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { open, setOpen } = useContext(
    authNotificationContext
  ) as NotificationContextType;

  const router = useRouter();

  const logoutUser = () => {
    sessionStorage.removeItem("token");

    // redirect to login page
    router.replace("/login");

    // display logout notification
    setOpen((prev) => ({ ...prev, logoutNotification: true }));
  };

  return (
    <Button
      onClick={() => logoutUser()}
      variant="contained"
      color="error"
      sx={{
        borderRadius: "55rem",
      }}
    >
      Logout
    </Button>
  );
}
