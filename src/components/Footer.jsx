import React, { useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

import { useLocation } from 'react-router-dom';



const Footer = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Səhifəni yuxarı çəkir
    }, [location]);

    return (
        <div className='border-t bg-gray-700 text-white px-4 sm:px-[5vw] md:px-|7vw] lg:px-[9vw]'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-10 my-20 text-sm'>

                <div>
                    <Link to='/'> <img src={assets.logo_footer} className='mb-10 w-40' alt="logo" /></Link>
                    <p className='w-full md:w-2/3 text-white'>
                        Warderobe ilə geyimlərinizə ikinci şans verin. Davamlı moda üçün bizimlə birlikdə addım atın. Yer üzünə və cəmiyyətə töhfə vermək hər birimizdən başlayır.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>ŞİRKƏT</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <NavLink to='/history'> Bizim Hekayəmiz </NavLink>
                        <NavLink to='/etik'> Etika və Davamlılıq </NavLink>
                        <NavLink to='/career'>Karyera İmkanları </NavLink>

                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Kömək edin</p>
                    <ul className='flex flex-col gap-1 text-white'>

                        <NavLink to='/policy'> Məxfilik siyasəti </NavLink>
                        <NavLink to='/termsofservice'>Xidmət Şərtləri</NavLink>
                        <NavLink to='/shippingreturns'>Çatdırılma və Qaytarma Qaydaları</NavLink>

                    </ul>
                </div>





                <div className="text-white flex flex-col gap-5">
                    <p className='text-xl font-medium'><NavLink to='/contact'>ƏLAQƏ</NavLink></p>
                    <div className='flex flex-col gap-5'>

                        <p>Bazar ertəsi-Cümə, <strong>saat 9:00-dan 18:00-a</strong> kimi bizə zəng edin
                            və ya istənilən vaxt e-poçt göndərin!</p>
                        <p>
                            <strong>Tel</strong>:
                            <a href="tel:+994558418978" className="text-white hover:underline">+994 55-841-89-78</a>
                        </p>


                        <p>
                            <strong> E-Mail</strong>: <a href="mailto:My-wardrobe@.com" className="text-white hover:underline">warderobe.contact@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <hr />
                <div className='flex flex-col py-5 text-sm text-center'>
                    <p className=''>Copyright 2024@ warderobe.com - Bütün hüquqlar qorunur.</p>
                    <p>Power By Parvin Shirinova</p>
                </div>
            </div>
        </div>
    )
}

export default Footer