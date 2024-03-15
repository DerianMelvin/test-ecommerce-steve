import { ProductsType } from "@/app/(shop)/products/page";
import {
  ShopNotificationContextType,
  shopNotificationContext,
} from "@/components/layout/ShopNotificationContext";
import { Box, Typography, Button } from "@mui/material";
import axios, { AxiosError } from "axios";
import { Image } from "mui-image";
import { useContext, useState } from "react";

type ProductType = {
  product: ProductsType;
  filterDeletedProducts: (id: number) => void;
};

export default function Product({
  product,
  filterDeletedProducts,
}: ProductType) {
  const { open, setOpen } = useContext(
    shopNotificationContext
  ) as ShopNotificationContextType;

  // disable / enable button when deleting or add to cart
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const deleteProduct = async () => {
    try {
      setButtonDisabled(true);

      const response = await axios.delete(
        `https://fakestoreapi.com/products/${product.id}`
      );

      filterDeletedProducts(product.id);

      // display product deleted notification
      setOpen((prev) => ({ ...prev, productDeletedNotification: true }));

      setButtonDisabled(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AxiosError("Failed to delete product");
      } else {
        console.log(error);
      }

      setButtonDisabled(false);
    }
  };

  return (
    <Box
      key={product.id}
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        p: "0.8rem",
        border: "1px solid black",
        borderRadius: "0.5rem",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "80%",
          display: "flex",
          gap: "1rem",
        }}
      >
        {/* Image */}
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: "90px",
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={90}
            height={90}
            fit="contain"
            showLoading
          />
        </Box>

        {/* Product Info */}
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h6">{product.title}</Typography>
          <Typography
            variant="button"
            sx={{
              width: "fit-content",
              p: "0.4rem",
              px: "0.9rem",
              borderRadius: "5rem",
              color: "white",
              bgcolor: "lightseagreen",
            }}
          >
            {product.category}
          </Typography>
        </Box>
      </Box>

      {/* Actions */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Button
          variant="contained"
          disabled={buttonDisabled}
          onClick={() => deleteProduct()}
          color="error"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
