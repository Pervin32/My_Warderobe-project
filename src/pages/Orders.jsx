/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);
  const currentDate = new Date().toLocaleDateString('az-AZ');
  
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'Mənim'} text2={'SİFARİŞLƏRİM'} />

      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{item.price} {currency}</p>
                    <p>Miqdar: 1</p>
                    <p>Ölçü: M</p>
                  </div>
                  <p className=''>Date: <span className='text-gray-400'>{currentDate}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-am md:text-base'>Göndərməyə hazırdır</p>

                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Sifarişi izləyin</button>
              </div>
            </div>

          ))
        }
      </div>
    </div >
  )
}

export default Orders