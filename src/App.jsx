import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import { Box } from "@mui/material";
import CategoryDetailPage from "./components/CategoryDetailPage";

// ✅ All images database
import summer from "./assets/Gaming Wllpaper/aesthetic-summer-holidays.jpg";
import animeCar from "./assets/Gaming Wllpaper/anime-car-city.jpg";
import cartoon from "./assets/Gaming Wllpaper/cartoon-tropical-island-landscape.jpg";
import cartoon1 from "./assets/Gaming Wllpaper/cartoon-tropical-island-landscape (1).jpg";
import cartoon2 from "./assets/Gaming Wllpaper/cartoon-tropical-island-landscape (2).jpg";
import cartoon3 from "./assets/Gaming Wllpaper/cartoon-tropical-island-landscape (3).jpg";
import blackState from "./assets/Gaming Wllpaper/black-state-content-02-1920x1080.jpg";
import citydark from "./assets/Gaming Wllpaper/city dark evening wallper.png";
import gtagaming from "./assets/Gaming Wllpaper/gta city wallpaper.png";
import gangstercitywar from "./assets/Gaming Wllpaper/gangster city car wallaer.png";

import bodyman from "./assets/Charactors/body man charactor.png";
import boysgirls from "./assets/Charactors/boy and girl style charctor.png";
import gangsterman from "./assets/Charactors/gangster man 2.png";
import mafiagang from "./assets/Charactors/mafia gangster game logo.png";

import architecture from "./assets/Texture/architecture-ground-texture-floor-wall-pavement.jpg";
import blueandwhite from "./assets/Texture/Blue & white stripe patterned deanim texture.png";
import brick from "./assets/Texture/Brick Pavement 4 demo.jpg";
import brickwall from "./assets/Texture/brick wall texture.jpg";

import stars from "./assets/ICONS/3-stars.png";
import Camera from "./assets/ICONS/360-camera.png";
import trafficSignal from "./assets/ICONS/Spain_traffic_signal_p17.png";
import airsoft from "./assets/ICONS/airsoft-gun.png";

import bike from "./assets/pngs/bicke.png";
import moneyIcon from "./assets/pngs/money-icon-png-30.png";
import sportsCar from "./assets/pngs/Sports-Car-Transparent-Free-PNG.png";
import engineStart from "./assets/pngs/ENGINE START BUTTON.png";

// ✅ Master database of categories + images
const allCategories = {
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

function App() {
  const [selectedCategory, setSelectedCategory] = useState("GamingWallpaper");
  const [searchResults, setSearchResults] = useState(null);

  // ✅ Search handler (case-insensitive spelling fix)
  const handleSearch = (keyword) => {
    const query = keyword.trim().toLowerCase();
    if (!query) {
      setSearchResults(null);
      return;
    }

    const results = [];
    Object.keys(allCategories).forEach((cat) => {
      allCategories[cat].forEach((img, index) => {
        if (img.name.toLowerCase().includes(query)) {
          results.push({ ...img, category: cat, index });
        }
      });
    });

    setSearchResults(results);
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSearchResults(null);
  };

  // ✅ Home Page Component
  const HomePage = () => (
    <>
      <HeroSection
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />

      <div style={{ marginTop: "2rem" }}>
        {searchResults ? (
          <CategorySection category="Search Images" images={searchResults} />
        ) : (
          <CategorySection
            category={selectedCategory}
            images={allCategories[selectedCategory]}
          />
        )}
      </div>
    </>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <BrowserRouter>
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/category/:category/:id"
              element={<CategoryDetailPage />}
            />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
