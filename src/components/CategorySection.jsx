import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function CategorySection({ category, images }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "primary.main" }}
      >
        {category}
      </Typography>

      {/* Grid with 4 cards per row on lg, responsive on smaller */}
      <Grid container spacing={2} justifyContent="center">
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={img}
                alt={`${category}-${index}`}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 500, textAlign: "center" }}
                >
                  {category} Image {index + 1}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", borderRadius: 2 }}
                  href={img}
                  download
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CategorySection;
