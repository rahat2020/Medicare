import { doctors } from '@/data/doctorsData';
import ComponentHeader from '@/UI/ComponentHeader';
import DoctorsCard from '@/UI/DoctorsCard';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Doctors = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-4">
          <ComponentHeader desc={"Best Doctors"}/>
          <div className="flex space-x-4">
            {/* Left Arrow */}
            <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-md border">
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </button>
            {/* Right Arrow */}
            <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-md border">
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doctors.map((doctor, index) => (
            <DoctorsCard doctor={doctor} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
