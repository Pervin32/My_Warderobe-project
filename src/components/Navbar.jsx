/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Login from '../pages/Login';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { getCartCount } = useContext(ShopContext)

 // Modalın görünürlüğünü kontrol edən state
 const [modalVisible, setModalVisible] = useState(false);

 // Modalı açan funksiya
 const openModal = () => setModalVisible(true);

 // Modalı bağlayan funksiya
 const closeModal = () => setModalVisible(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium border-b w-full'>

            {/*Logo */}
            <Link to='/'><img src={assets.logo} className='lg:ml-5 w-40' alt="Logo" /></Link>

            {/*Navlink */}
            <div className='hidden sm:flex gap-20 text-xl text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>ANA SƏHİFƏ</p>
                    <hr className='w-2/4 border h-1.5px border-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>KOLLEKSİYA</p>
                    <hr className='w-2/4 border h-1.5px border-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>HAQQINDA</p>
                    <hr className='w-2/4 border h-1.5px border-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>ƏLAQƏ</p>
                    <hr className='w-2/4 border h-1.5px border-gray-700 hidden' />
                </NavLink>

            </div>

            {/*Search */}
            <div className='flex items-center gap-6'>
             
                {/*Profile */}
                <div className='group relative z-50'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile_icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-3 w-36 py-6 px-5 bg-black text-white rounded'>
                        <div className='flex items-center gap-8 whitespace-nowrap'>
                <div>
                    {/* Navbar düymələri */}
                    <nav>
                        <button onClick={openModal}>Daxil ol</button>
                        {/* Digər navbar elementləri */}
                    </nav>

                    {/* Modal */}
                    {modalVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 size-full m-auto">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <button onClick={closeModal} className="text-red-500 ">X</button>
                                <Login /> {/* Login komponentini burada göstərin */}
                            </div>
                        </div>
                    )}
                </div>
               
            </div>
                            <p className='cursor-pointer hover:text-gray-500'>Sifariş verin</p>
                            <p className='cursor-pointer hover:text-gray-500'>Çıxın</p>
                        </div>
                    </div>
                </div>


                {/*Shop Cart */}
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 mr-2' alt="card_icon" />
                    <p className='absolute right-[-1px] bottom-[-5px] w-4 h-4 flex items-center justify-center bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu_icon" />
            </div>



            {/* Sidebar menu for small screens */}

            <div className={`top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} z-50 absolute`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="dropdown_icon" />
                        <p>Geri</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>ANA SƏHİFƏ</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>KOLLEKSİYA</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>HAQQINDA</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='contact'>ƏLAQƏ</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar