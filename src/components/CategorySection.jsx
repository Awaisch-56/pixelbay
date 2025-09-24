import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CategorySection({ category, images }) {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        {category}
      </Typography>

      {(!images || images.length === 0) ? (
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "center", mt: 4, fontWeight: 600 }}
        >
          🚫 No images found
        </Typography>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {images.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  width: '300px',
                  margin: '0 auto',
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                }}
                onClick={() => {
                  navigate(`/category/${category}/${index}`, {
                    state: { images, selectedIndex: index },
                  });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={img.src}
                  alt={img.name}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, fontWeight: 500, textAlign: "center" }}
                  >
                    {img.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default CategorySection;
