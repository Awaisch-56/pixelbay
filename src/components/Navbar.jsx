import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Models", path: "/models" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          px: { xs: 2, md: 6 },
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo / Title */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              letterSpacing: 1.2,
              "&:hover": { color: "#ffcc80" },
            }}
          >
            PixelBay
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              ml: "auto",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={{
                  color:
                    location.pathname === page.path ? "#ffcc80" : "white",
                  fontWeight: 600,
                  px: 2,
                  textTransform: "none",
                  borderBottom:
                    location.pathname === page.path
                      ? "2px solid #ffcc80"
                      : "2px solid transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffcc80",
                    borderBottom: "2px solid #ffcc80",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(180deg, #1e3c72, #2a5298)",
            color: "white",
          },
        }}
      >
        <Box sx={{ width: 250, py: 2 }}>
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.label}
                component={Link}
                to={page.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary={page.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 600,
                      color:
                        location.pathname === page.path ? "#ffcc80" : "white",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
