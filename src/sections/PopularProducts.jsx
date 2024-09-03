import React from 'react'
import { products } from "../constants"
import PopularProductCard from '../components/PopularProductCard'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
const PopularProducts = () => {

  // useGSAP(()=>{
  //   gsap.from(".product-cards",{
  //     y:100,
  //     stagger:0.5,
  //     duration:1,
  //     ease:'elastic',
  //     yoyo:true,
    
  //   })
  // })



  return (
    <section id='products'
      className='max-container max-sm:mt-12'
    >

      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg text-slate-gray font-montserrat mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, reiciendis.</p>
      </div>


      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 product-cards ' >
      {products.map((product) => (
          <PopularProductCard  key={product.name} {...product} />
        ))}
     
      </div>

    </section>
  )
}

export default PopularProducts