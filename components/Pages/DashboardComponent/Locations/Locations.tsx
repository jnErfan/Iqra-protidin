"use client"
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Locations = () => {
  const { register, handleSubmit, reset } = useForm();

  // Send locations Information
  const onSubmit = (data: any) => {
    axios
      .post("https://server.eiqraprotidin.com/locationAdd", data)
      .then((result) => {
        if (result.data.insertedId) {
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "Location Add Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            reset();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Location Add Error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  // Get locations
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/locations")
      .then((result) => result.json())
      .then((data) => setLocation(data));
  }, [location]);

  // Delete Single locations
  const deleteLocation = (id:string) => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "You Won't Be Delete This !",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result:any) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        setTimeout(() => {
          axios
            .delete(`https://server.eiqraprotidin.com/deleteLocation/${id}`)
            .then((result) => {
              if (result.data.deletedCount === 1) {
                setIsLoading(false);
                Swal.fire(
                  "Deleted!",
                  "This Location Has Been Deleted.",
                  "success"
                );
              } else {
                setIsLoading(false);
              }
            });
        }, 3000);
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
      <Box
        sx={{
          mt: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            pb: "90px",
            pt: "50px",
            backgroundImage:
              "url(https://i.ibb.co/hfxmNGW/Vector-Text-Banner-Transparent-Background.png)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            textShadow: "1px 1px 5px #000",
            fontSize: "30px",
          }}
        >
          <span
            style={{
              filter:
                "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
            }}
          >
            Locations
          </span>
        </Typography>
      </Box>

      {/* Locations */}
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mb: "20px" }}>
            {" "}
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "30px",
                borderRadius: "10px",
                mb: "20px",
              }}
            >
              <Box sx={{ mb: "40px" }}>
                <h6 style={{ fontWeight: "700" }}>Locations Add</h6>
                <hr />
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Write Locations Name"
                  type="text"
                  fullWidth
                  required
                  {...register("locationName")}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "initial",
                    px: "50px",
                    py: "10px",
                    fontWeight: "bold",
                    mt: "20px",
                  }}
                >
                  Add
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "30px",
                borderRadius: "10px",
                mb: "150px",
              }}
            >
              <Box>
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                            Id
                          </TableCell>
                          <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                            Locations
                          </TableCell>
                          <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                            Options
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {location.map(({ _id, locationName }: any) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={_id}
                          >
                            <TableCell
                              sx={{ borderRight: "1px solid #ECF0F5" }}
                            >
                              <h5 style={{ fontWeight: "bold" }}>
                                {_id.slice(0, 4)}
                              </h5>
                            </TableCell>

                            <TableCell
                              sx={{ borderRight: "1px solid #ECF0F5" }}
                            >
                              <h6>
                                <small
                                  style={{
                                    backgroundColor: "#09754B",
                                    fontWeight: "bold",
                                    padding: "5px 10px",
                                    color: "#fff",
                                  }}
                                >
                                  {locationName}
                                </small>
                              </h6>
                            </TableCell>
                            <TableCell
                              sx={{ borderRight: "1px solid #ECF0F5" }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                <Box>
                                  <Button
                                    onClick={() => deleteLocation(_id)}
                                    sx={{
                                      py: "1px",
                                      my: "5px",
                                      textTransform: "initial",
                                      backgroundColor: "red",
                                    }}
                                    variant="contained"
                                  >
                                    Delete
                                  </Button>
                                </Box>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Locations;
