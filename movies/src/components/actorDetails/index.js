import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const ActorDetails = ({ actors }) => { 
  
  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`Popularity rating: ${actors.popularity}`}
        />
        
        <Chip
         label={`Popularity rating: ${actors.biography}`}
        />
       
        </Paper>
        
     
      </>
  );
};
export default ActorDetails ;