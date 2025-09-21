import React from "react";
import { Card, CardMedia, CardActions, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function ImageCard({ img }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = img;
    link.download = img.split("/").pop(); // filename.png
    link.click();
  };

  return (
    <Card sx={{ maxWidth: 300, mx: "auto" }}>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="PNG"
        sx={{ objectFit: "contain", p: 1 }}
      />
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
