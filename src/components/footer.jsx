import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        color: "white",
        py: 3,
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} PNG Gallery. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        <Link href="/about" underline="hover" color="inherit">
          About
        </Link>
        <Link href="/contact" underline="hover" color="inherit">
          Contact
        </Link>
        <Link href="/privacy" underline="hover" color="inherit">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
