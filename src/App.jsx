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
import ModelList from "./components/Models";
import ModelDetail from "./components/ModelDetail";

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

import architecture from "./assets/Texture/architectural architecture art backdrop background.jpg";
import blueandwhite from "./assets/Texture/windows blue abstract building architecture facade.jpg";
import brick from "./assets/Texture/brick wall window architecture texture.jpg";
import brickwall from "./assets/Texture/brick wall with coarse surface.jpg";
import abstractaged from "./assets/Texture/abstract aged architecture backdrop background.jpg";
import abstractarchitecture from "./assets/Texture/abstract architecture structure texture floor old.jpg";
import abstractwhite from "./assets/Texture/abstract white texture floor wall asphalt.jpg";
import architecturebench from "./assets/Texture/architecture bench texture window building wall.jpg";
import architectureglass from "./assets/Texture/architecture glass concrete symmetry windows modern architecture.jpg";
import architecturehousecityurban from "./assets/Texture/architecture house window building city urban.jpg";
import architecturehouseurbanwall from "./assets/Texture/architecture house window building urban wall.jpg";
import architecturehousewindowhomewall from "./assets/Texture/architecture house window home-wall porch.jpg";
import architecturehousewindownnumber from "./assets/Texture/architecture house window number view building.jpg";
import architecturewindowurbanwallcolor from "./assets/Texture/architecture house window urban wall color.jpg";
import architecturestreethouse from "./assets/Texture/architecture street house texture window town.jpg";
import architecturestreethousewindowtown from "./assets/Texture/architecture wood-street house window town.jpg";
import architecturestreetvintageretro from "./assets/Texture/architecture street vintage retro house texture.jpg";
import architecturestructurehousetexture from "./assets/Texture/architecture structure house texture floor building.jpg";
import architecturestructurehousewindow from "./assets/Texture/architecture structure house window building old.jpg";
import architecturestructurefloorbuilding from "./assets/Texture/architecture structure texture floor building wall.jpg";
import architecturestructureflooroldhome from "./assets/Texture/architecture structure texture floor old home.jpg";
import architecturestructurewindowbuilding from "./assets/Texture/architecture structure window building skyscraper wall.jpg";
import architecturestructurewoodbench from "./assets/Texture/architecture structure wood bench house window.jpg";
import architecturestructurewoodhouse from "./assets/Texture/architecture structure wood house window building.jpg";
import architecturestructurewoodhousebuilding from "./assets/Texture/architecture structure wood house window building.jpg";
import architecturestructurewoodwhite from "./assets/Texture/architecture structure wood white street.jpg";
import architecturestructurewoodwhitevintage from "./assets/Texture/architecture structure wood white vintage antique.jpg";
import architecturetexturewindowglassbuilding from "./assets/Texture/architecture texture window glass building home.jpg";
import architecturewhitehousetexture from "./assets/Texture/architecture white house texture building city.jpg";
import architecturewindowbuilding from "./assets/Texture/architecture window building wall.jpg";
import architecturewoodhousefloor from "./assets/Texture/architecture wood house floor texture.jpg";
import architecturewoodhousetexture from "./assets/Texture/architecture wood house texture floor building.jpg";
import architecturewoodfloorwindow from "./assets/Texture/architecture wood floor window building wall.jpg";
import architecturewoodhousefloor1 from "./assets/Texture/architecture wood house floor texture.jpg";
import architecturewoodhousetexture1 from "./assets/Texture/architecture wood house window roof building.jpg";
import architecturewoodhousetexturewindowbuilding from "./assets/Texture/architecture wood house texture window building.jpg";
import architecturewoodhousewindowbuildinghome from "./assets/Texture/architecture wood house window building home.jpg";
import structurehousetexturefloorwallstone from "./assets/Texture/structure house texture floor wall stone.jpg";
import structureroadfloorbuildinghomewall from "./assets/Texture/structure road floor building home wall.jpg";
import structureroadgroundtexturefloorcobblestone from "./assets/Texture/structure road ground texture floor cobblestone.jpg";
import structureroadgroundtexturefloor from "./assets/Texture/structure road ground texture floor.jpg";
import structureroadgroundtexturesidewalkfloor from "./assets/Texture/structure road ground texture sidewalk floor.jpg";
import structuretexturefloorbuildingwallpattern from "./assets/Texture/structure texture floor building wall pattern.jpg";
import structuretexturefloorcobblestonewall from "./assets/Texture/structure texture floor cobblestone wall.jpg";
import structuretextureoldwallred from "./assets/Texture/structure texture old wall red.jpg";
import structuretexturepatternlinemetalbrick from "./assets/Texture/structure texture pattern line metal brick.jpg";
import structurewhitegraintexturebuilding from "./assets/Texture/structure white grain texture building.jpg";
import structuretexturefloorbuildingwallconstruction from "./assets/Texture/texture building wall shadow contrast surface.jpg";
import texturebuildingwallshadowcontrastsurface from "./assets/Texture/texture building wall shadow contrast surface.jpg";
import texturefloorbuildingoldwallconstruction from "./assets/Texture/texture floor urban wall construction pattern.jpg";
import texturefloorbuildingwallconstruction from "./assets/Texture/texture floor building wall construction.jpg";
import texturefloorbuildingwallpatternline from "./assets/Texture/texture floor urban wall construction pattern.jpg";
import texturefloorbuildingwallredstonewall from "./assets/Texture/texture-floor-building-wall-red-stone-wall-1258605-pxhere.com.jpg";
import texturefloorurbanwallconstructionpattern from "./assets/Texture/texture floor urban wall construction pattern.jpg";
import texturefloorurbanwallgreen from "./assets/Texture/white texture floor old city urban.jpg";
import texturefloorwallasphaltunderground from "./assets/Texture/texture floor wall asphalt underground.jpg";
import texturefloorwallpatternlinetile from "./assets/Texture/texture floor wall pattern line tile.jpg";
import texturesidewalkfloorwallasphaltpattern from "./assets/Texture/texture sidewalk floor wall asphalt pattern.jpg";
import texturewallgrungebluestonewallcolorful from "./assets/Texture/texture wall grunge blue stone wall colorful.jpg";
import tiledstonefacadetexture from "./assets/Texture/tiled stone facade texture.jpg";
import trackroadtexturfloorwallasphalt from "./assets/Texture/track road texture floor wall asphalt.jpg";
import treeforestarchitecturestructuretextureleaf from "./assets/Texture/tree forest architecture structure texture leaf.jpg";
import treerockwoodtextureleaftrunk from "./assets/Texture/tree rock wood texture leaf trunk.jpg";
import treewoodstreethousetexturewindow from "./assets/Texture/tree wood street house texture window.jpg";

