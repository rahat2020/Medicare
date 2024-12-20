"use client";
import Image from "next/image";
import Link from "next/link";
import { Star } from "react-feather";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    qualifications,
    speciality,
    image,
    hospital,
    experience,
    rating,
    totalRatings,
    fee,
    id
  } = doctor || {};
  return (
    <div>
      <div className="border rounded-lg p-4 flex gap-4">
        <Link href={`/all-doctors/single-doctor/${id}`}>
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image src={image} alt={name} fill className="rounded-lg object-cover" />
          </div>
        </Link>
        <div className="flex-grow">
          <Link href={`/all-doctors/single-doctor/${id}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{qualifications}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm mt-1">
                  {speciality}
                </span>
              </div>
              <div className="text-right">
                <p className="font-semibold">$ {fee}</p>
                <p className="text-sm text-gray-600">Per consultation</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Working in</p>
              <p className="font-medium">{hospital}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-600">Total Experience</p>
                <p className="font-medium">{experience} Years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Rating ({totalRatings})</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="font-medium ml-1">{rating}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
