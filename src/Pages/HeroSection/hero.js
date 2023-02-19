import React from 'react'
import "./hero.css"
import HeroImage from "../../assets/heroImage1.svg"
import HeroImage2 from "../../assets/heroImage2.svg"

const hero = () => {
  return (
    <div className='section mt-2'>
      <div className='heroimg'>
        <img className='ctaImage' src={HeroImage}/>
      </div>
      <div className='centered'>
            <p className='mini'>Food app</p>
            <h1>
                Why stay hungry when <br/>
                you can order form Bella Onojie
            </h1>
            <p>Download the bella onoje's food app now on</p>
            <div className='buttonContainer'>
                <button className='buttonSet1 mr-4'>Playstore</button>
                <button className='buttonSet2'>Appstore</button>
            </div>
            {/* <div >
                <img className='ctaImage2' src={HeroImage2}/>
            </div> */}
      </div>
    </div>
  )
}

export default hero
