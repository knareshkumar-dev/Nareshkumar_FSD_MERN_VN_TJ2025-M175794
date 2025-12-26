import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();

  return showSearch ? (
    <div className='text-center border-t border-b bg-gradient-to-r from-indigo-50 to-pink-50 py-4'>
        <div className='inline-flex items-center justify-center w-3/4 px-5 py-3 mx-3 my-2 border-2 border-brand rounded-full sm:w-1/2 bg-white shadow-md'>
            <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className='flex-1 text-sm outline-none bg-inherit placeholder-gray-500' 
                type="text" 
                placeholder='Search products...' 
            />
            <img className='w-4 ml-2' src={assets.search_icon} alt="Search" />
        </div>
        <img 
            onClick={() => setShowSearch(false)} 
            className='inline w-3 cursor-pointer hover:opacity-70 transition-all' 
            src={assets.cross_icon} 
            alt="Close" 
        />
    </div>
  ) : null
}

export default SearchBar