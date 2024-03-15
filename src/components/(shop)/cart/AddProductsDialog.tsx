import { ProductsType } from "@/app/(shop)/products/page";
import {
  Dialog,
  DialogTitle,
  List,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ListItemProduct from "./ListItemProduct";
import Loading from "../Loading";

type AddProductsDialogType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  products: ProductsType[] | null;
  loading: boolean;
};

export default function AddProductsDialog({
  open,
  setOpen,
  products,
  loading,
}: AddProductsDialogType) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-title">Create New Cart</DialogTitle>

      <List
        sx={{
          height: "80vh",
          overflow: "auto",
        }}
      >
        {loading && <Loading />}
        {!loading &&
          products?.map((product) => (
            <ListItemProduct key={product.id} product={product} />
          ))}
      </List>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Save Cart</Button>
      </DialogActions>
    </Dialog>
  );
}
