import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const History = () => {
    return (
        <div className='flex flex-col gap-10 items-center py-10 lg:px-60 lg:py-20 border-t lg:text-2xl text-justify bg-gray-100 '>
           {/* <img className='w-full h-[450px] object-cover' src={assets.history} alt="" /> */}
            <h2 className='text-4xl lg:text-6xl'>Bizim Hekayəmiz </h2>
            <p><strong><Link to='/' target=''>Warderobe</Link></strong>-un yaranma hekayəsi bir ehtiyacdan qaynaqlanır. Bir ana olaraq, uşaqlarımın böyüdükcə geyə bilmədiyi, lakin hələ də yaxşı vəziyyətdə olan paltarlarını satmaq üçün uyğun bir platforma axtarırdım. Təəssüf ki, istədiyim kimi bir sayt tapa bilmədim. Buna görə də, eyni ehtiyacı olan digər valideynlərə də kömək edə biləcək bir platforma yaratmaq qərarına gəldim.

            </p>
            <p>Beləliklə, Warderobe-u yaratdıq. Burada həm yeni, həm də istifadə olunmuş geyim və aksesuarlarınızı satmaq və almaq imkanı var. Saytımız davamlı modanı dəstəkləyir və israfın qarşısını almağa çalışır. Məqsədimiz yalnız alış-verişi asanlaşdırmaq deyil, həm də dəyərli əşyaların yenidən istifadə edilməsini təşviq etməkdir.

            </p>
            <p>Warderobe ilə artıq ehtiyacınız olmayan, lakin başqaları üçün faydalı ola biləcək əşyalarınızı paylaşaraq həm cəmiyyətə, həm də təbiətə töhfə verə bilərsiniz.</p>
        </div>
    )
}

export default History