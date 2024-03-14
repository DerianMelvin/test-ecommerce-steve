import Sidebar from "@/components/(shop)/Sidebar";
import TopNavbar from "@/components/(shop)/TopNavbar";
import { Box } from "@mui/material";

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
      <Sidebar />

      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNavbar />

        {children}
      </Box>
    </Box>
  );
}
