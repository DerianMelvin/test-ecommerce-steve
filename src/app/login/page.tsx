import { Box, Container, Typography } from "@mui/material";
import LoginForm from "@/components/login/LoginForm";

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box
        component="main"
        sx={{
          height: "100vh",
          minHeight: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
            borderRadius: "1rem",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              width: "100%",
              px: "2rem",
              py: "1.2rem",
              borderBottom: "2px solid black",
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <LoginForm />
        </Box>
      </Box>
    </Container>
  );
}
