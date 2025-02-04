import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Home", "Features", "Pricing", "Blog", "Contact Us"];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F9F7F2", boxShadow: "none", padding: "10px 0" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#000" }}
        >
          JAVAT 365
        </Typography>
        
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map((item, index) => (
            <Typography
              key={index}
              sx={{ color: "#000", cursor: "pointer", fontSize: "16px", fontWeight: "500" }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        
        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#000" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d91d92",
            color: "#fff",
            borderRadius: "20px",
            padding: "5px 20px",
            display: { xs: "none", md: "block" }
          }}
          onClick={()=> router.push('/login')}
        >
          Login
        </Button>
      </Toolbar>
      
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
