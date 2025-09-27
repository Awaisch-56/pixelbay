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
import gangsterstylewalpaper from "./assets/Gaming Wllpaper/gangster style wallaper.png";
import effectgaming from "./assets/Gaming Wllpaper/effect gaming wallpaer.png";
import gangstarwalpaper from "./assets/Gaming Wllpaper/gangster wallpaper.jpg";
import gtabackgroundwalpaper from "./assets/Gaming Wllpaper/gta background wallper.png";
import gtacitywalpaper from "./assets/Gaming Wllpaper/gta city wallpaper.png";
import retrocomicstyle from "./assets/Gaming Wllpaper/hawaii-illustration-retro-comic-style (1).jpg";
import retrocomicstyle2 from "./assets/Gaming Wllpaper/hawaii-illustration-retro-comic-style (2).jpg";
import origialassest from "./assets/Gaming Wllpaper/Original Assets5-1920x1080.jpg";
import panoramic from "./assets/Gaming Wllpaper/panoramic-view-dubai-city-illuminated-neon-spectrum.jpg";
import pubgwalpaper from "./assets/Gaming Wllpaper/pubg wallaper.jpg";
import shootingfirewalpaper from "./assets/Gaming Wllpaper/shooting fire wallpaer.png";
import shootinggamewallpaer from "./assets/Gaming Wllpaper/shooting Game wallaper.jpg";
import shootingwalpaper from "./assets/Gaming Wllpaper/shooting wallpaper.png";

import bodyman from "./assets/Charactors/body man charactor.png";
import boysgirls from "./assets/Charactors/boy and girl style charctor.png";
import gangsterman from "./assets/Charactors/gangster man 2.png";
import mafiagang from "./assets/Charactors/mafia gangster game logo.png";
import bodycharacter from "./assets/Charactors/boy charactor.png";
import cuteboy from "./assets/Charactors/cute boy charactor.png";
import doctorboy from "./assets/Charactors/doctor boy.png";
import farmergirl from "./assets/Charactors/farmer girl.png";
import farmerman from "./assets/Charactors/farmer man.png";
import girlchachma from "./assets/Charactors/girl chachma charactor.png";
import neongirl from "./assets/Charactors/neon girl.png";
import policegirl from "./assets/Charactors/police girl.png";
import policeman from "./assets/Charactors/police man.png";
import policeshooter from "./assets/Charactors/police shooter girl.png";
import stylishboy from "./assets/Charactors/stylish boy.png";
import vactorgirl from "./assets/Charactors/vactor girl charactor.png";
import younggangster from "./assets/Charactors/young gangster texture.png";
import youngman from "./assets/Charactors/young man charactor.png";
import smokingman from "./assets/Charactors/smoking man charactor.png";
import pistal from "./assets/Charactors/pistal.png";
import newcharctergang from "./assets/Charactors/new gangster charactor.png";
import moderngirlgangster from "./assets/Charactors/modren gangster girl.png";
import mancharcter from "./assets/Charactors/man charactor.png";
import girlwithgun from "./assets/Charactors/girl with gun.png";

import architecture from "./assets/Texture/architecture-ground-texture-floor-wall-pavement.jpg";
import blueandwhite from "./assets/Texture/Blue & white stripe patterned deanim texture.png";
import brick from "./assets/Texture/Brick Pavement 4 demo.jpg";
import brickwall from "./assets/Texture/brick wall texture.jpg";

