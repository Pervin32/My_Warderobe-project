import React from 'react'
import { NavLink } from 'react-router-dom'

const TermsOfServis = () => {
    return (
        <div className='text-justify w-[400px] sm:w-[550px] lg:w-[750px] m-auto text-sm sm:text-sm md:text-lg lg:text-xl my-10 lg:my-20'>


            <div className='flex flex-col  gap-10 lg:px-30'>
                <h1 className='text-4xl lg:text-6xl  text-center'>Xidmət Şərtləri</h1>
                <h3 className='text-xl lg:text-2xl'><em>Bu Xidmət Şərtləri Warderobe veb saytında ve xidmətlərimizdə tətbiq olunan qaydaları ve şərtləri müəyyən edir. Saytımıza daxil olmaqla veya xidmətlərimizdən istifade etməklə, bu şərtləri qəbul etmiş olursunuz. Zəhmət olmasa da, Xidmət Şərtlərini diqqətlə oxuyun.

                </em></h3>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'> <strong>1. Ümumi Şərtlər</strong></h2>
                    <p>1.1. Warderobe xidmətlərindən istifadə etməklə, bu şərtlərə əməl etməyə sabırla verirsiniz.</p>
                    <p>1.2. Warderobe, istifadəçilərin şəxsi məlumatlarını qorumaq ve təhlükəsizliyini təmin etmək məqsədilə Məxfilik Siyasətinə uyğun hərəkət edir. Bu sənədlə sakinleşen hər kəs eyni zamanda Məxfilik Siyasətini dəqəbul sayılmış.

                    </p>
                    <p>1.3. Warderobe veb saytının ve xidmətlərinin məzmunu ve funksionalliği bizi rahatsız ediyor. Bu hüquqlar kanunla korunur.</p>

                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>2. İstifadeçi Hesabı</strong></h2>

                    <p>2.1. Warderobe-da hesab yaratımı üç kullanımlı e-poçt ünvanı ve güvenilir olması gereken bir şeydir. İstifadəçi məlumatlarının dəqiqliyindən ve təhlükəsizliyindən məsuldur.

                    </p>
                    <p> 2.2. İstifadəçi hesab məlumatlarının üçüncü şəxslərlə paylaşılması tövsiyə edilmir. Bunlardan icazəsiz istifadə olunduğunuzu düşündünüz halda, dərhal bizimlə əlaqə saxlamalısınız.</p>
                    <p> 2.3. Warderobe, kullanıcı hesabını kullanıp dondurmayı tercih etti ve bu nedenle kullanımdəçinin bu şərtləri pozlandığı müəyyən edilərsə.</p>

                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>3. Məhsulların Satışı ve Alışı</strong></h2>

                    <p>3.1. Gardırop platformunda ikinci əl geyim ve aksessuarların alqı-satqısı mümkündür. İstifadəçilər məhsulları təsvirlərə uyğun olaraq yükləməli ve səliqəli şəkildə təqdim etməlidirlər.

                    </p>
                    <p>3.2. Satıcılar məhsulun vəziyyəti hakqqında dürüst məlumat verməlidirlər. Alıcının yanlış məlumat əsasında aldığı məhsul qaytarıla bilər.

                    </p>
                    <p> 3.3. Məhsulun ödemesi ve çatdırılması istifadəçi ve satıcılar arasında dayanıklılaşılır. Gardırop, süreç boyunca çatlama ve kırılma tehlikesiyle karşı karşıyadır.

                    </p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'> <strong>4. İstifade Qaydaları</strong></h2>
                    <p>4.1. İstifadəçilər platformdan yalnız kanuni ve etik məqsədlər üçün kullanımlıdır.</p>
                    <p>4.2. Aşağıdakı hərəkətlər qadağandır:</p>
                    <p>• Nifrət, zorakılıq ve kanunsuz məzmunun yayımlanması.</p>
                    <p>• Saxta məlumatların ve məhqir düzenleyen məzmunun yerləşdirilməsi.</p>
                    <p>• Başqa şəxslərin hesablarına icazəsiz giriş cəhdləri.</p>
                    <p>4.3. Bu, platformdan uzak bir şekilde istifade edilmiş bir pozdur.</p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>5. Metodoloji</strong></h2>
                    <p>5.1. Warderobe, herhangi bir işlem yapmadan önce istifade etti, ancak biz her türlü teknik veriyi veya sistem yönetimini bir çok uygulama için kullandık.</p>
                    <p>5.2. Platform, çok sayıda hareket kabiliyetine sahip ve bizi rahatsız ediyor. Bu mövzularda yaranan hər hansı narazılılar satıcı ilə həll edilmelidir.

                    </p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>6. Məsuliyyətin Məhdudlaşdırılması</strong></h2>


                    <p> 6.1. Warderobe, bir halda istifadəçinin platformundan istifade etti, yaranan hər hansı ziyana, itkilərə ve ya uğursuzluklara görə məsuliyyət daşımım.</p>
                    <p> 6.2. İstifadəçilər platforma vasitəsilə əldə etdikləri məlumat ve ya məhsulların keyfiyyəti, dəqiqliyi ve ya gözləntilərinə uyğunluğu üçün özləri məsuliyyət daşıyır.</p>

                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>7. Şərtlərin Dəyişdirilmeəsi</strong></h2>
                    <p>7.1. Warderobe bu şərtləri istənilən vaxt dəyişdirmək hüququna malikdir. Hər hansı dəyişikliklər veb saytımızda yayımlanacaq ve dərc edildiyi andan qüvvəyə minəcəkdir.</p>
                    <p>7.2. İstifadəçilər şərtlərin dəyişikliklərini mütəmadi olaraq yoxlamalıdırlar. Davamlı istifadə, yenilənmiş şərtlərin qəbul edilməsi deməkdir.</p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>8. Hüquqi Məsələlər</strong></h2>
                    <p>8.1. Bu Xidmət Şərtləri ve kendisine bağlı yaranan hər hansı mübahisələr yerli kanununvericiliyə əsaslanır ve onunla tənzimlənir.</p>
                    <p>8.2. Hər hansı mübahisə yaranarsa, bu, əvvəlcə qarşılıqlı sakinleşme yolu ilə həll edilməyə çalışılmalıdır. Razılaşma mümkün olmuyorqda, mübahisə yerli məhkəmələrdə həll ediləcək.

                    </p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <h2 className='text-2xl'><strong>Əlaqə</strong></h2>
                    <p>Xidmət Şərtləri ilə bağlı hər hansı sualiniz ve ya narazılığınız varsa, <NavLink to='/contact'><strong>buradan</strong> </NavLink> bizimlə əlaqə saxlaya bilərsiniz.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default TermsOfServis