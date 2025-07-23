import React, { useState, useContext, createContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWallet, FaSignal, FaPalette, FaShieldAlt,
  FaLanguage, FaUsers, FaFacebook, FaTwitter,
  FaInstagram, FaLinkedin
} from "react-icons/fa";

// Language context
const LanguageContext = createContext();
const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "English");

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

function HomePage() {
  const { language, changeLanguage } = useLanguage();

  const features = [
    { title: "Mobile Wallet", desc: "Store and send funds easily.", icon: <FaWallet size={40} className="text-orange-500 mx-auto mb-4" /> },
    { title: "Offline Support", desc: "Works even in low-connectivity zones.", icon: <FaSignal size={40} className="text-orange-500 mx-auto mb-4" /> },
    { title: "Cultural UI", desc: "Colors, language, and layout inspired by African values.", icon: <FaPalette size={40} className="text-orange-500 mx-auto mb-4" /> },
    { title: "Secure Transfers", desc: "Verified and fraud-protected payments.", icon: <FaShieldAlt size={40} className="text-orange-500 mx-auto mb-4" /> },
    { title: "Multi-language", desc: "Swahili, Yoruba, Hausa, French, and more.", icon: <FaLanguage size={40} className="text-orange-500 mx-auto mb-4" /> },
    { title: "Community Support", desc: "Built with local voice and inclusive feedback.", icon: <FaUsers size={40} className="text-orange-500 mx-auto mb-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}

<section
  className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
  style={{ backgroundImage: "url(/images/blueprint-african-bg.jpg)" }} // ✅ Image path
>
  <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-2xl"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Built for <span className="text-orange-400">Africa</span>. Powered by <span className="text-orange-500">Us</span>.
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Empowering people through secure payments, cultural unity, and community support.
    </p>
    <Link to="/login">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-lg font-bold shadow-lg"
      >
        Get Early Access
      </motion.button>
    </Link>
    <div className="flex justify-center mt-6 space-x-3 text-sm">
      <span className="bg-white text-black px-3 py-1 rounded-full">Secure & Licensed</span>
      <span className="bg-white text-black px-3 py-1 rounded-full">Mobile-First</span>
      <span className="bg-white text-black px-3 py-1 rounded-full">Community-Focused</span>
    </div>
  </motion.div>
</section>

      {/* Features Section */}
      <section className="py-16 bg-[#fff4eb] text-center">
        <h2 className="text-4xl font-bold text-orange-500">Africa’s Trusted Wallet</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Simple. Secure. Seamlessly local. Designed for everyone — from urban youth to rural communities.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-orange-100 text-center">
        <h3 className="text-2xl font-bold text-orange-600">Trusted by families, artisans, traders, and youth across Africa.</h3>
        <p className="mt-2 text-gray-700">Your money. Your culture. Your Tikwave.</p>
      </section>

      {/* Language Selector */}
      <section className="py-12 bg-orange-500 text-white text-center">
        <h3 className="text-2xl font-bold">Coming in Swahili, Yoruba, Hausa, French & More</h3>
        <div className="flex justify-center flex-wrap gap-3 mt-4">
          {["English", "Swahili", "Yoruba", "Hausa", "Amharic"].map((lang, idx) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              onClick={() => changeLanguage(lang)}
              className={`bg-white px-4 py-2 rounded-full text-sm font-medium text-orange-600 shadow ${
                language === lang ? "bg-orange-200" : ""
              }`}
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-2">Tikwave Africa</h4>
            <p className="text-sm max-w-md mx-auto">
              Designed with African culture, unity, and progress in mind. Together we grow.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-orange-400">Community</a>
            <a href="#" className="hover:text-orange-400">Security</a>
            <a href="#" className="hover:text-orange-400">Support</a>
            <a href="#" className="hover:text-orange-400">FAQ</a>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <form className="mt-6 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full text-black w-60" />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r-full">Get Updates</button>
          </form>
          <p className="mt-6 text-xs text-gray-400">&copy; 2025 Tikwave Africa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}