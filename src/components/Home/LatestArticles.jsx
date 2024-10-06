import AppButton from "@/UI/AppButton";
import ComponentHeader from "@/UI/ComponentHeader";
import Image from "next/image";
import React from "react";
import { Calendar, User } from "react-feather";

const articles = [
  {
    id: 1,
    title: "Medicare – Making your clinic painless visit?",
    date: "18 Jul 2024",
    description:
      "Explore the benefits & challenges of virtual healthcare appointments, along...",
    imageUrl:
      "https://media.istockphoto.com/id/1782848258/photo/teenager-at-a-medical-appointment.jpg?s=612x612&w=0&k=20&c=64NB_2mcmVQy0wkNVYfUAGWxb5Vse7Gj7GjYkMR4NKQ=",
    author: "admin",
  },
  {
    id: 2,
    title: "Benefits of Consulting With an Online Doctor",
    date: "28 Sep 2024",
    description:
      "Uncover strategies to achieve a harmonious balance between professional and...",
    imageUrl:
      "https://media.istockphoto.com/id/1938542779/photo/senior-medical-check-up.jpg?s=612x612&w=0&k=20&c=v-S0_rxA9t6BeZvQWPo64DLHFxO5vVvPww7jObeIh9E=",
    author: "admin",
  },
  {
    id: 3,
    title: "What are the benefits of online doctor booking",
    date: "28 Sep 2024",
    description:
      "Explore the importance of quality sleep & learn tips to improve...",
    imageUrl:
      "https://media.istockphoto.com/id/1861987830/photo/beautiful-female-doctor-talking-while-explaining-medical-treatment-with-digital-tablet-to.jpg?s=612x612&w=0&k=20&c=59v_L1feXrs2ivUlaRV4M-jEC2ZwuE9J8ycixEFBlKI=",
    author: "admin",
  },
  {
    id: 4,
    title: "5 Great reasons to use an online doctor to choose",
    date: "25 Sep 2024",
    description: "Delve into the impact of digital life on mental health...",
    imageUrl:
      "https://media.istockphoto.com/id/2153280397/photo/happy-care-and-face-of-a-doctor-with-a-woman-for-medical-trust-healthcare-and-help-laughing.jpg?s=612x612&w=0&k=20&c=rWo35EMzO0IARBvh-oz4ies0kUmjvmcYc9LPhBm09K8=",
    author: "admin",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-8">
      <ComponentHeader desc={"Latest Articles"} />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg p-2 flex flex-col"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="rounded-md mb-2 w-full h-52 md:h-72 object-cover"
            />
            <div className="flex items-center text-gray-500 mb-2">
              <span className="mr-2 flex gap-2 items-center">
                <User /> {article.author}
              </span>
              <span className="mr-2 flex gap-2 items-center">
                <Calendar /> {article.date}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-2">{article.description}</p>{" "}

           <AppButton
              text={"Read More"}
              href={"#"}
              customStyles={
                "py-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white w-full text-center" 
              }
            ></AppButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
