import React from 'react'
import "./cta.css"

const cta = () => {
  return (
    <div>
      <div className='section footer-cta'>
            <div className='cta-foot'>
                <h1 className='footerHeader'>
                Download the app now.
                </h1>
                <p className='footer_para'>Available on your favorite store. Start your premium experience now</p>
                <div className='button_container mt-5'>
                    <button className='footer_button1 mr-4'>Playstore</button>
                    <button className='footer_button2'>Appstore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default cta
