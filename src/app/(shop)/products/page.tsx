"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Pagination,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Product from "@/components/(shop)/products/Product";

export type ProductsType = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export default function Products() {
  const [category, setCategory] = useState<string>("all");
  const [products, setProducts] = useState<ProductsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const categoryList = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

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

  const getProductsByCategory = async (category: string) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

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

  // fetch data based on currently selected category
  useEffect(() => {
    if (category == "all") {
      getProducts();
    } else {
      getProductsByCategory(category);
    }
  }, [category]);

  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "1.5rem",
        overflow: "auto",
      }}
    >
      <ButtonGroup variant="outlined" fullWidth>
        {categoryList.map((ctg) => (
          <Button key={ctg} onClick={() => setCategory(ctg)}>
            {ctg}
          </Button>
        ))}
      </ButtonGroup>

      <Box
        component="div"
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          py: "1.5rem",
          overflow: "auto",
        }}
      >
        {loading && (
          <Box>
            <Typography>Loading...</Typography>
          </Box>
        )}

        {!loading &&
          products &&
          products
            .slice((page - 1) * 6, page * 6)
            .map((product) => <Product key={product.id} product={product} />)}
      </Box>

      {!loading && products && (
        <Pagination
          count={Math.ceil(products.length / 6)}
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
