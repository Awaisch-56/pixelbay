import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const categories = [
  "GamingWallpaper",
  "Characters",
  "Textures",
  "Icons",
  "PNG",
];

function HeroSection({ onSearch, onCategorySelect }) {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // Common filter function
  const filterCategories = (keyword) => {
    if (!keyword.trim()) {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((cat) =>
        cat.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
    if (onSearch) onSearch(keyword); // send back to parent if needed
  };

  // Auto-filter on typing
  useEffect(() => {
    filterCategories(searchText);
  }, [searchText]);

  // Manual search (button or Enter key)
  const handleSearch = () => {
    filterCategories(searchText);
  };

  return (
    <Box
      sx={{
        height: isSmall ? "100%" : "100vh",
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
        py: 4,
        backdropFilter: "brightness(0.7)",
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
          position: "relative",
          width: isSmall ? "100%" : "600px",
        }}
      >
        <TextField
          placeholder="Search PNG images..."
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // still works on Enter
          sx={{
            bgcolor: "white",
            borderRadius: "50px",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              pr: isSmall ? "90px" : "160px", // space for button
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Absolute button inside */}
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50px",
            py: 2,
            px: 3,
            minWidth: isSmall ? "80px" : "150px",
            textTransform: "none",
          }}
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
          alignItems: "center",
          maxWidth: "600px",
          mt: 4,
          rowGap: 2, 
        }}
      >
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => onCategorySelect && onCategorySelect(cat)}
              sx={{
                bgcolor: "rgba(255,255,255,0.9)",
                color: "#333",
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#eee",
                },
              }}
            />
          ))
        ) : (
          <Typography color="white">No results found</Typography>
        )}
      </Stack>

    </Box>
  );
}

export default HeroSection;
