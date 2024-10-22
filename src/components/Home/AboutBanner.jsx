import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'react-feather';

const AboutBanner = () => {
    return (
        <section className="relative w-full bg-cover bg-center h-[600px]" style={{ backgroundImage: `url('/assets/about/about_banner.jpeg')` }}>
            <div className="h-full bg-blue-500 bg-opacity-45 flex items-center justify-center">
                <div className="text-center text-white space-y-6 px-4">
                    <h1 className="text-3xl font-semibold">About us</h1>
                    <p className="text-sm text-center">
                        Great doctor if you need your family member to get effective immediate assistance, <br /> emergency treatment, or a simple consultation.
                    </p>
                        <span className='bg-white text-black flex justify-center w-fit mx-auto gap-2 py-2 px-3 rounded-md text-[16px]'>
                            <Link href={"/"}>
                            <h3 className='text-gray-800 hover:text-blue-500'>Medicare</h3>
                            </Link>
                            <ChevronRight/>
                            <h3 className='text-blue-500'>About Us</h3>
                    </span>
                </div>
            </div>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,186.7C840,203,960,245,1080,234.7C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </section>
    );
};

export default AboutBanner;