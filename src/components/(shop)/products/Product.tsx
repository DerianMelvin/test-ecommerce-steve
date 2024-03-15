import { ProductsType } from "@/app/(shop)/products/page";
import { Box, Typography, Button } from "@mui/material";
import { Image } from "mui-image";

export default function Product({ product }: { product: ProductsType }) {
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
        borderRadius: "1rem",
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
        <Button variant="contained">Add to Cart</Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Box>
    </Box>
  );
}
