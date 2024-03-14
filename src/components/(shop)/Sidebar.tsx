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
        borderTopRightRadius: "3rem",
        borderBottomRightRadius: "3rem",
        bgcolor: "lightskyblue",
      }}
    >
      <Typography
        component="div"
        variant="h3"
        sx={{
          width: "100%",
          p: "1rem",
          px: "1.5rem",
          borderBottom: "1px solid black",
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
            px: "2rem",
            borderRadius: "55rem",
            textDecoration: "none",
            color: "white",
            bgcolor: "midnightblue",
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
            px: "2rem",
            borderRadius: "55rem",
            textDecoration: "none",
            color: "white",
            bgcolor: "midnightblue",
          }}
        >
          Cart
        </Link>
      </Box>
    </Box>
  );
}
