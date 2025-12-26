import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='section-padding bg-secondary'>
      <div className='flex flex-col justify-around gap-8 text-center sm:flex-row sm:gap-4'>
        <div className='bg-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-brand group'>
          <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform'>
            <img src={assets.exchange_icon} className='w-8 h-8' alt="Exchange" />
          </div>
          <h3 className='mb-4 text-lg font-bold text-brand'>Easy Returns</h3>
          <p className='text-muted text-sm leading-relaxed'>
            Hassle-free returns within 10 days of purchase.
          </p>
        </div>
        
        <div className='bg-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-100 hover:border-brand-secondary group'>
          <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform'>
            <img src={assets.quality_icon} className='w-8 h-8' alt="Quality" />
          </div>
          <h3 className='mb-4 text-lg font-bold text-brand-secondary'>Premium Quality</h3>
          <p className='text-muted text-sm leading-relaxed'>
            ShopEZ ensures top-quality products for every purchase.
          </p>
        </div>
        
        <div className='bg-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-accent group'>
          <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform'>
            <img src={assets.support_img} className='w-8 h-8' alt="Support" />
          </div>
          <h3 className='mb-4 text-lg font-bold text-accent'>24/7 Support</h3>
          <p className='text-muted text-sm leading-relaxed'>
            Round-the-clock customer support via chat, email, or phone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy