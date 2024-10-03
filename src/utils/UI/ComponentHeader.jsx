import React from "react";

const ComponentHeader = ({title, desc}) => {
  return (
    <header className="text-center mb-16">
      <h2 className="text-lg font-semibold text-blue-500">
        {title}
      </h2>
      <h3 className="text-4xl font-bold mb-6">
        {desc}
      </h3>
    </header>
  );
};

export default ComponentHeader;
