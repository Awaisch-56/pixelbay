import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  "nature",
  "flowers",
  "sky",
  "wallpaper",
  "office",
  "forest",
  "background",
  "sunset",
  "cat",
  "beach",
  "dog",
  "money",
  "iphone wallpaper",
];

function HeroSection({ onSearch, onCategorySelect }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Headline */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Stunning PNG Images & Free Downloads
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Download royalty-free PNG images in high quality
      </Typography>

      {/* Search bar */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          maxWidth: "700px",
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search PNG images..."
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: "50px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            px: 4,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Category chips */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => onCategorySelect(cat)}
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#eee",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default HeroSection;
