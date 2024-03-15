import { ProductsType } from "@/app/(shop)/products/page";
import {
  Dialog,
  DialogTitle,
  List,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import ListItemProduct from "./ListItemProduct";
import Loading from "../Loading";
import {
  shopNotificationContext,
  ShopNotificationContextType,
} from "@/components/layout/ShopNotificationContext";

type AddProductsDialogType = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  products: ProductsType[] | null;
  loading: boolean;
};

export default function AddProductsDialog({
  openDialog,
  setOpenDialog,
  products,
  loading,
}: AddProductsDialogType) {
  const { open, setOpen } = useContext(
    shopNotificationContext
  ) as ShopNotificationContextType;

  const saveToCart = () => {
    setOpenDialog(false);

    // display product added to cart notification
    setOpen((prev) => ({ ...prev, cartAddedNotification: true }));
  };

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
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
        <Button onClick={() => saveToCart()}>Save Cart</Button>
      </DialogActions>
    </Dialog>
  );
}
