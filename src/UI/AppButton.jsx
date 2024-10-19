'use client'
import React from 'react'
import Link from "next/link";

const AppButton = ({ href, text, icon: Icon, customStyles, iconClasses = "" }) => {
    return (
        <div>
            <Link
                href={href}
                className={`flex items-center justify-center px-2 md:px-6 py-1 md:py-2 rounded-md border font-semibold gap-2 duration-300 ${customStyles}`}
            >
                <button className='text-center'>
                    {Icon && <Icon className={iconClasses || 'w-5 h-5 text-red'} />} {text}
                </button>
            </Link>
        </div>
    )
}

export default AppButton

