"use client"
import { Button, Typography, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useAuth from "../../../Hooks/useAuth";

const NewsEdit = () => {
  const params = useParams();
  const navigate = useRouter();
  const [updateDetails, setUpdateDetails] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUsers] = useState({} as any);
  const { users }: any = useAuth();

  // Update Info
  useEffect(() => {
    fetch(`https://server.eiqraprotidin.com/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUpdateDetails(data?.[0]));
  }, []);
  const { _id, image, newsTitle, newsContent } = updateDetails;

  const [category, setCategory] = useState("");
  const handleChange = (event: any) => {
    setCategory(event.target.value);
  };

  const [location, setLocation] = useState("");
  const handleChangeLocation = (event: any) => {
    setLocation(event.target.value);
  };
  const { register, handleSubmit } = useForm();

  const [sliderChecked, setSliderChecked] = useState(true);
  const handleChangeSlider = (event: any) => {
    setSliderChecked(event.target.checked);
  };

  const [featuredChecked, setFeaturedChecked] = useState(false);

  const handleChangeFeatured = (event: any) => {
    setFeaturedChecked(event.target.checked);
  };
  const [breakingChecked, setBreakingChecked] = useState(false);

  const handleChangeBreaking = (event: any) => {
    setBreakingChecked(event.target.checked);
  };

  const [importantNewsChecked, setImportantNewsChecked] = useState(false);

  const handleChangeImportantNews = (event: any) => {
    setImportantNewsChecked(event.target.checked);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, [categories]);

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/locations")
      .then((result) => result.json())
      .then((data) => setLocations(data));
  }, [locations]);

  useEffect(() => {
    fetch(`https://server.eiqraprotidin.com/users/${users.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data?.[0]));
  }, [users]);

  // Send News Information
  const onSubmit = (data: any) => {
    if (data.newsTitle === "" || data.newsContent === "" || data.image === "") {
      Swal.fire({
        icon: "error",
        title: "Click Text Field",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    const date = new Date().toDateString();
    const time = new Date().toTimeString().slice(0, 8);

    data.newsCategory = category;
    data.newsLocation = location;
    data.newsShowFeatured = featuredChecked;
    data.newsShowBreaking = breakingChecked;
    data.newsShowSlider = sliderChecked;
    data.newsShowImportantNews = importantNewsChecked;
    data.authorEmail = user.email;
    data.date = date;
    data.time = time;

    axios
      .put(`https://server.eiqraprotidin.com/updateNews/${_id}`, data)
      .then((result) => {
        setIsLoading(true);
        if (result.data.modifiedCount === 1) {
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "News Update Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            setIsLoading(false);
            navigate.push("/admin/news");
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "News Update Error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <Box>
      {isLoading && (
        <Box>
          <img
            style={{
              padding: "100px",
              display: "flex",
              top: "-35%",
              bottom: "0%",
              left: "0%",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              zIndex: 99999,
              background: "#fff",
              width: "100%",
            }}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}
      {/* Title */}
      <Box>
        <Box sx={{ mt: "15px", ml: "10px" }}>
          <img
            width="150px"
            src="https://i.ibb.co/LJg2xFn/UPDATED-LOGO-ai.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              display: "inline-block",
              pb: "90px",
              pt: "85px",
              backgroundImage:
                "url(https://i.ibb.co/hfxmNGW/Vector-Text-Banner-Transparent-Background.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              color: "#fff",
              textShadow: "1px 1px 5px #000",
              fontSize: "35px",
            }}
          >
            <span
              style={{
                filter:
                  "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
              }}
            >
              News Update
            </span>
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Update News Id: <span style={{ color: "#0099FF" }}>{_id}</span>
        </Typography>
      </Box>

      {/* Update Ui */}
      <Box sx={{ mt: "20px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: "30px",
                  borderRadius: "10px",
                  mb: "200px",
                }}
              >
                <Box sx={{ mb: "40px" }}>
                  <h6 style={{ fontWeight: "700" }}>News Details</h6>
                  <hr />
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <h6>Title</h6>
                  <input
                    {...register("newsTitle")}
                    placeholder="Enter News Title"
                    required
                    defaultValue={newsTitle}
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #a5a2a2",
                    }}
                  />
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <h6>Category</h6>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <InputLabel id="demo-select-small">Category</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={category}
                      label="Category"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {categories.map(({ _id, categoryName }) => (
                        <MenuItem value={categoryName} key={_id}>
                          <span>{categoryName}</span>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <h6>News Location</h6>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <InputLabel id="demo-select-small2">
                      News Location
                    </InputLabel>
                    <Select
                      labelId="demo-select-small2"
                      id="demo-select-small2"
                      value={location}
                      label="News Location"
                      onChange={handleChangeLocation}
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {locations.map(({ _id, locationName }) => (
                        <MenuItem value={locationName} key={_id}>
                          <span>{locationName}</span>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ my: "30px" }}>
                  <FormControlLabel
                    sx={{ display: "block", my: "10px" }}
                    control={
                      <Checkbox
                        checked={sliderChecked}
                        onChange={handleChangeSlider}
                      />
                    }
                    label="Add to Latest News"
                  />
                  <FormControlLabel
                    sx={{ display: "block", my: "10px" }}
                    control={
                      <Checkbox
                        checked={featuredChecked}
                        onChange={handleChangeFeatured}
                      />
                    }
                    label="Add to Featured News"
                  />
                  <FormControlLabel
                    sx={{ display: "block", my: "10px" }}
                    control={
                      <Checkbox
                        checked={breakingChecked}
                        onChange={handleChangeBreaking}
                      />
                    }
                    label="Add to Breaking Title"
                  />

                  <FormControlLabel
                    sx={{ display: "block", my: "10px" }}
                    control={
                      <Checkbox
                        checked={importantNewsChecked}
                        onChange={handleChangeImportantNews}
                      />
                    }
                    label="Add to Important News"
                  />
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <h6>Content</h6>

                  <textarea
                    {...register("newsContent")}
                    placeholder="News Details"
                    style={{ width: "100%", height: "300px" }}
                    required
                    defaultValue={newsContent}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      mt: "20px",
                      backgroundColor: "red",
                      display: "inline-block",
                      borderRadius: "3px",
                      px: "10px",
                      py: "5px",
                      color: "#fff",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <a
                      href="https://bsbk.portal.gov.bd/apps/bangla-converter/index.html"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontWeight: "bold",
                        fontSize: "11px",
                        textDecoration: "none",
                        color: "#fff",
                        display: "inline",
                      }}
                    >
                      ইউনিকোড কনভার্টার
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: "30px",
                  borderRadius: "10px",
                  mb: "20px",
                }}
              >
                <Box sx={{ mb: "40px" }}>
                  <h6 style={{ fontWeight: "700" }}>Image</h6>
                  <hr />
                </Box>
                <h6>Main Image</h6>
                <input
                  {...register("image")}
                  placeholder="Enter Image Url"
                  required
                  defaultValue={image}
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "40px",
                    border: "1px solid #a5a2a2",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: "20px",
                      backgroundColor: "#23A8E0",
                      display: "inline-block",
                      borderRadius: "3px",
                      px: "10px",
                      py: "5px",
                      color: "#fff",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <a
                      href="https://imgbb.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        textDecoration: "none",
                        color: "#fff",
                        display: "inline",
                      }}
                    >
                      Image Host
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: "30px",
                  borderRadius: "10px",
                }}
              >
                <Box sx={{ mb: "40px" }}>
                  <h6 style={{ fontWeight: "700" }}>Publish News</h6>
                  <hr />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "initial", width: "100%" }}
                  >
                    Update News
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default NewsEdit;
