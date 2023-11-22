'use client'
import { MainButtonsProps } from '@/types'
import React from 'react'

 const MainButton = ({title, containerStyles, handleClick, btnType}: MainButtonsProps) => {
  return (
    <button
        disabled={false}
        type={btnType|| "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={'flex-1'}>
            {title}
        </span>

    </button>
  )
}

export default MainButton