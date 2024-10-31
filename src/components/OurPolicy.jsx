/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="ourpolicy" />
            <p className='font-semibold'>Asan Mübadilə İmkanı</p>
            <p className='text-gray-400'>Biz əngəlsiz mübadilə imkanı təklif edirik</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="ourpolicy" />
            <p className='font-semibold'>7 Gün Ərzində Geri Qaytarma İmkanı</p>
            <p className='text-gray-400'>7 gün pulsuz qaytarma imkanı təqdim edirik</p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="ourpolicy" />
            <p className='font-semibold'>Ən yaxşı müştəri dəstəyi</p>
            <p className='text-gray-400'>Biz 24/7 müştəri dəstəyi təqdim edirik</p>
        </div>
    </div>
  )
}

export default OurPolicy