'use client'
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LatestNews from "../HomeContainer/LatestNews/LatestNews";
import National from "../HomeContainer/National/National";
import Politics from "../HomeContainer/Politics/Politics";
import Education from "../HomeContainer/Education/Education";
import Entertainment from "../HomeContainer/Entertainment/Entertainment";
import Accident from "../HomeContainer/Accident/Accident";
import Agriculture from "../HomeContainer/Agriculture/AgricultureHome";
import SidePanel from "../HomeContainer/SidePanel/SidePanel";
import AllNewsMain from "../HomeContainer/AllNewsMain/AllNewsMain";
import Others from "../HomeContainer/Others/Others";
import Sports from "../HomeContainer/Sports/Sports";
import AllOverCountry from "../HomeContainer/AllOverCountry/AllOverCountry";
import IslamicLife from "../HomeContainer/IslamicLife/IslamicLife";
import HealthAndMedical from "../HomeContainer/HealthAndMedical/HealthAndMedical";

const Home = () => {
  return (
    <Box>
      <LatestNews />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <National />
            <Politics />
            <Education />
            <Entertainment />
            <Accident />
            <Agriculture />
            <HealthAndMedical />
            <IslamicLife />
            <AllOverCountry />
            <Sports />
            <Others />
            <AllNewsMain />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <SidePanel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
