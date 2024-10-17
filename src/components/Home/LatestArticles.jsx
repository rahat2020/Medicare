import AppButton from "@/UI/AppButton";
import ComponentHeader from "@/UI/ComponentHeader";
import React, { useState } from "react";
import { Calendar, User } from "react-feather";
import { articles as data } from "@/data/articlesData";
import Image from "next/image";

const LatestArticles = () => {
  const [articles, setArticles] = useState(data);
  
  return (
    <section className="py-8">
      <ComponentHeader desc={"Latest Articles"} />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={330}
              height={100}
              loading="lazy"
              className="rounded-md mb-2 object-cover"
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
