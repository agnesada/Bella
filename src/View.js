import React from 'react'
import Navbar from "./Pages/Navigation/Nav" 
import HeroSection from "./Pages/HeroSection/hero"
import Features from "./Pages/FeaturesSection/features"
import CTAFooter from "./Pages/CTAfooter/cta"
import FooterSection from "./Pages/FooterSection/footer"


const View = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <CTAFooter></CTAFooter>
      <FooterSection></FooterSection>
    </div>
  )
}

export default View
