import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import BestSeller from './BestSeller'

const Etik = () => {
    return (
        <div className='flex flex-col gap-10 items-center lg:px-60 py-10 border-t lg:text-2xl text-justify'>
            <div className='flex items-center gap-4'>
                <p className="w-8 h-[2px] bg-black"></p>
                <h2 className='text-4xl lg:text-6xl'>Etika və Davamlılıq</h2>
                <p className="w-8 h-[2px] bg-black"></p>
            </div>

            <img src={assets.etik} alt="etik" />

            <h3 className='text-3xl'><em>Warderobe-un Əsas Dəyərləri</em></h3>
            
            <em className='flex flex-col gap 10 items-center'><p><strong><Link to='/' target=''>Warderobe</Link></strong> olaraq, etik dəyərlər və davamlılıq prinsipləri fəaliyyətimizin mərkəzində dayanır. Geyim sənayesində tez-tez qarşılaşdığımız israfçılıq və sürətli moda problemi bizi daha məsuliyyətli bir yanaşma ilə hərəkət etməyə sövq etdi. Biz inanırıq ki, həm yer üzünü qorumaq, həm də cəmiyyətimizə fayda vermək üçün atdığımız hər bir addım vacibdir.</p>
                <p>Davamlılıq, təkcə təkrar istifadə və yenidən dəyərləndirmə deyil, eyni zamanda resurslardan ağıllı istifadə, tullantıların azaldılması və ekoloji izimizin minimuma endirilməsi deməkdir. Warderobe-da artıq ehtiyacınız olmayan, lakin başqalarının istifadə edə biləcəyi geyim və aksessuarları paylaşaraq həm modaya yeni bir həyat bəxş edir, həm də israfı minimuma endirməyə kömək edirsiniz. Hər bir məhsulun təkrar istifadəsi, təbiətə zərər vermədən daha uzun müddət dövriyyədə qalmasına imkan yaradır.</p>
                <p>Etik baxımdan, biz yalnız məhsullarımızın alınıb-satılması ilə kifayətlənmirik, eyni zamanda iş ortaqlarımızın və tədarükçülərimizin də ədalətli və etik iş praktikalarına riayət etmələrinə diqqət edirik. Ədalətli əmək haqqı, işçi haqlarının qorunması və düzgün iş şəraitinin təmin olunması bizim üçün önəmlidir. Etik istehsal və alış-veriş proseslərimizlə həm modaya, həm də insan haqlarına hörmətlə yanaşırıq.

                </p>
                <p>Warderobe ilə həm təbiətə, həm cəmiyyətə fayda verən bir modaya doğru addım atın. Əşyalarınızı təkrar dövriyyəyə buraxaraq etik və davamlı modanın bir hissəsi olun!</p>
            </em>

            <BestSeller />
        </div >
    )
}

export default Etik