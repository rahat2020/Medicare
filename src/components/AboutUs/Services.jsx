import ComponentHeader from "@/UI/ComponentHeader";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  return (
    <>
      <ComponentHeader
        title={"Our Medical Services"}
        desc={"Prompt and reliable care for emergencies, treatments, and consultations."}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg transition duration-300">
            <div className="text-blue-700 font-bold text-4xl mb-4 bg-blue-50 w-fit p-4 rounded-md">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 mb-4">{service.description}</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Read More <span className="ml-2">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
