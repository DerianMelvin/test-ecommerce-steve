"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function TopNavbar() {
  const pathname = usePathname();
  const capitalizedPathname =
    pathname.replace("/", "").charAt(0).toUpperCase() +
    pathname.replace("/", "").slice(1);

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100px",
        p: "1.5rem",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          width: "100%",
          p: "1rem",
          px: "1.5rem",
          borderRadius: "55rem",
          bgcolor: "lightskyblue",
        }}
      >
        <Typography variant="h5">{capitalizedPathname}</Typography>
        <LogoutButton />
      </Box>
    </Box>
  );
}
