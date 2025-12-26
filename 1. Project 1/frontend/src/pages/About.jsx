import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px] rounded-2xl shadow-lg' src={assets.about_img} alt="About Photo" />
        <div className='flex flex-col justify-center gap-6 text-muted md:w-2/4'>
          <p>Welcome to ShopEZ, your one-stop destination for effortless online shopping. We believe shopping should be simple, enjoyable, and accessible to everyone. Our comprehensive product catalog features detailed descriptions, customer reviews, and available discounts to help you make informed decisions with confidence.</p>
          <p>At ShopEZ, we prioritize your satisfaction above all. From browsing our user-friendly interface to receiving instant order confirmation, we ensure a seamless shopping experience at every step. Our secure checkout process protects your information while our dedicated support team is always ready to assist. Thank you for choosing ShopEZ—where shopping is made easy!</p>
          <b className='text-on-bg'>Our Mission</b>
          <p>At ShopEZ, our mission is to make online shopping effortless and enjoyable for everyone. We strive to provide a comprehensive platform where customers can easily find quality products, read genuine reviews, and make informed purchasing decisions with confidence.</p>
          <b className='text-on-bg'>Our Vision</b>
          <p>Our vision is to become the most trusted and user-friendly e-commerce platform globally. We aim to revolutionize online shopping by combining cutting-edge technology with exceptional customer service, making ShopEZ the go-to destination for all your shopping needs.</p>
        </div>
      </div>
      <div className='py-4 text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border-2 border-indigo-100 rounded-tl-2xl md:rounded-l-2xl md:px-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-white shadow-md'>
          <b className='text-brand'>Quality Assurance</b>
          <p className='text-muted'>At ShopEZ, quality is our promise. Every product is carefully vetted and verified to meet our high standards. Shop with confidence knowing that we ensure excellence in every purchase.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border-2 border-pink-100 md:px-16 sm:py-20 bg-gradient-to-br from-pink-50 to-white shadow-md'>
          <b className='text-brand-secondary'>Effortless Shopping</b>
          <p className='text-muted'>ShopEZ delivers a seamless experience with intuitive browsing, detailed product information, customer reviews, fast shipping, and hassle-free returns. Your convenience is our priority.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border-2 border-amber-100 rounded-br-2xl md:rounded-r-2xl md:px-16 sm:py-20 bg-gradient-to-br from-amber-50 to-white shadow-md'>
          <b className='text-accent'>Exceptional Support</b>
          <p className='text-muted'>At ShopEZ, exceptional customer service is our commitment. Our friendly support team is available to assist you with any questions, ensuring a smooth and satisfying shopping journey.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
