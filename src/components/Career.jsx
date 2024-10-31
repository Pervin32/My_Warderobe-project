import React from 'react'
import { NavLink } from 'react-router-dom'

const Career = () => {
    return (
        <div className='flex flex-col gap-3 lg:gap-5 my-10 lg:my-20  text-xl lg:text-2xl text-justify bg-slate-50'>
            {/* <img className='w-full h-[450px] object-cover' src={assets.history} alt="" /> */}
            <h2 className='text-4xl lg:text-6xl text-center '>Karyera İmkanları</h2>
            <p><strong>Warderobe </strong>olaraq, biz davamlı modanın gələcəyini birlikdə qurmağa inanırıq. Komandamıza qoşularaq, etik dəyərləri təşviq edən innovativ bir platformada çalışma şansı əldə edəcəksiniz. Əgər yaradıcılıq, yenilikçilik və sosial məsuliyyət sizin üçün əhəmiyyətlidirsə, sizi Warderobe ailəsinə qatılmağa dəvət edirik
            </p>

            <h2 className='text-3xl'><strong>Şirkətin üstünlükləri</strong></h2>
            <p>Warderobe -də işləməyin öz üstünlükləri var. Komandanın üzvləri bir sıra böyük üstünlüklərdən istifadə edirlər, o cümlədən:</p>
            <p>• Hərtərəfli sağlamlıq planları</p>
            <p>• Limitsiz ödənişli istirahət vaxtı</p>
            <p>• Çevik, uzaqdan iş mədəniyyəti</p>
            <p>• Səxavətli valideyn və ailə məzuniyyəti</p>
            <p>• Öyrənmə və inkişaf</p>
            <p>• İşçilərin səhmdarları üçün seçim planı</p>

            <h2 className='text-3xl'><strong>Açıq Vəzifələr</strong></h2>
            <p>Mövqe yoxdur</p>
            <p>Bacarıqlar dəstinizə uyğun açıq bir rol görmürsünüzsə, bizə öz CV-nizi careers@warderobe.com ünvanına göndərin və necə töhfə verə biləcəyiniz barədə ətraflı məlumat verin. Sizdən eşitmək istərdik!</p>
            
            <NavLink to='/contact'><strong>Əlaqə üçün klikləyin.</strong></NavLink>
        </div>

    )
}

export default Career