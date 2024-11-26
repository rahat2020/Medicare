"use client";

import { size } from "lodash";
import DoctorCard from "@/components/Doctors/DoctorCard";
import FilterSidebar from "@/components/Doctors/FilterSidebar";
import { useState } from "react";
import { doctors } from "@/data/doctorsData";

const MOCK_DOCTORS = [
  {
    id: 1,
    name: "Asst. Prof. Dr. Naseeb Irshadullah",
    qualifications: "MBBS, MD (Hematology)",
    speciality: "Hematologist",
    image:
      "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/233523/profile_photos/Mg8SV90LCC592GYbqNL1HOGmxBXWEo1bn5zKK9x9.jpg",
    hospital: "Shaheed Tajuddin Ahmad Medical College, Gazipur",
    experience: "15+",
    rating: 4.9,
    totalRatings: 77,
    fee: 850
  },
  {
    id: 2,
    name: "Dr. Showrab Biswas",
    qualifications: "MD (Hematology), MD (Hematology)",
    speciality: "Hematologist",
    image:
      "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/167483/profile_photos/qvErGWkcFPXWeZuut4JIYWg1Xjnppzkaz3kXyO4V.jpg",
    hospital: "Chittagong Medical College Hospital",
    experience: "5+",
    rating: 5,
    totalRatings: 11,
    fee: 1000
  },
  {
    id: 3,
    name: "Dr. Khaza Amirul Islam",
    qualifications: "MBBS, MD (Hematology)",
    speciality: "Hematologist",
    image:
      "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/persons/218782/profile_photos/fdEX5bjS3MrB36FxqvVNRxcQ61SvhKlZZRXFu7Nj.jpg",
    hospital: "Shaheed Ziaur Rahman Medical College Hospital, Bogra",
    experience: "8+",
    rating: 5,
    totalRatings: 6,
    fee: 525
  }
];

const DoctorsPage = () => {
  const [data] = useState(doctors || []);
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <FilterSidebar />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-xl font-semibold">
                {size(data)} Doctors found in Hematology department
              </h1>
            </div>

            <div className="space-y-4">
              {data?.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default DoctorsPage;
