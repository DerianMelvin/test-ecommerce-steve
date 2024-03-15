import { CartType } from "@/app/(shop)/cart/page";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ProductsDialogType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cart: CartType;
};

export default function CartProductsDialog({
  open,
  setOpen,
  cart,
}: ProductsDialogType) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-title">Products in Cart</DialogTitle>

      <List>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5rem",
            textAlign: "center",
            bgcolor: "lightgray",
          }}
        >
          <ListItemText primary="ProductID" />
          <ListItemText primary="Quantity" />
        </ListItem>

        {cart.products.map((product) => (
          <ListItem
            key={product.productId}
            divider
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5rem",
              textAlign: "center",
            }}
          >
            <ListItemText primary={product.productId} />
            <ListItemText primary={product.quantity} />
          </ListItem>
        ))}
      </List>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