import stars from "./assets/ICONS/3-stars.png";
import Camera from "./assets/ICONS/360-camera.png";
import trafficSignal from "./assets/ICONS/Spain_traffic_signal_p17.png";
import airsoft from "./assets/ICONS/airsoft-gun.png";
import accountsetting from "./assets/ICONS/account-settings.png";
import angledouble from "./assets/ICONS/angle-double-left.png";
import appreciation from "./assets/ICONS/appreciation.png";
import arrow from "./assets/ICONS/arrow (1).png";
import arrowright from "./assets/ICONS/arrow-right.png";
import arrowhead from "./assets/ICONS/arrowhead (1).png";
import arrows from "./assets/ICONS/arrows.png";
import attention from "./assets/ICONS/attention.png";
import back from "./assets/ICONS/back (1).png";
import backarrow from "./assets/ICONS/back-arrow.png";
import back1 from "./assets/ICONS/back (1).png";
import bandwidth from "./assets/ICONS/bandwidth.png";
import barchart from "./assets/ICONS/bar-chart.png";
import bestprice from "./assets/ICONS/best-price.png";
import brake from "./assets/ICONS/brake (1).png";
import brakeicon from "./assets/ICONS/brake icon.png";
import brake1 from "./assets/ICONS/brake (1).png";
import bullet from "./assets/ICONS/bullet.png";
import bullet1 from "./assets/ICONS/bullet (1).png";
import button from "./assets/ICONS/button.png";
import carstearing from "./assets/ICONS/car-steering-wheel.png";
import cart from "./assets/ICONS/cart (1).png";
import checkmark from "./assets/ICONS/check-mark (1).png";
import checked from "./assets/ICONS/checked.png";
import checklist from "./assets/ICONS/checklist.png";
import clock from "./assets/ICONS/clock.png";
import close from "./assets/ICONS/close.png";
import controller from "./assets/ICONS/controller.png";
import couple from "./assets/ICONS/couple.png";
import cursor from "./assets/ICONS/cursor.png";
import dangr from "./assets/ICONS/danger.png";
import dice from "./assets/ICONS/dice.png";
import downloads from "./assets/ICONS/download (3).png";
import energy from "./assets/ICONS/energy.png";
import enginestartbutton from "./assets/ICONS/engine star button.png";
import exist from "./assets/ICONS/exit.png";
import favorite from "./assets/ICONS/favorite.png";
import feedback from "./assets/ICONS/feedback.png";
import fileprotection from "./assets/ICONS/file-protection.png";
import gameconsole from "./assets/ICONS/game-console.png";
import game from "./assets/ICONS/game.png";
import gamepad from "./assets/ICONS/gamepad.png";
import pointer from "./assets/ICONS/pointer.png";
import privacy from "./assets/ICONS/privacy.png";
import profile from "./assets/ICONS/profile.png";
import radio from "./assets/ICONS/radio (1).png";
import renewableenrgy from "./assets/ICONS/renewable-energy.png";
import reputation from "./assets/ICONS/reputation.png";
import restart from "./assets/ICONS/restart (1).png";
import refile from "./assets/ICONS/rifle.png";
import rightarrow2 from "./assets/ICONS/right-arrow (2).png";
import seatbelt from "./assets/ICONS/seat-belt.png";
import setting from "./assets/ICONS/settings.png";
import target from "./assets/ICONS/target.png";
import unlock from "./assets/ICONS/unlock (1).png";
import wheel from "./assets/ICONS/wheel (1).png";
import skipbutton from "./assets/ICONS/skip-button (1).png";
import speedometer from "./assets/ICONS/speedometer.png";

