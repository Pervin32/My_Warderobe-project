/* eslint-disable no-unused-vars */
import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <div className='text-center mb-20'>
            <p className='text-2xl font-medium text-gray-800'>Gəlin əlaqə saxlayaq!</p>
            <p className='text-gray-400 mt-3'>Yeni məhsul buraxılışları, üslub ideyaları və sair haqqında ilk xəbərdar olmaq üçün abunə olun.</p>

            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='E-poçtunuzu daxil edin' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>ABUNƏ OLUN</button>

            </form>
        </div>
    )
}

export default NewsletterBox