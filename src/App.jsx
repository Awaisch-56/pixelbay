import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

function App() {
  const categories = {
    Nature_Images: ["/pic.jpeg", "/pic2.jpg", "/pic.jpeg", "/pic2.jpg"],
  };

  // ✅ Home Page Component
  const HomePage = () => (
    <>
      <HeroSection />
      <div style={{ marginTop: "2rem" }}>
        {Object.entries(categories).map(([name, images]) => (
          <CategorySection key={name} category={name} images={images} />
        ))}
      </div>
    </>
  );

  return (
 <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <BrowserRouter>
      <Navbar />

      {/* Main content grows to push footer down */}
      <Box flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      {/* Footer always at bottom */}
      <Footer />
    </BrowserRouter>
    </Box>
  );
}

export default App;
