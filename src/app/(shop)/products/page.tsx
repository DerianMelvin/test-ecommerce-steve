"use client";
import { Box, Button, ButtonGroup, Pagination } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Product from "@/components/(shop)/products/Product";
import Loading from "@/components/(shop)/Loading";

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

  const filterDeletedProducts = (id: number) => {
    const filtered =
      products && products.filter((product) => product.id !== id);
    setProducts(filtered);
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
      {/* Display Categories */}
      <ButtonGroup variant="outlined" fullWidth>
        {categoryList.map((ctg) => (
          <Button key={ctg} onClick={() => setCategory(ctg)}>
            {ctg}
          </Button>
        ))}
      </ButtonGroup>

      {/* Product List */}
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
        {loading && <Loading />}

        {!loading &&
          products &&
          products
            .slice((page - 1) * 6, page * 6)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                filterDeletedProducts={filterDeletedProducts}
              />
            ))}
      </Box>

      {/* Pagination */}
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
