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
    <Select onValueChange={value => router.replace(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="/?date=desc">Newest</SelectItem>
          <SelectItem value="/?price=asc">Price, low to high</SelectItem>
          <SelectItem value="/?price=desc">Price, high to low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  
  )
}

export default ProductSort