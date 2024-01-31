"use client"
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import useAuth from "../Hooks/useAuth";
import { useRouter } from "next/navigation";

const AdminRoute = ({ children }: any) => {
  const { isLoading, users }: any = useAuth();
  const router = useRouter()
  // Loading Default Time
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
  console.log('users', users);

  // Admin Panel Dashboard Admin Checker
  return <Fragment>
    {
      users?.userRole === "Admin" || users?.userRole === "Moderator" ? (
        children
      ) : (
        (typeof users == "string" && users == "") ? <h1>Loading</h1> : router.replace("/adminLogin")
      )
    }
  </Fragment>
};

export default AdminRoute;
