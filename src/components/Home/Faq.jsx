"use client";
import Image from "next/image";
import { useState } from "react";
import { PlusCircle, MinusCircle } from "react-feather";

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      'You can book an appointment by visiting our website and selecting the "Book Appointment" option. Simply choose your preferred doctor, date, and time, and confirm your booking.',
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer:
      "Yes, when booking an appointment, you can choose a specific doctor from our list of available specialists. Just make sure to check their availability on your desired date and time.",
  },
  {
    question:
      "What should I do if I need to cancel or reschedule my appointment?",
    answer:
      'If you need to cancel or reschedule, please log in to your account and navigate to the "Appointments" section. You can modify or cancel your booking up to 24 hours before the scheduled time.',
  },
  {
    question: "What if I’m running late for my appointment?",
    answer:
      "If you are running late, please contact our support team or the clinic directly. They may be able to accommodate slight delays, but this is subject to the doctor’s availability.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer:
      "Yes, you can book appointments for your family members or dependents under your account. Simply provide their details during the booking process.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-12">
      <header className="text-center mb-16">
      <h2 className="text-lg font-semibold text-blue-500">
        Frequently Asked Questions
      </h2>
      <h3 className="text-4xl font-bold mb-6">
        Get Your Answer<span className="text-blue-500">+</span>
      </h3>
      </header>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/faq.png"
            alt="Doctor and patient"
            className="rounded-lg shadow-md"
            width={600}
            height={600}
          />
          <div className="absolute bottom-5 left-5 bg-white p-4 rounded-lg shadow-lg flex items-center">
            <span className="text-2xl">😊</span>
            <div className="ml-3">
              <p className="font-bold text-lg">95k+</p>
              <p className="text-gray-600">Happy Patients</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F8F8F8] p-4 rounded-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p
                    className={`text-16 font-[500] transition duration-300 ${
                      openIndex === index ? "text-blue-500" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </p>
                  <div className="size-5">
                    {openIndex === index ? (
                      <MinusCircle size={24} className="text-blue-500" />
                    ) : (
                      <PlusCircle size={24} className="text-blue-500" />
                    )}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="mt-3">
                    <hr className="mb-3" />
                    <p className=" text-gray-600 duration-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
