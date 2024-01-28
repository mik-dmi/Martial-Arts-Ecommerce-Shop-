import React from 'react'
import Image from 'next/image'

export const ChatHeader = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-black-800 '>
        <div className='flex flex-col items-start text-sm'>

            <div className='flex gap-4 items-center'>
              <div className=' relative p-2'>
                <Image src="/assets/bot_image.jpg"  width={40}height={40} alt="Chatbot picture" 
                className='rounded-full ' />
                <p className='w-[0.8rem] h-[0.8rem] border-[0.15rem] border-gray-50 rounded-full bg-green-400/[0.9]  absolute bottom-[0.45rem] right-2'/>
              </div>
              <div className='flex flex-col'>
                <p className='flex flex-col items-start text-md'> Get help from the</p>
                <p className='font-semibold text-lg'> <span className='text-primary'>MartialGear</span> Bot</p>
              </div>
            </div>
        </div>

    </div>
  )
}
