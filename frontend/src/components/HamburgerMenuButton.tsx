import React from 'react'
import icons from "@utils/iconsLoader"

export default function HamburgerMenuButton({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="hamburger-menu flex flex-row justify-center items-center" onClick={onClick} {...props}>
            { <icons.hamburger className='w-6 h-6' />}
        </button>
    )
}
