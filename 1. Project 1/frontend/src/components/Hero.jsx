import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='section-padding bg-gradient-to-br from-purple-50 to-amber-50'>
      <div className='flex flex-col border-2 border-purple-200 rounded-3xl shadow-2xl sm:flex-row overflow-hidden bg-card'>
        {/* Hero left side */}
        <div className='flex items-center justify-center w-full py-16 px-8 bg-gradient-to-br from-purple-50 to-white sm:w-1/2'>
          <div className='text-on-bg space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='w-12 md:w-16 h-[3px] bg-brand rounded-full'></div>
              <p className='text-sm font-semibold md:text-base tracking-wider'>EFFORTLESS SHOPPING</p>
            </div>
            <h1 className='text-4xl leading-tight sm:py-4 lg:text-6xl prata-regular text-brand'>Shop Smart, Shop Easy</h1>
            <div className='flex items-center gap-3'>
              <button className='btn-primary'>EXPLORE NOW</button>
              <div className='w-12 md:w-16 h-[2px] bg-brand rounded-full'></div>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <img className='w-full sm:w-1/2 h-96 sm:h-auto object-cover' src={assets.hero_img} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero