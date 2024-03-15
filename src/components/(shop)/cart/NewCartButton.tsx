import { Box, Button } from "@mui/material";
import { useState } from "react";
import AddProductsDialog from "./AddProductsDialog";
import axios, { AxiosError } from "axios";
import { ProductsType } from "@/app/(shop)/products/page";

export default function NewCartButton() {
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AxiosError("cannot fetch data");
      }
      setLoading(false);
    }
  };

  const createNewCart = () => {
    setOpen(true);
    getProducts();
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => createNewCart()}>
        New Cart
      </Button>

      <AddProductsDialog
        open={open}
        setOpen={setOpen}
        products={products}
        loading={loading}
      />
    </Box>
  );
}
