import React from 'react';

const DoctorsCard = ({doctor, index}) => {
    return (
        <div key={index} className="bg-white shadow rounded-lg p-4 min-w-[250px] mb-6">
              <div className="relative w-full h-40 rounded-md bg-gray-200 overflow-hidden mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.profession}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-blue-500 font-semibold">{doctor.location}</p>
                <p className="bg-gray-100 p-1 rounded-md text-sm">{doctor.price}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center text-yellow-500">
                  <span className="font-bold text-sm">{doctor.rating}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
                  </svg>
                  <span className="ml-1 text-gray-500 text-sm">(0)</span>
                </div>
              </div>
            </div>
    );
};

export default DoctorsCard;