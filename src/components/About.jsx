import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function AboutSection() {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f9f9f9" }}>
      <Grid 
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
       
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/about.jpg"
            alt="Gaming Character Preview"
            sx={{
              width: "100%",
              maxHeight: 450,
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          />
        </Grid>

        {/* Right Side - Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
          >
            About PixelBay
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            PixelBay is your go-to platform to explore and download high-quality PNG images. 
            From <strong>gaming characters</strong> and <strong>fantasy textures</strong> to 
            <strong>mobile game assets</strong> and <strong>digital illustrations</strong>, 
            we provide a wide range of resources for designers, developers, and creators. 
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Browse through multiple categories, search for your favorite PNGs, 
            and download them instantly for <strong>personal</strong> or 
            <strong>professional use</strong>. Whether you’re working on a 
            <em>game project</em>, <em>graphic design</em>, or <em>mobile app</em>, 
            PixelBay makes finding stunning PNG images effortless.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
