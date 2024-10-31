/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    return (
        <Link className='text-gray-700 cursor-pointer block' to={`/product/${id}`}>
            <div className='aspect-[3/4] w-full relative overflow-hidden'>
                <img 
                    src={image[0]} 
                    className='absolute inset-0 w-full h-full object-cover hover:scale-110 transition ease-in-out' 
                    alt="product" 
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'><strong>{price} {currency}</strong></p>
        </Link>
    )
}

export default ProductItem