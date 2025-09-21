import React from "react";
import { Container, Typography, Box } from "@mui/material";

function AboutSection() {
  return (
    <Container sx={{ py: 6 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          About PNG Gallery
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto" }}>
          PNG Gallery is a free platform to explore and download stunning PNG images.
          Browse through categories, search your favorite graphics, and download
          them instantly for personal or professional use.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutSection;
