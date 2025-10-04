import { Routes, Route } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ProductPage from "./pages/ProductPage"; // 👈 import your file


function App() {
  return (
    <div>
      <TopBanner />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGrid />
              <Mission />
            </>
          }
        />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* ✅ Product Page Route */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
