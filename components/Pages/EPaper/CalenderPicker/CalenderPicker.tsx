"use client"

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalenderPicker = ({ date, setDate }: any) => {


  
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          mt: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            backgroundColor: "#008264",
            color: "#fff",
            px: "90px",
            py: "8px",
            mb: "10px",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            whiteSpace: "nowrap",
          }}
        >
          পুরোনো সংখ্যা
        </Typography>
      </Box>    
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          transition: "500ms",
          "&:hover": {
            backgroundColor: "#d6fff5",
            cursor: "pointer",
            transform: "scale(1.01)",
            transition: "500ms",
          },
        }}
      >
       
   
      </Box> 

        {/* <Box sx={{
          mb:"70px",
          background:"#276581",
          display:"flex",
          justifyContent:"center",
          borderRadius:"10px"
        }}>
     <Box>
     <TuiDatePicker
      date={date}
      onChange={(newDate) => setDate(newDate)}
    inputWidth={200}
    fontSize={16}
/>
     </Box>
        </Box> */}
          <Box
        sx={{
          display: "flex",
          mt:"10px",
          mb:"70px",
          justifyContent: "center",
          borderRadius: "5px",
          transition: "500ms",
          "&:hover": {
            backgroundColor: "#d6fff5",
            cursor: "pointer",
            transform: "scale(1.01)",
            transition: "500ms",
          },
        }}
      >
         <Calendar  value={date}
      onChange={(newDate) => setDate(newDate)} />
      </Box>

    </Box>
  );
};

export default CalenderPicker;
