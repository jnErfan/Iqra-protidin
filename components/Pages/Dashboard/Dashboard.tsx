"use client"
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Dashboard.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import ViewListIcon from "@mui/icons-material/ViewList";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BadgeIcon from "@mui/icons-material/Badge";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import useAuth from "../../Hooks/useAuth";
import Link from "next/link";

const Dashboard = ({ children }: any) => {
  const { logOutAll, users }: any = useAuth();

  const logOut = () => {
    logOutAll();
  };

  return (
    <Box className="dashboardContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            lg={2}
            sx={{ backgroundColor: "#101536", height: "110vh" }}
            className="dashboardBackgroundImage"
          >
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    p: "10px",
                    fontWeight: "bold",
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  <span>ইকরা প্রতিদিন</span> <br />
                  <span>
                    Admin{" "}
                    <span
                      style={{
                        color: "#F39C12",
                      }}
                    >
                      Panel
                    </span>
                  </span>
                </Typography>
              </Box>
              <Box sx={{ overflowY: "scroll", height: "90vh" }}>
                <Box
                  sx={{
                    mr: "10px",
                    mt: "20px",
                  }}
                >
                  <Link
                    href="dashboardHome"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <i className="fas fa-laptop-house"></i> Dashboard
                    </Button>
                  </Link>
                  <Link
                    href="addNews"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <UploadFileIcon /> Add News
                    </Button>
                  </Link>
                  <Link
                    href="addVideo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <VideoFileIcon /> Add Video
                    </Button>
                  </Link>
                  <Link
                    href="ePaper"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <NewspaperIcon /> E-Paper
                    </Button>
                  </Link>
                  <Link
                    href="manageEPaper"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <NewspaperIcon /> Manage Paper
                    </Button>
                  </Link>
                  <Link
                    href="news"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <DensitySmallIcon /> News
                    </Button>
                  </Link>
                  <Link
                    href="drafts"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <InsertDriveFileTwoToneIcon /> Drafts
                    </Button>
                  </Link>
                  <Link
                    href="categories"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <ViewListIcon /> Categories
                    </Button>
                  </Link>
                  <Link
                    href="locations"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <EditLocationAltIcon /> Locations
                    </Button>
                  </Link>
                  <Link
                    href="panelUsers"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <BadgeIcon /> Panel Users
                    </Button>
                  </Link>
                  <Link
                    href="ads"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <AttachMoneyIcon /> Ads
                    </Button>
                  </Link>
                  <Link
                    href="settings"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: "600",
                        color: "white",
                        my: "30px",
                        borderRadius: "0px",
                        width: "100%",
                        textAlign: "start",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        display: "block",
                        pl: "20px",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#dcecf53f",
                          color: "white",
                          borderLeft: "5px solid #0099FF",
                        },
                      }}
                    >
                      <i className="fas fa-tools"></i> Settings
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
            md={10}
            lg={10}
            sx={{ backgroundColor: "#ECF0F5" }}
          >
            <Box sx={{ mb: "65px" }}>
              <AppBar
                position="absolute"
                sx={{
                  backgroundColor: "#101536",
                  boxShadow: 0,
                  width: "85%",
                }}
                className="dashboardBackgroundImage2"
              >
                <Toolbar variant="dense">
                  <Box sx={{ flexGrow: 1 }}>
                    <a
                      target="_blank"
                      href="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      >
                        ইকরা
                        <span
                          style={{
                            color: "#0099FF",
                          }}
                        >
                          𒆜প্রতিদিন
                        </span>
                      </Button>
                    </a>
                  </Box>
                  <Box
                    onClick={logOut}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      {" "}
                      <AdminPanelSettingsIcon sx={{ fontSize: "40px" }} />
                    </Box>
                    <span>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {users?.userRole}
                      </span>
                      <ArrowRightIcon />
                      <small
                        style={{
                          fontWeight: "bold",
                          color: "#000",
                          backgroundColor: "#fff",
                          padding: "1px 20px",
                          borderRadius: "20px",
                        }}
                      >
                        {users?.email}
                      </small>
                    </span>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
            <Box className="border1" />
            <Box className="border2" />
            <Box className="dashboardOverflow">
              {children}
              {/* All Dashboard Item */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
