/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-12 border-t'>
        <Title text1={'HAQQIMIZDA'} />
      </div>

      <div className='mb-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.history} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Qarderobunuzu təşkil etmək və ya yeni üslublar kəşf etmək istəsəniz, Warderobe məhsullarınızı siyahıya salmağı və alıcılarla əlaqə saxlamağı asanlaşdırır.</p>
          <p>Platformamız sadə və istifadəçi dostu təcrübə təklif edir ki, burada satıcılar məhsulları vəziyyətinə, ölçüsünə və rənginə görə kateqoriyalara ayıra bilir və alıcılara axtardıqlarını tez tapmağa imkan verir.</p>
          <b className='text-gray-800'>Missiyamız</b>
          <p>Biz planetə təhlükə yaratmayan modaya inanırıq və şüurlu alıcılar və satıcılar cəmiyyətini inkişaf etdirmək üçün buradayıq. Biz birlikdə daha davamlı gələcək yarada bilərik, hər dəfə bir geyim.</p>
          <p>Dəbin məqsədə uyğun olduğu Warderob-u seçdiyiniz üçün təşəkkür edirik!
          </p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'NİYƏ'} text2={'BİZİ SEÇİRSİNİZ'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Keyfiyyət Təminatı:</b>
          <p className='text-gray-600'>Saytımızda satışa çıxarılan bütün ikinci əl geyim və aksesuarlar ciddi yoxlama prosesindən keçir. Hər bir məhsulun keyfiyyəti və təmizliyi baxımından, bu da keyfiyyətə ən yaxşı vəziyyətdə məhsulların çatdırılmasını təmin edir. Biz, keyfiyyətli cavab məhsulları təkliflərinə prioritet tuturuq.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Rahatlıq:</b>
          <p className='text-gray-600'>Alış-veriş təcrübənizin rahatlığı bizim üçün vacibdir. Saytımızda asan naviqasiya və sadələşdirilmiş sifariş prosesi ilə məhsulu tez bir zamanda tapa və sifariş edə bilərsiniz. Məhsullarımız haqqında məlumat və məlumatlar detallı şəkildə təqdim olunur ki, seçimlə rahatlıqla qərar verə bilərsiniz.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Müştəri Xidmətləri:</b>
          <p className='text-gray-600'>Müştəri istifadə imkanları bizim əsas prioritetimizdir. Sorğularınıza tez bir zamanda cavab olaraq, ehtiyaclarınıza uyğun həll yolları təklif edən əlavə xidmətimiz daim sizin yanınızdadır. Hər hansı bir sualınız və ya probleminiz olduğu kimi, köməyimizə kömək etmək üçün daha çox hazırdır.</p>
        </div>
      </div>
    </div>
  )
}

export default About