import React, { useState } from "react";
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

const categories = ["GamingWallpaper", "Characters", "Textures", "Icons", "PNG"];

function HeroSection({ onSearch, onCategorySelect }) {
  const [searchText, setSearchText] = useState("");

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Trigger parent search
  const handleSearch = () => {
    if (onSearch) onSearch(searchText);
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
         onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
          sx={{
            bgcolor: "white",
            borderRadius: "50px",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              pr: isSmall ? "90px" : "160px",
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
        {categories.map((cat) => (
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
        ))}
      </Stack>
    </Box>
  );
}

export default HeroSection;
