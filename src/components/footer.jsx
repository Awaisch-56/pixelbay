import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const pages = [
    { label: "Home", path: "/" },
    { label: "Models", path: "/models" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleSendEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("userEmail", email);
    toast.success("Email saved! Redirecting...");
    navigate("/contact");
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          background: "#032358ff",
          color: "white",
          py: 4,
          px: { xs: 2, md: 6 },
          mt: 6,
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
            mb: 3,
          }}
        >
          {/* Links */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {pages.map((page) => (
                <Link
                  key={page.label}
                  to={page.path}
                  style={{
                    fontWeight: "bold",
                    color: "inherit",
                    textDecoration: "underline",
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Categories */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Models / Textures", "WallPapers", "Characters", "PNGs"].map(
                (item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { color: "#ffcc80" },
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Box>

          {/* Email Field */}
          <Box sx={{ width: { xs: "100%", sm: "60%", md: "40%" } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Send us your Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Your email address"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                bgcolor: "white",
                borderRadius: "50px",
                "& fieldset": { border: "none" },
                input: { color: "black", pl: 2 },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: 0 }}>
                    <Button
                      variant="contained"
                      onClick={handleSendEmail}
                      sx={{
                        bgcolor: "black",
                        color: "white",
                        borderRadius: "50px",
                        px: 4,
                        "&:hover": { bgcolor: "#333" },
                        textTransform: "none",
                        mr: "-12px",
                      }}
                    >
                      Send Email
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Bottom */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", borderTop: "1px solid #ffffff33", pt: 2 }}
        >
          © {new Date().getFullYear()} PixelBay. All rights reserved.
        </Typography>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
    </>
  );
}

export default Footer;