import AlmereV from "./assets/Texture/Almere V.jpg";
import AlmereVI from "./assets/Texture/Almere VI.jpg";
import AlmereXIII from "./assets/Texture/Almere XIII.jpg";
import AlmereXIX from "./assets/Texture/Almere XIX.jpg";
import AlphenTEXTURE00112 from "./assets/Texture/Alphen TEXTURE 00112.jpg";
import AppartmentsbuildingV from "./assets/Texture/Appartments building V.jpg";
import AroundTheCornerII from "./assets/Texture/Around The Corner II.jpg";
import Assen016 from "./assets/Texture/Assen 016.jpg";
import breakwalltexture09011 from "./assets/Texture/break wall texture 09011.jpg";
import breakwallwindowtexture from "./assets/Texture/break wall window texture.jpg";
import Broekop01 from "./assets/Texture/Broek op 01.jpg";
import building1XVII from "./assets/Texture/building 1XVII.jpg";
import buildingdesigntexture from "./assets/Texture/building design texture.jpg";
import BuildingIV00 from "./assets/Texture/Building IV00.jpg";
import BuildingkXIII from "./assets/Texture/Building kXIII.jpg";
import buildingsnowtexture from "./assets/Texture/building snow texture.jpg";
import buildingtexture0VX from "./assets/Texture/building texture 0VX.jpg";
import buildingtexture0001 from "./assets/Texture/building texture 0001.jpg";
import Buildingtexture1 from "./assets/Texture/Building texture 1.jpg";
import buildingtexture002 from "./assets/Texture/building texture 002.jpg";
import BuildingTexture2 from "./assets/Texture/Building Texture 2.jpg";
import buildingtexture003 from "./assets/Texture/building texture 003.jpg";
import buildingtexture0003 from "./assets/Texture/building texture 0003.jpg";
import Buildingtexture3 from "./assets/Texture/Building texture 3.jpg";
import buildingtexture004 from "./assets/Texture/building texture 004.jpg";
import buildingtexture005 from "./assets/Texture/building texture 005.jpg";
import buildingtexture0005 from "./assets/Texture/building texture 0005.jpg";
import buildingtexture006 from "./assets/Texture/building texture 006.jpg";
import buildingtexture0006 from "./assets/Texture/building texture 0006.jpg";
import buildingtexture008 from "./assets/Texture/building texture 008.jpg";
import buildingtexture0009 from "./assets/Texture/building texture 0009.jpg";
import buildingtexture00010 from "./assets/Texture/building texture 00010.jpg";
import buildingtexture00012 from "./assets/Texture/building texture 00012.jpg";
import buildingtexture00013 from "./assets/Texture/building texture 00013.jpg";
import Buildingtexture0100 from "./assets/Texture/Building texture 0100.jpg";
import buildingtexture0101 from "./assets/Texture/building texture 0101.jpg";
import buildingtexture0912 from "./assets/Texture/building texture 0912.jpg";
import buildingtexture5001 from "./assets/Texture/building texture 5001.jpg";
import buildingtexture05001 from "./assets/Texture/building texture 05001.jpg";
import BUILDINGTEXTURE5011 from "./assets/Texture/BUILDING TEXTURE 5011.jpg";
import buildingtexture6090 from "./assets/Texture/building texture 6090.jpg";
import buildingtexture09800 from "./assets/Texture/building texture 09800.jpg";
import buildingtexture50902 from "./assets/Texture/building texture 50902.jpg";
import buildingtexture500012 from "./assets/Texture/building texture 500012.jpg";
import buildingtextureoffice0990 from "./assets/Texture/building texture office 0990.jpg";
import buildingtextureVBIIX from "./assets/Texture/building texture VBIIX.jpg";
import buildingtextureVIIIXI from "./assets/Texture/building texture VIIIXI.jpg";
import BUILDINGTEXTUREviiui from "./assets/Texture/BUILDING TEXTURE viiui.jpg";
import buildingtextureVXXXZ from "./assets/Texture/building texture VXXXZ.jpg";
import Buildingtexture from "./assets/Texture/Building texture.webp";
import buildingtx9DC from "./assets/Texture/building tx 9DC.jpg";
import buildingtx0070 from "./assets/Texture/building tx 0070.jpg";
import buildingtx00701 from "./assets/Texture/building tx 00701.jpg";
import buildingtx0971 from "./assets/Texture/building tx 0971.jpg";
import BuildingtxCXII from "./assets/Texture/Building tx CXII.jpg";
import buildingtxVXXI from "./assets/Texture/building tx VXXI.jpg";
import buildingwindowstexture from "./assets/Texture/building windows texture.jpg";
import Buildingwithtreetexture from "./assets/Texture/Building with tree texture.jpg";
import BuildingXXVIII from "./assets/Texture/Building XXVIII.jpg";
import BuildingXXX from "./assets/Texture/Building XXX.jpg";
import BuildingnIX from "./assets/Texture/BuildingnIX.jpg";
import buildngtextureVIIIIV from "./assets/Texture/buildng texture VIIIIV.jpg";
import buldingtexture00014 from "./assets/Texture/bulding texture00014.jpg";
import Canteen90 from "./assets/Texture/Canteen 90.jpg";
import cirybuildingtexture0012 from "./assets/Texture/ciry building texture 0012.jpg";
import CityBuildingtexture from "./assets/Texture/City Building texture.jpg";
import factorybuildingtexture from "./assets/Texture/factory building texture.jpg";
import floortexture1 from "./assets/Texture/floor texture 1.jpg";
import floortexture02 from "./assets/Texture/floor texture 02.jpg";
import glassbuildingtexture from "./assets/Texture/glass building texture.jpg";
import Gouda043 from "./assets/Texture/Gouda 043.jpg";
import GradientColortexture from "./assets/Texture/Gradient Color texture.jpg";
import grasstexture001 from "./assets/Texture/grass texture 001.jpg";
import Heerhugowaard from "./assets/Texture/Heerhugowaard.jpg";
import HendrikIdo from "./assets/Texture/Hendrik Ido.jpg";
import HertogenboschVIIIXV from "./assets/Texture/Hertogenbosch VIIIXV.jpg";
import Hoorn8 from "./assets/Texture/Hoorn 8.jpg";
import Hoorn13 from "./assets/Texture/Hoorn 13.jpg";
import Hoorn14 from "./assets/Texture/Hoorn 14.jpg";
import Hoorn21 from "./assets/Texture/Hoorn 21.jpg";
import housefloortexture from "./assets/Texture/house floor texture.jpg";
import housetexture001 from "./assets/Texture/house texture 001.jpg";
import housetexture801 from "./assets/Texture/house texture 801.jpg";
import housewindow090 from "./assets/Texture/house window 090.jpg";
import Lelystad1 from "./assets/Texture/Lelystad 1.jpg";
import Lelystad13 from "./assets/Texture/Lelystad 13.jpg";
import Lelystad14 from "./assets/Texture/Lelystad 14.jpg";
import Lelystad15 from "./assets/Texture/Lelystad 15.jpg";
import newbuildingtexture5050 from "./assets/Texture/new building texture 5050.jpg";
import newbuildingtexture from "./assets/Texture/new building texture.jpg";
import newdesignbuildingtexture from "./assets/Texture/new design building texture.jpg";
import newdesignbuildingtx from "./assets/Texture/new design building tx.jpg";
import officebuilding0102 from "./assets/Texture/office building 0102.jpg";
import officebuildingtexture from "./assets/Texture/office building texture.jpg";
import OfficebuildingV from "./assets/Texture/Office building V.jpg";
import OfficebuildingVI from "./assets/Texture/Office building VI.jpg";
import OfficeI from "./assets/Texture/Office I.jpg";
import OfficeII from "./assets/Texture/Office II.jpg";
import OfficeIV from "./assets/Texture/Office IV.jpg";
import OfficebuildingIX from "./assets/Texture/Office-building IX.jpg";
import Oosterhout25 from "./assets/Texture/Oosterhout 25.jpg";
import Oosterhout26 from "./assets/Texture/Oosterhout 26.jpg";
import Oosterhout28 from "./assets/Texture/Oosterhout 28.jpg";
import Oosterhout30 from "./assets/Texture/Oosterhout 30.jpg";
import Oosterhout31 from "./assets/Texture/Oosterhout 31.jpg";
import Purmerend3 from "./assets/Texture/Purmerend 3.jpg";
import Purmerend18 from "./assets/Texture/Purmerend 18.jpg";
import rockgrasstexture from "./assets/Texture/rock grass texture.jpg";
import RotterdamIV from "./assets/Texture/Rotterdam-IV.jpg";
import Schiedam1 from "./assets/Texture/Schiedam 1.jpg";
import Schiedam5 from "./assets/Texture/Schiedam 5.jpg";
import Schiedam6 from "./assets/Texture/Schiedam 6.jpg";
import Schiedam7 from "./assets/Texture/Schiedam 7.jpg";
import Schiedam11 from "./assets/Texture/Schiedam 11.jpg";
import texture000019 from "./assets/Texture/texture 000019.jpg";
import texture3012 from "./assets/Texture/texture 3012.jpg";
import texturebuilding0021 from "./assets/Texture/texture building 0021.jpg";
import texturehouse4001 from "./assets/Texture/texture house 4001.jpg";
import Tilburg43 from "./assets/Texture/Tilburg 43.jpg";
import Tilburg44 from "./assets/Texture/Tilburg 44.jpg";
import tilebuildingtexture from "./assets/Texture/tile building texture.jpg";
import Vlaardingen8 from "./assets/Texture/Vlaardingen 8.jpg";
import walltexture01 from "./assets/Texture/wall texture 01.jpg";
import walltexture004 from "./assets/Texture/wall texture 004.jpg";
import wallVXIIX from "./assets/Texture/wall VXIIX.jpg";
import wallwindowtexture400 from "./assets/Texture/wall window texture 400.jpg";
import wallwindowtexture from "./assets/Texture/wall window texture.jpg";
import wallwindowVIIO from "./assets/Texture/wall window VIIO.jpg";
import WallXX from "./assets/Texture/Wall XX.jpg";
import WallXXV from "./assets/Texture/Wall XXV.jpg";
import WindowII from "./assets/Texture/Window II.jpg";
import WindowV from "./assets/Texture/Window V.jpg";
import WindowVI from "./assets/Texture/Window VI.jpg";
import windowVIIX from "./assets/Texture/window VIIX.jpg";
import WindowXIII from "./assets/Texture/Window XIII.jpg";
import WindowXVII from "./assets/Texture/Window XVII.jpg";
import WindowXXV from "./assets/Texture/Window XXV.jpg";
import WindowXXVIII from "./assets/Texture/Window XXVIII.jpg";
import WindowIII1024x683 from "./assets/Texture/Window-III-1024x683.jpg";
import WindowsAndPlants from "./assets/Texture/Windows And Plants.jpg";
import woodbuildingtexture from "./assets/Texture/wood building texture.jpg";




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
    { src: abstractaged, name: "Abstract Aged" },
    { src: abstractarchitecture, name: "Abstract Architecture" },
    { src: abstractwhite, name: "Abstract White" },
    { src: architecturebench, name: "Architecture Bench" },
    { src: architectureglass, name: "Architecture Glass" },
    { src: architecturehousecityurban, name: "Architecture House City Urban" },
    { src: architecturehouseurbanwall, name: "Architecture House Urban Wall" },
    { src: architecturehousewindowhomewall, name: "Architecture House Window Home Wall" },
    { src: architecturehousewindownnumber, name: "Architecture House Window Number" },
    { src: architecturewindowurbanwallcolor, name: "Architecture Window Urban Wall Color" },
    { src: architecturestreethouse, name: "Architecture Street House" },
    { src: architecturestreethousewindowtown, name: "Architecture Street House Window Town" },
    { src: architecturestreetvintageretro, name: "Architecture Street Vintage Retro" },
    { src: architecturestructurehousetexture, name: "Architecture Structure House Texture" },
    { src: architecturestructurehousewindow, name: "Architecture Structure House Window" },
    { src: architecturestructurefloorbuilding, name: "Architecture Structure Floor Building" },
    { src: architecturestructureflooroldhome, name: "Architecture Structure Floor Old Home" },
    { src: architecturestructurewindowbuilding, name: "Architecture Structure Window Building" },
    { src: architecturestructurewoodbench, name: "Architecture Structure Wood Bench" },
    { src: architecturestructurewoodhouse, name: "Architecture Structure Wood House" },
    { src: architecturestructurewoodhousebuilding, name: "Architecture Structure Wood House Building" },
    { src: architecturestructurewoodwhite, name: "Architecture Structure Wood White" },
    { src: architecturestructurewoodwhitevintage, name: "Architecture Structure Wood White Vintage" },
    { src: architecturetexturewindowglassbuilding, name: "Architecture Texture Window Glass Building" },
    { src: architecturewhitehousetexture, name: "Architecture White House Texture" },
    { src: architecturewindowbuilding, name: "Architecture Window Building" },
    { src: architecturewoodhousefloor, name: "Architecture Wood House Floor" },
    { src: architecturewoodhousetexture, name: "Architecture Wood House Texture" },
    { src: architecturewoodfloorwindow, name: "Architecture Wood Floor Window" },
    { src: architecturewoodhousefloor1, name: "Architecture Wood House Floor" },
    { src: architecturewoodhousetexture1, name: "Architecture Wood House Texture" },
    { src: architecturewoodhousetexturewindowbuilding, name: "Architecture Wood House Texture Window Building" },
    { src: architecturewoodhousewindowbuildinghome, name: "Architecture Wood House Window Building Home" },
    { src: structurehousetexturefloorwallstone, name: "structure house texture floor wall stone" },
    { src: structureroadfloorbuildinghomewall, name: "structure road floor building home wall" },
    { src: structureroadgroundtexturefloor, name: "structure road ground texture floor" },
    { src: structureroadgroundtexturesidewalkfloor, name: "structure road ground texture sidewalk floor" },
    { src: structuretexturefloorbuildingwallpattern, name: "structure texture floor building wall pattern" },
    { src: structuretexturefloorcobblestonewall, name: "structure texture floor cobblestone wall" },
    { src: structuretextureoldwallred, name: "structure texture old wall red" },
    { src: structuretexturepatternlinemetalbrick, name: "structure texture pattern line metal brick" },
    { src: structurewhitegraintexturebuilding, name: "structure white grain texture building" },
    { src: texturebuildingwallshadowcontrastsurface, name: "texture building wall shadow contrast surface" },
    { src: texturefloorbuildingwallconstruction, name: "texture floor building wall construction" },
    { src: texturefloorbuildingwallpatternline, name: "texture floor building wall pattern line" },
    { src: texturefloorbuildingwallredstonewall, name: "texture floor building wall red stone wall" },
    { src: texturefloorurbanwallgreen, name: "texture floor urban wall green" },
    { src: texturefloorwallasphaltunderground, name: "texture floor wall asphalt underground" },
    { src: texturefloorwallpatternlinetile, name: "texture floor wall pattern line tile" },
    { src: texturesidewalkfloorwallasphaltpattern, name: "texture sidewalk floor wall asphalt pattern" },
    { src: texturewallgrungebluestonewallcolorful, name: "texture wall grunge blue stone wall colorful" },
    { src: tiledstonefacadetexture, name: "tiled stone facade texture" },
    { src: trackroadtexturfloorwallasphalt, name: "track road texture floor wall asphalt" },
    { src: treeforestarchitecturestructuretextureleaf, name: "tree forest architecture structure texture leaf" },
    { src: treerockwoodtextureleaftrunk, name: "tree rock wood texture leaf trunk" },
    { src: treewoodstreethousetexturewindow, name: "tree wood street house texture window" },
    { src: AlmereV, name: "Almere V" },
    { src: AlmereVI, name: "Almere VI" },
    { src: AlmereXIII, name: "Almere XIII" },
    { src: AlmereXIX, name: "Almere XIX" },
    { src: AlphenTEXTURE00112, name: "Alphen TEXTURE 00112" },
    { src: AppartmentsbuildingV, name: "Appartments building V" },
    { src: AroundTheCornerII, name: "Around The Corner II" },
    { src: Assen016, name: "Assen 016" },
    { src: breakwalltexture09011, name: "break wall texture 09011.jpg" },
    { src: breakwallwindowtexture, name: "break wall window texture" },
    { src: Broekop01, name: "Broek op 01.jpg" },
    { src: building1XVII, name: "building 1XVII" },
    { src: buildingdesigntexture, name: "building design texture" },
    { src: BuildingIV00, name: "Building IV00.jpg" },
    { src: BuildingkXIII, name: "Building kXIII" },
    { src: buildingsnowtexture, name: "building snow texture" },
    { src: buildingtexture0VX, name: "building texture 0VX" },
    { src: buildingtexture0001, name: "building texture 0001" },
    { src: Buildingtexture1, name: "Building texture 1" },
    { src: buildingtexture002, name: "building texture 002" },
    { src: BuildingTexture2, name: "Building Texture 2" },
    { src: buildingtexture003, name: "building texture 003" },
    { src: buildingtexture0003, name: "building texture 0003" },
    { src: Buildingtexture3, name: "Building texture 3" },
    { src: buildingtexture004, name: "building texture 004" },
    { src: buildingtexture005, name: "building texture 005" },
    { src: buildingtexture0005, name: "building texture 0005" },
    { src: buildingtexture006, name: "building texture 006" },
    { src: buildingtexture0006, name: "building texture 0006" },
    { src: buildingtexture008, name: "building texture 008" },
    { src: buildingtexture0009, name: "building texture 0009" },
    { src: buildingtexture00010, name: "building texture 00010" },
    { src: buildingtexture00012, name: "building texture 00012" },
    { src: buildingtexture00013, name: "building texture 00013" },
    { src: Buildingtexture0100, name: "Building texture 0100" },
    { src: buildingtexture0101, name: "building texture 0101" },
    { src: buildingtexture0912, name: "building texture 0912" },
    { src: buildingtexture5001, name: "building texture 5001" },
    { src: buildingtexture05001, name: "building texture 05001" },
    { src: BUILDINGTEXTURE5011, name: "BUILDING TEXTURE 5011" },
    { src: buildingtexture6090, name: "building texture 6090" },
    { src: buildingtexture09800, name: "building texture 09800" },
    { src: buildingtexture50902, name: "building texture 50902" },
    { src: buildingtexture500012, name: "building texture 500012" },
    { src: buildingtextureoffice0990, name: "building texture office 0990" },
    { src: buildingtextureVBIIX, name: "building texture VBIIX" },
    { src: buildingtextureVIIIXI, name: "building texture VIIIXI" },
    { src: BUILDINGTEXTUREviiui, name: "BUILDING TEXTURE viiui" },
    { src: buildingtextureVXXXZ, name: "building texture VXXXZ" },
    { src: Buildingtexture, name: "Building texture" },
    { src: buildingtx9DC, name: "building tx 9DC" },
    { src: buildingtx0070, name: "building tx 0070" },
    { src: buildingtx00701, name: "building tx 00701" },
    { src: buildingtx0971, name: "building tx 0971" },
    { src: BuildingtxCXII, name: "Building tx CXII" },
    { src: buildingtxVXXI, name: "building tx VXXI" },
    { src: buildingwindowstexture, name: "building windows texture" },
    { src: Buildingwithtreetexture, name: "Building with tree texture" },
    { src: BuildingXXVIII, name: "Building XXVIII" },
    { src: BuildingXXX, name: "Building XXX" },
    { src: BuildingnIX, name: "BuildingnIX" },
    { src: buildngtextureVIIIIV, name: "buildng texture VIIIIV" },
    { src: buldingtexture00014, name: "bulding texture00014" },
    { src: Canteen90, name: "Canteen 90" },
    { src: cirybuildingtexture0012, name: "ciry building texture 0012" },
    { src: CityBuildingtexture, name: "City Building texture" },
    { src: factorybuildingtexture, name: "factory building texture" },
    { src: floortexture1, name: "floor texture 1" },
    { src: floortexture02, name: "floor texture 02" },
    { src: glassbuildingtexture, name: "glass building texture" },
    { src: Gouda043, name: "Gouda 043" },
    { src: GradientColortexture, name: "Gradient Color texture" },
    { src: grasstexture001, name: "grass texture 001" },
    { src: Heerhugowaard, name: "Heerhugowaard" },
    { src: HendrikIdo, name: "Hendrik Ido " },
    { src: HertogenboschVIIIXV, name: "Hertogenbosch VIIIXV" },
    { src: Hoorn8, name: "Hoorn 8" },
    { src: Hoorn13, name: "Hoorn 13" },
    { src: Hoorn14, name: "Hoorn 14" },
    { src: Hoorn21, name: "Hoorn 21" },
    { src: housefloortexture, name: "house floor texture" },
    { src: housetexture001, name: "house texture 001" },
    { src: housetexture801, name: "house texture 801" },
    { src: housewindow090, name: "house window 090" },
    { src: Lelystad1, name: "Lelystad 1" },
    { src: Lelystad13, name: "Lelystad 13" },
    { src: Lelystad14, name: "Lelystad 14" },
    { src: Lelystad15, name: "Lelystad 15" },
    { src: newbuildingtexture5050, name: "new building texture 5050" },
    { src: newbuildingtexture, name: "new building texture" },
    { src: newbuildingtexture, name: "new building texture" },
    { src: newdesignbuildingtexture, name: "new design building texture" },
    { src: newdesignbuildingtx, name: "new design building tx" },
    { src: officebuilding0102, name: "office building 0102" },
    { src: officebuildingtexture, name: "office building texture" },
    { src: OfficebuildingV, name: "Office building V" },
    { src: OfficebuildingVI, name: "Office building VI" },
    { src: OfficeI, name: "Office I" },
    { src: OfficeII, name: "Office II" },
    { src: OfficeIV, name: "Office IV" },
    { src: OfficebuildingIX, name: "Office-building IX" },
    { src: OfficebuildingIX, name: "Office-building-IX" },
    { src: OfficebuildingVI, name: "Office-building-VI" },
    { src: Oosterhout25, name: "Oosterhout 25" },
    { src: Oosterhout26, name: "Oosterhout 26" },
    { src: Oosterhout28, name: "Oosterhout 28" },
    { src: Oosterhout30, name: "Oosterhout 30" },
    { src: Oosterhout31, name: "Oosterhout 31" },
    { src: Purmerend3, name: "Purmerend 3" },
    { src: Purmerend18, name: "Purmerend 18" },
    { src: rockgrasstexture, name: "rock grass texture" },
    { src: RotterdamIV, name: "Rotterdam-IV" },
    { src: Schiedam1, name: "Schiedam 1" },
    { src: Schiedam5, name: "Schiedam 5" },
    { src: Schiedam6, name: "Schiedam 6" },
    { src: Schiedam7, name: "Schiedam 7" },
    { src: Schiedam11, name: "Schiedam 11" },
    { src: texture000019, name: "texture 000019" },
    { src: texture3012, name: "texture 3012" },
    { src: texturebuilding0021, name: "texture building 0021" },
    { src: texturehouse4001, name: "texture house 4001" },
    { src: Tilburg43, name: "Tilburg 43" },
    { src: Tilburg44, name: "Tilburg 44" },
    { src: tilebuildingtexture, name: "tile building texture" },
    { src: Vlaardingen8, name: "Vlaardingen 8" },
    { src: walltexture01, name: "wall texture 01" },
    { src: walltexture004, name: "wall texture 004" },
    { src: wallVXIIX, name: "wall VXIIX" },
    { src: wallwindowtexture400, name: "wall window texture 400" },
    { src: wallwindowtexture, name: "wall window texture" },
    { src: wallwindowVIIO, name: "wall window VIIO" },
    { src: WallXX, name: "Wall XX" },
    { src: WallXXV, name: "Wall XXV" },
    { src: WindowII, name: "WindowII" },
    { src: WindowV, name: "Window V" },
    { src: WindowVI, name: "Window VI" },
    { src: windowVIIX, name: "window VIIX" },
    { src: WindowXIII, name: "Window XIII" },
    { src: WindowXVII, name: "Window XVII" },
    { src: WindowXXV, name: "Window XXV" },
    { src: WindowXXVIII, name: "Window XXVIII" },
    { src: WindowIII1024x683, name: "Window-III-1024x683" },
    { src: WindowsAndPlants, name: "Windows And Plants" },
    { src: woodbuildingtexture, name: "wood building texture" }


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
            <Route path="/models" element={<ModelList />} />
            <Route path="/model/:modelId" element={<ModelDetail />} />
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
