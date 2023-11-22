"use client"
import React from 'react'
import MainButton  from './MainButton'
import Image from "next/image";


const handleScroll = () => {

}



function Hero() {
  return (
    <div className = "hero">
        <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Get the best combat sports gear at the best prices!
        </h1>
        <p className='hero__subtitle'>
            Whether you are a hobbyist or a professional athlete, we have the best products for you.
        </p>

        <MainButton 
            title="Go To Products"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
        
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero