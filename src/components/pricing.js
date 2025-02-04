import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent,Container } from "@mui/material";

const PricingSection = () => {
  return (
    <Box sx={{backgroundColor:'#F9F7F2'}}>
    <Container>
    <Box sx={{ textAlign: "center", py: 6, }} className="PricingCard">
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Simple and Transparent Pricing
      </Typography>

      {/* Start for Free Button */}
      <button
        sx={{
          backgroundColor: "#fff",
          color: "#B51B8D",
          borderRadius: "20px",
          padding: "10px 24px",
          fontSize: "16px",
          mb: 4,
          border:"1px solid #B51B8D"
        }}
      >
        Start for Free
      </button>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center" className="mt-4">
        {/* Free Plan */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderLeft: "4px solid #B51B8D",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography color="#B51B8D" fontWeight="bold">
                Subscriber Account
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                $0 <Typography component="span">USD</Typography>
              </Typography>
              <Typography>Absolutely Free! Always!</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Paid Plan */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderLeft: "4px solid #B51B8D",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography color="#B51B8D" fontWeight="bold">
                Team Account
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                $3 <Typography component="span">USD</Typography>
              </Typography>
              <Typography>per user/month</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderLeft: "4px solid #B51B8D",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography color="#B51B8D" fontWeight="bold">
                Team Account
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                $3 <Typography component="span">USD</Typography>
              </Typography>
              <Typography>per user/month</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
    </Box>
    </Container>
    </Box>
  );
};

export default PricingSection;
