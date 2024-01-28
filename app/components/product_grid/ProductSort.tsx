'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter } from 'next/navigation'



const ProductSort = () => {
    const router = useRouter()
  return (
    <Select onValueChange={(value) => router.replace( value +'#products-section'   )}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="/?date=desc" className='cursor-pointer '><span className='hover:text-primary'>Newest</span></SelectItem>
          <SelectItem value="/?price=asc" className='cursor-pointer'><span className='hover:text-primary'>Price, low to high</span></SelectItem>
          <SelectItem value="/?price=desc" className='cursor-pointer'><span className='hover:text-primary'>Price, high to low</span></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  
  )
}

export default ProductSort