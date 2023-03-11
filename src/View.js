import React from 'react'
import Navbar from "./Pages/Navigation/Nav" 
import Hero_Section from "./Pages/HeroSection/hero"
import Features from "./Pages/FeaturesSection/features"
import CTA_Footer from "./Pages/CTAfooter/cta"
// import Footer_Section from "./Pages/CTAfooter/footer"


const View = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero_Section></Hero_Section>
      <Features></Features>
      <CTA_Footer></CTA_Footer>
      {/* <Footer_Section></Footer_Section> */}
    </div>
  )
}

export default View
