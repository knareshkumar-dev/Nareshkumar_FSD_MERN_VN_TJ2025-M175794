import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px] rounded-2xl shadow-lg' src={assets.contact_img} alt="Contact Photo" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-on-bg'>Contact ShopEZ</p>
          <p className='text-on-bg'>Customer Support<br />+1 (800) SHOP-EZ</p>
          <p className='text-on-bg'>Email: support@shopez.com</p>
          <p className='text-xl font-semibold text-on-bg'>Careers at ShopEZ</p>
          <p className='text-on-bg'>Join our team! Send your CV to careers@shopez.com and be part of the future of online shopping.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 bg-brand text-white hover:opacity-90 rounded-lg shadow-md hover:shadow-lg'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
