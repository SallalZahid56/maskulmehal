import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../assets/hero-video.mp4";
import hero1 from "../assets/attar-video.mp4";
import hero2 from "../assets/oud-video.mp4";
import hero3 from "../assets/hero-image3.jpg";

const HeroSection = () => {
    // Array of media (images + videos)
    const slides = [
        { type: "video", src: heroVideo },
        { type: "video", src: hero1 },
        { type: "video", src: hero2 },
        { type: "image", src: hero3 },
    ];

    const [index, setIndex] = useState(0);

    // Auto slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[100vh] sm:h-[60vh] md:h-[75vh] lg:h-[100vh overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {slides[index].type === "image" ? (
                        <img
                            src={slides[index].src}
                            alt="hero slide"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <video
                            src={slides[index].src}
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HeroSection;
