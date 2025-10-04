/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */


const TopBanner = () => {
  const messages = [
    "🚚 Free Delivery in 2-3 Days",
    "✨ Free Delivery on Orders Over Rs. 2999",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
    // ✅ no need to add messages.length since it's static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-black text-white py-2 text-center shadow-md overflow-hidden">
      <div className="h-6 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute text-sm md:text-base font-medium"
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TopBanner;
