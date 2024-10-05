'use client'
import React from 'react'
import Link from "next/link";

const AppButton = ({ href, text, icon: Icon, customStyles }) => {
    return (
        <div>
            <Link
                href={href}
                className={`px-2 lg:px-4 py-1 lg:py-2 rounded-md border font-semibold flex items-center gap-2 duration-300 ${customStyles}`}
            >
                {Icon && <Icon />} {text}
            </Link>
        </div>
    )
}

export default AppButton

