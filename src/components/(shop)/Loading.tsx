import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "0.8rem",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
