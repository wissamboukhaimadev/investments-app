import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logoImage from '../assets/referral.png'

export default function Slides() {
  return (
    <div className='bg-gray-600' style={{height:'calc(100% - 60px)'}} >
      <Carousel  autoPlay={true} infiniteLoop>
                <div>
                    <img src={logoImage} alt='imh' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={logoImage} alt='imh'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logoImage} alt='imh' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}
