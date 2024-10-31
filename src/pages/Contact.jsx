/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Bizimlə'} text2={'əlaqə saxlayın'} />

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] object-cover' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Mağazamız</p>

          <div className="text-gray-700 flex flex-col gap-5">

            <div>
              <strong>Tel</strong>:
              <a href="tel:+994558418978" className="text-gray-600 hover:underline">+994 55-841-89-78</a>
            </div>

            <div>
              <strong> E-Mail</strong>: <a href="mailto:My-wardrobe@.com" className="text-gray-600 hover:underline">warderobe.contact@gmail.com</a>
            </div>

            <div>
              <address className="not-italic text-gray-700"><strong>Adress:</strong><br />Bakı şəhəri, Yasamal rayonu</address>

            </div>
            <div>
              <p className="text-gray-700"><strong>İş saatlarımız: <br /></strong> Həftə içi 5 gün <span className="text-gray-600"><br />09:00 - 18:00</span>
              </p>
            </div>

          </div>

          <p className="text-gray-700 ">
            Sosial şəbəkələrdə də bizi izləyərək yeniliklərdən xəbərdar olun.
          </p>
          <p className='font-semibold text-xl text-gray-600'>Warderobe-də karyera</p>
          <p className='text-gray-500'>Komandalarımız və iş yerləri haqqında ətraflı məlumat əldə edin</p>
          <a href='https://www.hellojob.az/' target='_blank' className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-[5px]'>İşləri araşdırın</a>
        </div>


      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact