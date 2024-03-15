import { Box, Typography } from "@mui/material";

export default function CartTableHead() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        p: "0.8rem",
        borderBottom: "1px solid black",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
        textAlign: "center",
        bgcolor: "lightskyblue",
      }}
    >
      <Typography width="5ch">ID</Typography>
      <Typography width="9ch">User ID</Typography>
      <Typography width="20%">Date</Typography>
      <Typography width="10ch">Products</Typography>
      <Typography width="30%">Actions</Typography>
    </Box>
  );
}
