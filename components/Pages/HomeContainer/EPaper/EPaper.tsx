"use client"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const EPaper = () => {
  
  const [news, setNews] = useState([] as any);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);   

  return (
    <Box sx={{ mt: "20px" }} id="ePaper">
      <a
        href="/e-paper"
        target="_blank"
        rel="noopener"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <Box
          sx={{
            backgroundImage:
              "url('https://i.ibb.co/P91hh5K/news-icon-12-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "35px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to right, #478ee0b9, #478FE0)",
              textAlign: "center",
              py: "3px",
              mb: "10px",
            }}
          >
          <span>  <img
                        width="20px"
                        src="https://i.ibb.co/P91hh5K/news-icon-12-1.png"
                        alt=""
                      /></span>  ই-পেপার
          </Typography>
        </Box>
        <Box sx={{
          margin: "10px"
        }}>
          <img
            width="100%"
            src={news?.[0]?.image1}
            alt=""
          />
        </Box>
      </a>
    </Box>
  );
};

export default EPaper;
