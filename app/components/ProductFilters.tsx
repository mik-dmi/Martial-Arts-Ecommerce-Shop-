"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {useRouter, useSearchParams} from "next/navigation"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
  const filters = [
    {
      id: "category",
      name: "Type of Sport",
      options: [
        { value: "Kickboxing", label: "Kickboxing" },
        { value: "Karaté", label: "Karaté" },
        { value: "Jiu-Jitsu", label: "Jiu-Jitsu" },
      ],
    },
    {
      id: "kind",
      name: "Type of Item",
      options: [
        { value: "Protective-Gear", label: "Protective Gear" },
        { value: "Clothes", label: "Clothes & Gi " },
        { value: "Equipment", label: "Equipment" },
      ],
    },
  ]




const ProductFilters = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
    <h3 className="sr-only">Categories</h3>

    {filters.map((section, i) => (
      <Accordion key={i} type="single" collapsible>
        <AccordionItem value={`item-${i}`}>
          <AccordionTrigger>
            <span>
              {section.name}{" "}
              <span className="ml-1 text-xs font-extrabold uppercase text-gray-400"></span>
                {searchParams.get(section.id)? `(${searchParams.get(section.id)})`:""}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {section.options.map((option, optionId) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2"
                >
                    <Checkbox id={`filter-${section.id}-${optionId}`}
                    checked={searchValues.some(([key, value]) => key === section.id && value === option.value )}
                   
                    onClick={(e) =>{
                        const params = new URLSearchParams(searchParams)
                        const checked = e.currentTarget.dataset.state === "checked"
                        checked ? params.delete(section.id) : params.set(section.id , option.value)
                        router.replace(`/?${params.toString()}`)
                    }}
                    />
                    <label
                    htmlFor={`filter-${section.id}-${optionId}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {option.label}
                    </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ))}
  </form>



  )
}

export default ProductFilters