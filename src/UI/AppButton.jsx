'use client'
import React from 'react'
import Link from "next/link";

const AppButton = ({ href, text, icon: Icon, customStyles, iconClasses = "" }) => {
    return (
        <div>
            <Link
                href={href}
                className={`flex items-center px-2 md:px-6 py-1 md:py-2 rounded-md border font-semibold duration-300 ${customStyles}`}
            >
                <button className='flex items-center'>
                    {Icon && <Icon className={iconClasses || 'w-5 h-5'} />} <span className='ms-2'>{text}</span>
                </button>
            </Link>
        </div>
    )
}

export default AppButton

