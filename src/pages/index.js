import React from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/pricing";
import FAQSection from "@/components/faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";
export default function index() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Pricing/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
      {/* <Login /> */}
    </>
  );
}
