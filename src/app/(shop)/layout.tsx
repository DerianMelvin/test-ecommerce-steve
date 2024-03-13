import { Box, Typography } from "@mui/material";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        display: "flex",
      }}
    >
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: "300px",
          height: "100%",
          bgcolor: "gray",
        }}
      >
        <Typography component="p">Logo</Typography>
      </Box>

      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Navbar */}
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100px",
            bgcolor: "darkblue",
          }}
        >
          <Typography>Products</Typography>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
