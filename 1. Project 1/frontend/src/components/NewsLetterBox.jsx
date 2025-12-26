import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }
    
  return (
    <div className='mt-10 text-center '>
        <p className='text-2xl font-medium text-on-bg'>Get Exclusive Deals | Subscribe Now!</p>
        <p className='mt-3 text-muted-weak'>Join ShopEZ today and unlock special discounts delivered to your inbox!</p>
        <form onClick={onSubmitHandler} className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border rounded-full overflow-hidden shadow-md sm:w-1/2'>
            <input 
                className='w-full outline-none sm:flex-1' 
                type="email" 
                placeholder='hello@gmail.com'
                required 
            />
            <button type='submit' className='px-10 py-4 text-xs text-white bg-brand hover:bg-opacity-90 transition-all'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
