"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema, object, string } from "yup";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  NotificationContextType,
  authNotificationContext,
} from "@/components/layout/AuthNotificationContext";

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
  // for displaying successful auth notification
  const { open, setOpen } = useContext(
    authNotificationContext
  ) as NotificationContextType;

  // disable / enable button when submiting
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const router = useRouter();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      setButtonDisabled(true);

      // remove errors if exist
      clearErrors("root.clientError");

      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        data
      );

      // store token to session storage
      sessionStorage.setItem("token", response.data.token);

      // navigate user to products page
      router.replace("/products");

      // display successful login notification
      setOpen((prev) => ({ ...prev, loginNotification: true }));
    } catch (error) {
      if (error instanceof AxiosError) {
        setError("root.clientError", {
          message: error.response?.data,
        });
      } else {
        console.log(error);
      }

      setButtonDisabled(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        p: "2rem",
        pb: "1rem",
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
      <Button
        variant="contained"
        type="submit"
        fullWidth
        size="large"
        disabled={buttonDisabled}
      >
        Login
      </Button>

      {/* Error Message */}
      <Typography
        component="span"
        height="24px"
        color="red"
        fontSize="0.9rem"
        textAlign="center"
      >
        {errors.root?.clientError?.message}
      </Typography>
    </Box>
  );
}
