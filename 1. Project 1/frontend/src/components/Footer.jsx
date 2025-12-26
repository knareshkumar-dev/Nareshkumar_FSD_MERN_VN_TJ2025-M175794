import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <Link to='/'>
                    <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="ShopEZ" />
                </Link>
                <p className='w-full text-gray-600 md:w-2/3'>Thank you for choosing ShopEZ! We're your one-stop destination for effortless online shopping. With a user-friendly interface and comprehensive product catalog, finding the perfect items has never been easier. Follow us on social media for exclusive deals and new arrivals. Our dedicated support team is always here to help. Subscribe to our newsletter for special discounts and be the first to know about our latest offers. Experience the future of online shopping with ShopEZ today!</p>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to='/about'>
                        <li>Delivery</li>
                    </Link>
                    <Link to='/about'>
                        <li>Privacy & Policy</li>
                    </Link>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-on-bg'>
                    <li>8220007797</li>
                    <li>knareshkumar1910@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 ShopEZ. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
