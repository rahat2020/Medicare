'use client'
import React from 'react'
import Header from '@/components/Home/Header';
import Doctors from '@/components/Home/Doctors';
import Faq from '@/components/Home/Faq';
import Info from '@/components/Home/Info';
import LatestArticles from '@/components/Home/LatestArticles';
import OurProducts from '@/components/Home/OurProducts';
import Testimonials from '@/components/Home/Testimonials';
import Sponsors from '@/components/Home/Sponsors';
import DoctorsCalendar from '@/components/Home/DoctorsCalendar';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <Doctors />
      <Faq />
      <Info />
      <LatestArticles />
      <DoctorsCalendar />
      <OurProducts />
      <Testimonials />
      <Sponsors />
    </div>
  )
}

export default Home