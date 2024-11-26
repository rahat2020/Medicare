"use client";

import { size } from "lodash";
import DoctorCard from "@/components/Doctors/DoctorCard";
import FilterSidebar from "@/components/Doctors/FilterSidebar";
import { useState } from "react";
import { doctors } from "@/data/doctorsData";

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
