"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema, object, string } from "yup";

type LoginInput = {
  username: string;
  password: string;
};

// Yup validation schema
const schema: ObjectSchema<LoginInput> = object({
  username: string().required("username required"),
  password: string()
    .min(8, "password length min. 8 characters")
    .required("password required"),
});

export default function LoginForm() {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginInput) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        p: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {/* Username */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="username"
          label="Username"
          fullWidth
          {...register("username")}
        />
        <Typography
          component="span"
          height="24px"
          color="red"
          fontSize="0.9rem"
        >
          {errors.username?.message?.toString()}
        </Typography>
      </Box>

      {/* Password */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          {...register("password")}
        />
        <Typography
          component="span"
          height="24px"
          color="red"
          fontSize="0.9rem"
        >
          {errors.password?.message?.toString()}
        </Typography>
      </Box>

      {/* Login Button */}
      <Button variant="contained" type="submit" fullWidth size="large">
        Login
      </Button>
    </Box>
  );
}
