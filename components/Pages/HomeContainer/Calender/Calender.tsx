"use client"
import { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Calender = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundImage:
              "linear-gradient(to top, #008264a2, #008264a2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            color: "#fff",
            mb: "10px",
            fontWeight: "bold",
            py: "5px",
          }}
        >
          আজকের তারিখ
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb:'10px',
          justifyContent: "center",
          backgroundColor: "#d6fff5",
          transition: "500ms",
          "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: "transparent",
            transition: "500ms",
          },
        }}
      >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    
          <DateCalendar defaultValue={dayjs(new Date())} readOnly />

    </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Calender;
