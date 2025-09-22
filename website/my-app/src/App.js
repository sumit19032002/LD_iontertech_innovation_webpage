import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import SuperPowers from "./components/SuperPowers";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      
      <Hero />
      <About />
      {/* Other sections */}
      <Services />   {/* ✅ This will render your Services section */}
      {/* Other sections... */}
      <Work />
      {/* Other sections... */}
      {/* Other sections... */}
      <SuperPowers />
      {/* Other sections... */}
      <>
      {/* Other sections */}
      <ContactSection />
    </>
    </div>
  );
}


