import React from 'react'
import Topbar from '@/components/Home/Topbar';
import Header from '@/components/Home/Header';
import Doctors from '@/components/Home/Doctors';
import Faq from '@/components/Home/Faq';
import Info from '@/components/Home/Info';
import LatestArticles from '@/components/Home/LatestArticles';
import ServiceCategory from '@/components/Home/ServiceCategory';
import Testimonials from '@/components/Home/Testimonials';
import Footer from '@/components/Home/Footer';

const Home = () => {
  return (
    <div className=''>
        <div className='max-w-6xl mx-auto'>
        <Topbar/>
        <Header/>
        <Doctors/>
        <Faq/>
        <Info/>
        <LatestArticles/>
        <ServiceCategory/>
        <Testimonials/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home