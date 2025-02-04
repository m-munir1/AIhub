import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{backgroundColor:'#F9F7F2'}}>
    <Box sx={{paddingTop:'10px',paddingX:'40px'}}>
      <Box
        sx={{
          backgroundImage: "url('/images/HeroImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          height: { xs: "90vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: { xs: "20px", md: "50px" }
        }}
      >
        {/* Text Content */}
        <Box sx={{ background:'transparent'}}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3,background:'transparent' }} className="heroHeading">
            Connect, Collaborate, <br /> and Grow
            <p style={{background:'transparent',fontWeight:'400'}}>with JAVAT 365</p>
          </Typography>
          <Typography variant="h6" sx={{ mb: 4,background:'transparent' }} className="heroText">
            Build lasting relationships - all the tools you need,
            <br /> all in one place!
          </Typography>
          <button
            style={{
              backgroundColor: "#d91d92",
              color: "#fff",
              borderRadius: "50px",
              padding: "12px 24px",
              fontSize: "18px",
              border:'none'
            }}
          >
            Get Started for Free
          </button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default HeroSection;
