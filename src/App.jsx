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

function App() {
  const [selectedCategory, setSelectedCategory] = useState("GamingWallpaper");

  // ✅ Home Page Component
  const HomePage = () => (
    <>
      <HeroSection onCategorySelect={setSelectedCategory} />
      <div style={{ marginTop: "2rem" }}>
        {selectedCategory && (
          <CategorySection category={selectedCategory} />
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
            <Route path="/category/:category/:id" element={<CategoryDetailPage />} />
          </Routes>
        </Box>

        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
