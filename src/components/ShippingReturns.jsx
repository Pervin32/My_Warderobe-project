import React from 'react'

const ShippingReturns = () => {
    return (
        <div className='text-justify w-[400px] sm:w-[550px] lg:w-[750px] m-auto text-sm sm:text-sm md:text-lg lg:text-xl my-10 lg:my-20'>


            <div className='flex flex-col  gap-10 lg:px-30'>
                <h1 className='text-4xl lg:text-6xl text-center '>Çatdırılma və Qaytarma Qaydaları</h1>


                <div className='flex flex-col  gap-4'>
                    <h2 className='text-2xl'> <strong>Çatdırılma</strong></h2>
                    
                    <p>• Satıcılar məhsulları birbaşa alıcılara göndərir. Çatdırılma şərtləri satıcı və alıcı arasında razılaşdırılır.</p>
                    <p> • Çatdırılma müddəti və qiyməti məhsulun yerləşdiyi yerə və seçilən çatdırılma xidmətinə görə dəyişə bilər.</p>
                    <p>• Warderobe çatdırılma prosesinə birbaşa nəzarət etmir, buna görə satıcı və alıcı arasında bağlanmış razılaşmaların düzgün yerinə yetirilməsinə məsuliyyət daşımır.
                    </p>

                </div>

                <div className='flex flex-col  gap-4'>
                    <h2 className='text-2xl'><strong>Qaytarma
                    </strong></h2>

                    <p>• Alıcı məhsulu aldıktan sonra 14 gün ərzində qaytarma tələb edə bilər. Qaytarma şərtləri satıcı tərəfindən təyin olunur və məhsulun vəziyyətinə görə dəyişə bilər.</p>
                    <p> • Məhsulun qüsurlu olması və ya təsvirə uyğun gəlməməsi halında, alıcı geri qaytarma hüququna malikdir.</p>

                </div>
            </div>
        </div>
    )
}

export default ShippingReturns