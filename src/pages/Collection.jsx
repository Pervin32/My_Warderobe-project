import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { assets } from '../assets/frontend_assets/assets'


const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavant')
  const [activeCategory, setActiveCategory] = useState(null)

  const toggleCategory = (categoryName) => {
    if (category.includes(categoryName)) {
      setCategory(prev => prev.filter(item => item !== categoryName))
    } else {
      setCategory(prev => [...prev, categoryName])
    }
    setSubCategory([])
  }

  const toggleSubCategory = (subCategoryName) => {
    if (subCategory.includes(subCategoryName)) {
      setSubCategory(prev => prev.filter(item => item !== subCategoryName))
    } else {
      setSubCategory(prev => [...prev, subCategoryName])
    }
  }

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName === activeCategory ? null : categoryName)
    toggleCategory(categoryName)
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  const categories = [
    {
      name: 'Kişi',
      subCategories: ['Köynək', 'Şalvar', 'Jaket', 'Qış, Payız geyimi']
    },
    {
      name: 'Qadın',
      subCategories: ['Don', 'Yupka', 'Şalvar', 'Jaket', 'Qış, Payız geyimi']
    },
    {
      name: 'Uşaq',
      subCategories: ['Köynək', 'Şalvar', 'Don', 'Qış, Payız geyimi']
    },
    {
      name: 'Aksesuar',
      subCategories: ['Çanta']
    }
  ]

  const { setShowSearch } = useContext(ShopContext)


  return (
    <div className='mb-20 mt-10'>

      {/* Kateqoriyalar Nav */}
      <div className='py-4'>
        <div className='container mx-auto'>
          <div className='flex justify-center gap-[70px] text-xl'>
            {categories.map((cat) => (
              <div key={cat.name} className='relative group'>
                <button
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`px-4 py-2 transition-colors flex items-center gap-2 ${category.includes(cat.name)
                    ? 'text-black font-semibold'
                    : 'text-gray-700 hover:text-black'
                    }`}
                >

                  {cat.name}
                </button>

                <div className='absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-white border shadow-lg mt-1 py-2 z-10'>
                  {cat.subCategories.map((subCat) => (
                    <label
                      key={subCat}
                      className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 cursor-pointer ${subCategory.includes(subCat) ? 'bg-gray-100 font-semibold' : ''
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={subCategory.includes(subCat)}
                        onChange={() => toggleSubCategory(subCat)}
                        className="w-4 h-4 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      {subCat}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='container mx-auto py-6'>
        <div className='flex justify-between items-center mb-6 text-xl'>
          <Title text1={'MƏHSUL'} text2={'KATEQORİYALARI'} />

          <div className='flex items-center text-sm'>
            <img src={assets.search_icon} onClick={() => setShowSearch(true)} className='w-5 cursor-pointer' alt="search_icon" />

            <span className='mr-1 ml-8'>Sırala: </span>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='border-2 border-gray-300 px-2 py-1'
            >
              <option value="relavant">Ən Uyğun</option>
              <option value="low-high">Ucuzdan Bahaya</option>
              <option value="high-low">Bahadan Ucuza</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <div key={index} className="w-full">
              <ProductItem
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection