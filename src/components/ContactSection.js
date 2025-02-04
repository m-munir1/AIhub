import React from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 3,
        backgroundColor: "#F9F7F2",
      }}
    >
      {/* Left Section - Contact Info */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 400,
          pr: isMobile ? 0 : 4,
          mb: isMobile ? 4 : 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get in touch with us
        </Typography>
        <Typography sx={{ color: "gray", mb: 3 }}>
          Give us a call or drop by anytime, we endeavor to answer all enquiries
          within 24 hours on business days.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", mb: 2 }}>
          <LocationOnIcon sx={{ color: "#333", mr: 1 }} />
          <Typography>
            2002 Summit Blvd., Suite 300, Atlanta, Georgia, 30319
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", mb: 2 }}>
          <PhoneIcon sx={{ color: "#333", mr: 1 }} />
          <Typography>+1 770-280-1299</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start" }}>
          <EmailIcon sx={{ color: "#333", mr: 1 }} />
          <Typography>info@javat365.com</Typography>
        </Box>
      </Box>

      {/* Right Section - Contact Form */}
      <Paper
        sx={{
          flex: 1,
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: "100%",
        }}
      >
        <TextField fullWidth label="Your Name" variant="standard" sx={{ mb: 2 }} />
        <TextField fullWidth label="Email Address *" variant="standard" sx={{ mb: 2 }} />
        <TextField fullWidth label="Subject" variant="standard" sx={{ mb: 2 }} />
        <TextField fullWidth label="Message" variant="standard" multiline rows={4} sx={{ mb: 3 }} />

        <button
          style={{
            backgroundColor: "#d91d92",
            color: "#fff",
            borderRadius: "50px",
            padding: "12px 24px",
            fontSize: "18px",
            border: "none",
            width: "100%",
          }}
        >
          Send message
        </button>
      </Paper>
    </Box>
  );
};

export default ContactSection;
