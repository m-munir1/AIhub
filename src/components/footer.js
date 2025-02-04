import React from "react";
import { Box, Typography, Link, IconButton, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        textAlign: "center",
        py: 4,
      }}
    >
      {/* Top Section */}
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src="/images/Logo.png"
            alt="JAVAT 365 Logo"
            style={{ height: 40, marginBottom: 8 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: 3,
            mb: 2,
          }}
        >
          {["Home", "Features", "Pricing", "Blog", "FAQ", "Contact Us", "Download"].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                display: "block",
                textAlign: "center",
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#444",
          width: "80%",
          mx: "auto",
          my: 2,
        }}
      />

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1100,
          mx: "auto",
          textAlign: "center",
          gap: isMobile ? 2 : 0,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2 }}>
          <Typography variant="body2">© 2023 APEX Group All rights reserved</Typography>
          <Link href="#" sx={{ color: "#fff", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <Link href="#" sx={{ color: "#fff", textDecoration: "none" }}>
            Terms of Service
          </Link>
        </Box>
        <Box>
          <IconButton sx={{ color: "#fff" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
