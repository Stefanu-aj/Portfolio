import HeroSection from "../Components/HeroSection";
import React from "react";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
import ContactPage from "../Pages/ContactPage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Portfolio />
      <ContactPage />
      <Footer />
    </>
  );
}