import bike from "./assets/pngs/bicke.png";
import moneyIcon from "./assets/pngs/money-icon-png-30.png";
import sportsCar from "./assets/pngs/Sports-Car-Transparent-Free-PNG.png";
import engineStart from "./assets/pngs/ENGINE START BUTTON.png";
import airplane from "./assets/pngs/airplane.png";
import bluebus from "./assets/pngs/blue bus.png";
import coins from "./assets/pngs/coins.png";
import eurotrucklogo from "./assets/pngs/Euro Truck Logo.png";
import eurotruck from "./assets/pngs/euro truck.png";
import noparking from "./assets/pngs/no parking,sign.png";
import pistal2 from "./assets/pngs/pistal.png";
import spaintraffic from "./assets/pngs/Spain traffic sign.png";
import purplegift from "./assets/pngs/purple gift.png";
import star from "./assets/pngs/star 1.png";
import steering from "./assets/pngs/STEERING.png";
import strearingT27 from "./assets/pngs/T-27LTE-35.jpg";
import traficlight from "./assets/pngs/Traffic light.png";
import goldcoinsbag from "./assets/pngs/transparent-gold-coins-bag.png";
import truckstrearing from "./assets/pngs/truck steering.png";
import uturn from "./assets/pngs/U-turn.png";
import zebracrossing from "./assets/pngs/zebra crossing.png";



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
    { src: gangsterstylewalpaper, name: "Gangster Style" },
    { src: effectgaming, name: "Effect Gaming" },
    { src: gangstarwalpaper, name: "Gangster Wallpaper" },
    { src: gtabackgroundwalpaper, name: "GTA Background" },
    { src: gtacitywalpaper, name: "GTA City Wallpaper" },
    { src: retrocomicstyle, name: "Retro Comic Style" },
    { src: retrocomicstyle2, name: "Retro Comic Style 2" },
    { src: origialassest, name: "Car Wallpaper " },
    { src: panoramic, name: "Panoramic View Dubai" },
    { src: pubgwalpaper, name: "PUBG Wallpaper" },
    { src: shootingfirewalpaper, name: "Shooting Fire" },
    { src: shootinggamewallpaer, name: "Shooting Game" },
    { src: shootingwalpaper, name: "Shooting Wallpaper" },
  ],
  Characters: [

    { src: bodycharacter, name: "Boy Character" },
    { src: cuteboy, name: "Cute Boy" },
    { src: doctorboy, name: "Doctor Boy" },
    { src: farmergirl, name: "Farmer Girl" },
    { src: farmerman, name: "Farmer Man" },
    { src: girlchachma, name: "Girl Chashma" },
    { src: neongirl, name: "Neon Girl" },
    { src: policegirl, name: "Police Girl" },
    { src: policeman, name: "Police Man" },
    { src: policeshooter, name: "Police Shooter" },
    { src: stylishboy, name: "Stylish Boy" },
    { src: bodyman, name: "Boy Man" },
    { src: boysgirls, name: "Boys & Girls" },
    { src: gangsterman, name: "Gangster Man" },
    { src: mafiagang, name: "Mafia Gang" },
    { src: vactorgirl, name: "Vactor Girl" },
    { src: younggangster, name: "Young Gangster" },
    { src: youngman, name: "Young Man" },
    { src: smokingman, name: "Smoking Man" },
    { src: pistal, name: "Pistal Gun" },
    { src: newcharctergang, name: "New Gangster" },
    { src: moderngirlgangster, name: "Modern Girl Gangster" },
    { src: mancharcter, name: "Man Character" },
    { src: girlwithgun, name: "Girl With Gun" },

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
    { src: accountsetting, name: "Account Setting" },
    { src: angledouble, name: "Angle Double" },
    { src: appreciation, name: "Appreciation" },
    { src: arrow, name: "Arrow" },
    { src: arrowright, name: "Arrow Right" },
    { src: arrowhead, name: "Arrow Head" },
    { src: arrows, name: "Arrows" },
    { src: attention, name: "Attention" },
    { src: back, name: "Back" },
    { src: backarrow, name: "Back Arrow" },
    { src: back1, name: "Back 1" },
    { src: bandwidth, name: "Bandwidth" },
    { src: barchart, name: "Bar Chart" },
    { src: bestprice, name: "Best Price" },
    { src: brake, name: "Brake" },
    { src: brakeicon, name: "Brake Icon" },
    { src: brake1, name: "Brake 1" },
    { src: bullet, name: "Bullet" },
    { src: bullet1, name: "Bullet 1" },
    { src: button, name: "Button" },
    { src: carstearing, name: "Car Steering" },
    { src: cart, name: "Cart" },
    { src: checkmark, name: "Check Mark" },
    { src: checked, name: "Checked" },
    { src: checklist, name: "Checklist" },
    { src: clock, name: "Clock" },
    { src: close, name: "Close" },
    { src: controller, name: "Controller" },
    { src: couple, name: "Couple" },
    { src: cursor, name: "Cursor" },
    { src: dangr, name: "Danger" },
    { src: dice, name: "Dice" },
    { src: downloads, name: "Downloads" },
    { src: energy, name: "Energy" },
    { src: enginestartbutton, name: "Engine Start" },
    { src: exist, name: "Exit" },
    { src: favorite, name: "Favorite" },
    { src: feedback, name: "Feedback" },
    { src: fileprotection, name: "File Protection" },
    { src: gameconsole, name: "Game Console" },
    { src: game, name: "Game" },
    { src: gamepad, name: "Gamepad" },
    { src: pointer, name: "Pointer" },
    { src: privacy, name: "Privacy" },
    { src: profile, name: "Profile" },
    { src: radio, name: "Radio" },
    { src: renewableenrgy, name: "Renewable Energy" },
    { src: reputation, name: "Reputation" },
    { src: restart, name: "Restart" },
    { src: refile, name: "Refile" },
    { src: rightarrow2, name: "Right Arrow" },
    { src: seatbelt, name: "Seat Belt" },
    { src: setting, name: "Setting" },
    { src: target, name: "Target" },
    { src: unlock, name: "Unlock" },
    { src: wheel, name: "Wheel" },
    { src: skipbutton, name: "Skip Button" },
    { src: speedometer, name: "Speedometer" },

  ],
  PNG: [
    { src: bike, name: "Bike" },
    { src: moneyIcon, name: "Money" },
    { src: sportsCar, name: "Sports Car" },
    { src: engineStart, name: "Engine Start" },
    { src: airplane, name: "Airplane" },
    { src: bluebus, name: "Blue Bus" },
    { src: coins, name: "Coins" },
    { src: eurotrucklogo, name: "Euro Truck Logo" },
    { src: eurotruck, name: "Euro Truck" },
    { src: noparking, name: "No Parking" },
    { src: pistal2, name: "Pistal" },
    { src: spaintraffic, name: "Spain Traffic" },
    { src: purplegift, name: "Purple Gift" },
    { src: star, name: "Star" },
    { src: steering, name: "Steering" },
    { src: strearingT27, name: "Strearing T27" },
    { src: traficlight, name: "Traffic Light" },
    { src: goldcoinsbag, name: "Gold Coins Bag" },
    { src: truckstrearing, name: "Truck Strearing" },
    { src: uturn, name: "U Turn" },
    { src: zebracrossing, name: "Zebra Crossing" },
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
