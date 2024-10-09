import Image from 'next/image';
import { steps } from '@/data/stepsData';
import StepsCard from '@/UI/StepsCard';

const Info = () => {

  return (
    <div className="bg-white py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Doctor Image */}
        <div className="relative w-full md:w-[40%]">
          <Image
            src="/assets/doc_jhon.jpg" 
            alt="Doctor"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        
        {/* Steps */}
        <div className="space-y-6 w-full md:w-[60%]">
          <header className='mb-12'>
          <h2 className="text-blue-500 font-bold text-xl">How it Works</h2>
          <h3 className="text-4xl font-bold">4 easy steps to get your solution</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {
              steps?.map((step, idx) => (
                <StepsCard
                key={idx}
                Icon={step.icon}  
                title={step.title} 
                description={step.description} 
                ></StepsCard>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
