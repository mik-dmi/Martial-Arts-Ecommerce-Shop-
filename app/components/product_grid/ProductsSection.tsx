 import React from 'react'
import ProductSort from './ProductSort'

import Image from "next/image";
import { simplifiedProduct } from "../../interface";
import Link from "next/link"
import ProductFilters from './ProductFilters';
import DisplayCurrency from '../DisplayCurrency';
import { shimmer, toBase64 } from "../../lib/image"



 
export default function ProductsSection({ dataProducts }: { dataProducts: simplifiedProduct[] } ) {

    
   return (
     <section id="products-section" className= "mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold  sm:text-2xl">
            SearchBar 
            </h1>
            <ProductSort/>
        </div>
     
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 p-3">
            <div className="hidden lg:block"> 
               <ProductFilters/>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
                {dataProducts.map((product, index)=>( 

                <div key={product._id} className="group relative">
                    <Link href={`/product/${product.slug}`}>
                        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                        {product.imageUrl && (
                            <Image
                                placeholder='blur'
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300,300))}`}
                                src={product.imageUrl}
                                alt="Product Image" 
                                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                width={300}
                                height={300}
                            />
                            )}
                        
                        
                        </div>
                    </Link>

                    <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700 hover:text-primary">
                        <Link href={`/product/${product.slug}`}>
                            {product.name}
                        
                        </Link>
                        </h3>
                        <p className="mt-[0.1rem] text-sm text-gray-500">{product.categoryName}</p>
                    </div>
                        
                        <DisplayCurrency totalAmount={product.price} />
                        
                    </div>
                </div>


                ))}
            </div > 
        </div>
     </section>
   )
 }
 
