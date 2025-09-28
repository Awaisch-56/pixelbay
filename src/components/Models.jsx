import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const models = [
  {
    id: "tozzo98",
    name: "Tozzo 98",
    image: "/pic2.jpg",
  },
  {
    id: "carx",
    name: "Car X",
    image: "/pic.jpeg",
  },
];

function ModelList() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        3D Game Models Gallery
      </Typography>

      {/* Center the grid container */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
          {models.map((model) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={model.id}>
              <Card
                onClick={() => navigate(`/model/${model.id}`)}
                sx={{
                  cursor: "pointer",
                  height: 320, // fixed card height
                  display: "flex",
                  flexDirection: "column",
                }}
                elevation={4}
              >
                <CardMedia
                  component="img"
                  image={model.image}
                  alt={model.name}
                  sx={{
                    height: 200, // fixed image height
                    objectFit: "cover", // crop image nicely
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      mt: 1,
                      wordBreak: "break-word",
                    }}
                  >
                    {model.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ModelList;
