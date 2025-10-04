import ProductGrid from "./ProductGrid"; 
import ContactUs from "./ContactUs"; 

const AboutUs = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 bg-gray-50 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        About Us
      </h1>

      {/* Paragraphs */}
      <p className="text-gray-600 max-w-3xl mx-auto mb-4">
        Welcome to <span className="font-semibold text-black">Maskul Mehal</span> — 
        your destination for premium perfumes, attars, and luxury fragrances. 
        We take pride in offering authentic and long-lasting scents for every occasion.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our mission is to redefine elegance through fragrance, 
        combining tradition and modernity in every bottle. 
        Discover products that reflect your personality and enhance your style.
      </p>

      {/* Add Existing Components */}
      <ProductGrid />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
