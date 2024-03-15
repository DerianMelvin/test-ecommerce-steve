import { ProductsType } from "@/app/(shop)/products/page";
import { ListItem, Box, Typography, Button } from "@mui/material";
import { Image } from "mui-image";
import { useState } from "react";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

type ListItemProductType = {
  product: ProductsType;
};

export default function ListItemProduct({ product }: ListItemProductType) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    setButtonDisabled(true);
    console.log(product.id, quantity);
  };

  const removeFromCart = () => {
    setButtonDisabled(false);
    console.log(product.id, quantity);
  };

  return (
    <ListItem
      key={product.id}
      divider
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        p: "0.8rem",
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
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={70}
            height={70}
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
          <Typography variant="subtitle1">{product.title}</Typography>
          <NumberInput
            min={1}
            slotProps={{
              incrementButton: {
                children: "▴",
              },
              decrementButton: {
                children: "▾",
              },
            }}
            onChange={(event, newValue) => newValue && setQuantity(newValue)}
          />
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
          size="small"
          disabled={buttonDisabled}
          onClick={() => addToCart()}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          size="small"
          disabled={!buttonDisabled}
          color="error"
          onClick={() => removeFromCart()}
        >
          Remove From Cart
        </Button>
      </Box>
    </ListItem>
  );
}
