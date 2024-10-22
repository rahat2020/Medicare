import ComponentHeader from '@/UI/ComponentHeader'
import React from 'react'
import { products } from '@/data/productData'
import ProductCard from '@/UI/ProductCard'
import AppButton from '@/UI/AppButton'

const Products = () => {

  return (
    <div className='py-12 px-8'>
      <ComponentHeader title={"Products"} desc={"Get doctors prescribed products"} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
      <AppButton href={"/products"} text={"View More"} customStyles={"w-fit flex justify-center mx-auto mt-12 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}/>
    </div>
  )
}

export default Products