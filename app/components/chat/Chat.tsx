"use client"
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import { ChatHeader } from './ChatHeader'
import { AccordionContent } from '@radix-ui/react-accordion'
import { ChatInput } from './ChatInput'
import ChatMessages from './ChatMessages'



export const Chat = () => {
  
  return (
    <Accordion type = 'single' collapsible className='relative z-40  bg-white'>
        <AccordionItem value='item-1'>
        <div className='fixed right-8 w-[18.5rem] bottom-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-md rounded-md overflow-hidden'>
            <div className = 'w-full h-full flex flex-col'>
                <AccordionTrigger className='px-4  py-2 border-b border-zinc-300' svgSize={6}>
                    <ChatHeader/>
                </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col h-80'>
                            <ChatMessages className='p-4 py-3 flex-1' />
                            <ChatInput className='p-2'/>
                        </div>
                    </AccordionContent>
            </div>
        </div>
        </AccordionItem>
    </Accordion> 
  )
}
