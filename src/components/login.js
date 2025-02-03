import React from "react";
import { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Google,
  Facebook,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Left Side - Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
            }}
          >
            <img
              src="/images/login.png"
              alt="login"
              style={{ height: "100vh", width: "90%" }}
            />
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h5" fontWeight={600}>
              {isSignUp ? "Get Started With AIHub" : "Sign In to AIHub"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isSignUp ? "Getting started is easy" : "Welcome back!"}
            </Typography>
          </Box>

          {/* Social Buttons */}
          {/* <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
          >
            <Button variant="outlined" startIcon={<Google />} fullWidth>
              Google
            </Button>
            <Button variant="outlined" startIcon={<Facebook />} fullWidth>
              Facebook
            </Button>
          </Box> */}

          {/* <Typography variant="body2" textAlign="center" sx={{ mb: 2 }}>
            Or continue with
          </Typography> */}

          {/* Form Fields */}
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid item xs={12}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} >
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField fullWidth label="Enter Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {isSignUp && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            )}
          </Grid>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            style={{ backgroundColor: "#B51B8D" }}
            onClick={()=> !isSignUp && router.push('/dashboard')}
          >
            {isSignUp ? "Register" : "Sign In"}
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            By continuing you indicate that you read and agreed to the{" "}
            <b>Terms of Use</b>
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 2, cursor: "pointer", color: "#007bff" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Have an account? Sign In"
              : "Don’t have an account? Sign Up"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
