import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


import summer from "../assets/Gaming Wllpaper/aesthetic-summer-holidays.jpg";
import animeCar from "../assets/Gaming Wllpaper/anime-car-city.jpg";
import cartoon from "../assets/Gaming Wllpaper/cartoon-tropical-island-landscape.jpg";
import cartoon1 from "../assets/Gaming Wllpaper/cartoon-tropical-island-landscape (1).jpg";
import cartoon2 from "../assets/Gaming Wllpaper/cartoon-tropical-island-landscape (2).jpg";
import cartoon3 from "../assets/Gaming Wllpaper/cartoon-tropical-island-landscape (3).jpg";
import blackState from "../assets/Gaming Wllpaper/black-state-content-02-1920x1080.jpg";
import citydark from "../assets/Gaming Wllpaper/city dark evening wallper.png";
import gtagaming from "../assets/Gaming Wllpaper/gta city wallpaper.png";
import gangstercitywar from "../assets/Gaming Wllpaper/gangster city car wallaer.png";


import bodyman from "../assets/Charactors/body man charactor.png";
import boysgirls from "../assets/Charactors/boy and girl style charctor.png";
import gangsterman from "../assets/Charactors/gangster man 2.png";
import mafiagang from "../assets/Charactors/mafia gangster game logo.png";

import architecture from "../assets/Texture/architecture-ground-texture-floor-wall-pavement.jpg";
import blueandwhite from "../assets/Texture/Blue & white stripe patterned deanim texture.png";
import brick from "../assets/Texture/Brick Pavement 4 demo.jpg";
import brickwall from "../assets/Texture/brick wall texture.jpg";

import stars from "../assets/ICONS/3-stars.png";
import Camera from "../assets/ICONS/360-camera.png";
import trafficSignal from "../assets/ICONS/Spain_traffic_signal_p17.png";
import airsoft from "../assets/ICONS/airsoft-gun.png";

import bike from "../assets/pngs/bicke.png";
import moneyIcon from "../assets/pngs/money-icon-png-30.png";
import sportsCar from "../assets/pngs/Sports-Car-Transparent-Free-PNG.png";
import engineStart from "../assets/pngs/ENGINE START BUTTON.png";


function CategorySection({ category }) {
  const navigate = useNavigate();

  // ✅ Each category has its own array of objects { src, name }
  const categoryImages = {
    GamingWallpaper: [
      { src: summer, name: "Summer Holidays" },
      { src: animeCar, name: "Anime Car City" },
      { src: cartoon, name: "Cartoon Island" },
      { src: blackState, name: "Black State" },
      { src: cartoon1, name: "Cartoon Island 1" },
      { src: cartoon2, name: "Cartoon Island 2" },
      { src: cartoon3, name: "Cartoon Island 3" },
      { src: citydark, name: "City Dark Evening" },
      { src: gtagaming, name: "GTA City" },
      { src: gangstercitywar, name: "Gangster City War" },

    ],
    Characters: [
      { src: bodyman, name: "Boy Man" },
      { src: boysgirls, name: "Boys & Girls" },
      { src: gangsterman, name: "Gangster Man" },
      { src: mafiagang, name: "Mafia Gang" },
    ],
    Textures: [
      { src: architecture, name: "Architecture Ground" },
      { src: blueandwhite, name: "Blue & White Stripe" },
      { src: brick, name: "Brick Pavement" },
      { src: brickwall, name: "Brick Wall" },
    ],
    Icons: [
      { src: stars, name: "3 Stars" },
      { src: Camera, name: "360 Camera" },
      { src: trafficSignal, name: "Traffic Signal" },
      { src: airsoft, name: "AirSoft" },
    ],
    PNG: [
      { src: bike, name: "Bike" },
      { src: moneyIcon, name: "Money" },
      { src: sportsCar, name: "Sports Car" },
      { src: engineStart, name: "Engine Start" },
    ],
  };

  const images = categoryImages[category] || [];

  return (
    <div style={{ marginBottom: "40px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          color: "primary.main",
        }}
      >
        {category}
      </Typography>

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
    </div >
  );
}

export default CategorySection;
