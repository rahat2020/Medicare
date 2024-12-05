import { doctors } from "@/data/doctorsData";
import AppButton from "@/UI/AppButton";
import DoctorsCard from "@/UI/DoctorsCard";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight } from "react-feather";

const Doctors = () => {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-semibold text-blue-500 text-28">Best Doctors</h3>
        <div className="flex space-x-4">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-md border">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          {/* Right Arrow */}
          <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-md border">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide px-3 mb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doctors.map((doctor, index) => (
          <DoctorsCard doctor={doctor} key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <AppButton
          text="View all doctors"
          withoutHrefBtn
          customStyles={
            "w-fit mx-auto border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          }
          icon={ChevronsRight}
          callback={() => router.push("/all-doctors")}
        />
      </div>
    </div>
  );
};

export default Doctors;
