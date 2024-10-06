'use client'
import React from 'react'
import Link from "next/link";

const AppButton = ({ href, text, icon: Icon, customStyles, iconClasses="" }) => {
    return (
        <div>
            <Link
                href={href}
                className={`px-2 md:px-6 py-1 md:py-2 rounded-md border font-semibold flex items-center gap-2 duration-300 ${customStyles}`}
            >
                {Icon && <Icon className={iconClasses || 'w-5 h-5 text-red'}/>} {text}
            </Link>
        </div>
    )
}

export default AppButton

