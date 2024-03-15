import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        width: "300px",
        minWidth: "fit-content",
        height: "100%",
        borderTopRightRadius: "1.5rem",
        borderBottomRightRadius: "1.5rem",
        bgcolor: "midnightblue",
      }}
    >
      <Typography
        component="div"
        variant="h3"
        sx={{
          width: "100%",
          p: "1rem",
          px: "1.5rem",
          borderBottom: "1px solid white",
          color: "white",
        }}
      >
        Logo
      </Typography>

      <Box
        component="div"
        sx={{
          width: "100%",
          p: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="/products"
          component={NextLink}
          variant="h6"
          sx={{
            width: "100%",
            p: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid transparent",
            textDecoration: "none",
            color: "white",
            ":hover": {
              borderColor: "skyblue",
            },
          }}
        >
          Products
        </Link>
      </Box>

      <Box
        component="div"
        sx={{
          width: "100%",
          p: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="/cart"
          component={NextLink}
          variant="h6"
          sx={{
            width: "100%",
            p: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid transparent",
            textDecoration: "none",
            color: "white",
            ":hover": {
              borderColor: "skyblue",
            },
          }}
        >
          Cart
        </Link>
      </Box>
    </Box>
  );
}
