import { CartType } from "@/app/(shop)/cart/page";
import { Box, Typography, Button } from "@mui/material";

type CartTableRowType = {
  cart: CartType;
};

export default function CartTableRow({ cart }: CartTableRowType) {
  return (
    <Box
      key={cart.id}
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        p: "0.8rem",
        textAlign: "center",
        borderBottom: "1px solid black",
      }}
    >
      <Typography width="5ch">{cart.id}</Typography>
      <Typography width="9ch">{cart.userId}</Typography>
      <Typography width="20%">{cart.date.toString()}</Typography>
      <Typography width="10ch">{cart.products.length}</Typography>
      <Box width="30%">
        <Button variant="contained" color="secondary">
          View Cart
        </Button>
      </Box>
    </Box>
  );
}
