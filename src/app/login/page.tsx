import { Box, Button, Container, TextField, Typography } from "@mui/material";

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
            variant="h3"
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
          <Box
            component="form"
            sx={{
              width: "100%",
              p: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <TextField
              id="username"
              label="Username"
              name="username"
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              required
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              size="large"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
