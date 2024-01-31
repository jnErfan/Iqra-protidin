"use client"
import { Box } from "@mui/material";
import React from "react";
import useAuth from "../Hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";

const DashboardRoute = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const { users, isLoading }: any = useAuth();

  // Dashboard Redirect Admin Login To Dashboard

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: "99999",
          backgroundColor: "#a6e8fc",
          overflow: "hidden",
        }}
      >
        <img
          width="40%"
          style={{
            filter:
              "drop-shadow(1px 1px 0 #fff) drop-shadow(-1px 1px 0 #ffffff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
          }}
          src="https://i.ibb.co/M5BKvzB/unnamed.gif"
          alt=""
        />
      </Box>
    );
  }

  return users?.userRole ? (
    router.replace("/admin")
  ) : (
    children
  );
  // return children
};

export default DashboardRoute;
