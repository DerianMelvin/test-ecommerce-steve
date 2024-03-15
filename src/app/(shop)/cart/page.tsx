"use client";
import Loading from "@/components/(shop)/Loading";
import CartTableHead from "@/components/(shop)/cart/CartTableHead";
import CartTableRow from "@/components/(shop)/cart/CartTableRow";
import NewCartButton from "@/components/(shop)/cart/NewCartButton";
import { Box, Pagination } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export type CartType = {
  id: number;
  userId: string;
  date: Date;
  products: {
    productId: number;
    quantity: number;
  }[];
};

export default function Cart() {
  const [carts, setCarts] = useState<CartType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getCarts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://fakestoreapi.com/carts");

      setCarts(response.data);

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

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: "1.5rem",
        overflow: "auto",
      }}
    >
      <NewCartButton />

      {/* Cart Table */}
      <Box
        component="div"
        sx={{
          height: "55%",
          display: "flex",
          flexDirection: "column",
          py: "1.5rem",
          overflow: "auto",
        }}
      >
        <CartTableHead />

        {loading && <Loading />}

        {!loading &&
          carts &&
          carts
            .slice((page - 1) * 5, page * 5)
            .map((cart) => <CartTableRow key={cart.id} cart={cart} />)}
      </Box>

      {/* Pagination */}
      {!loading && carts && (
        <Pagination
          count={Math.ceil(carts.length / 5)}
          page={page}
          onChange={(e: React.ChangeEvent<unknown>, value: number) =>
            setPage(value)
          }
          variant="text"
          color="primary"
          size="large"
          sx={{
            p: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
    </Box>
  );
}
