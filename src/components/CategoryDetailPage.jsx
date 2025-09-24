import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Grid,
  CardContent,
} from "@mui/material";

function CategoryDetailPage() {
  const { id, category } = useParams(); 
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Images now contain { src, name }
  const { images } = location.state || { images: [] };

  const currentIndex = parseInt(id);
  const mainImage = images[currentIndex];

  return (
    <Box sx={{ p: 3 }}>
      {/* Main Selected Image */}
      <Card
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 4,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardMedia
          component="img"
          image={mainImage?.src}
          alt={mainImage?.name}
          sx={{ objectFit: "contain", maxHeight: 400 }}
        />
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {mainImage?.name || `Image ${currentIndex + 1}`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", borderRadius: 2 }}
            href={mainImage?.src}
            download
          >
            Download Image
          </Button>
        </Box>
      </Card>

      {/* Related Images */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
      >
        Related Images
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.map((img, index) =>
          index !== currentIndex ? (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  width: 280,
                  borderRadius: 2,
                  boxShadow: 2,
                  "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                }}
                onClick={() =>
                  navigate(`/category/${category}/${index}`, {
                    state: { images },
                    replace: true,
                  })
                }
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={img.src}
                  alt={img.name}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "center", fontWeight: 500 }}
                  >
                    {img.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ) : null
        )}
      </Grid>
    </Box>
  );
}

export default CategoryDetailPage;
