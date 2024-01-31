'use client'

import { AppBar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Clock from "react-live-clock";
import Marquee from "../../../Marquee";

const Title = () => {
  const navigate = useRouter();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/breakingTitleNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  const [scrollChange, setScrollChange] = useState(false);

  //  On Scroll Style Change Handler
  const onScrollHeader = () => {
    window.scrollY >= 5 ? setScrollChange(true) : setScrollChange(false);
  };
  window.addEventListener("scroll", onScrollHeader);
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={
          scrollChange
            ? {
              boxShadow: "1px 1px 10px #DD3333",
              borderTop: "2px solid #DD3333",
              backgroundImage:
                "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
              top: "auto",
              bottom: -5,
            }
            : {
              boxShadow: "1px 1px 10px #DD3333",
              borderTop: "2px solid #DD3333",
              backgroundImage:
                "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
              top: "auto",
              bottom: -5,
            }
        }
        className={
          scrollChange
            ? "animate__animated animate__fadeInUp"
            : "animate__animated animate__bounceInUp"
        }
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",

                color: "#fff",
                fontWeight: "bold",
              }}
            >
              শিরোনাম :
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sm={7}
            md={7}
            lg={10}
            sx={{
              display: "flex",
              background: "#2f353a",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              {news.length &&
                <Marquee
                >
                  {news.map(({ _id, newsTitle }) =>
                    <Fragment
                      key={_id}
                    >
                      <a
                        href={`/news/${_id}`}
                        style={{ textDecoration: 'none', color: 'white' }}
                        target={"_blank"}
                      >
                        {newsTitle}
                        &nbsp;

                        <img
                          src="https://i.ibb.co/wzBQbjk/favicon.png"
                          alt=""
                          width="20px"
                          height="20px"
                        // style={{ position: "absolute" }}
                        />
                      </a>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                    </Fragment>)}
                </Marquee>
              }
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography
              variant="body2"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                py: "9px",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <Clock format={"h:mm:ss"} ticking={true} />
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box >
  );
};

export default Title;
