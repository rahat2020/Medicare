import React from "react";

const ComponentHeader = ({title, desc, customStyles}) => {
  return (
  <header style={{marginBottom: "64px"}} className={`text-center ${customStyles}`}>
      <h2 className="text-lg font-semibold text-blue-500">
        {title}
      </h2>
      <h3 style={{fontSize: "36px", marginBottom: "24px"}} className="font-bold">
        {desc}
      </h3>
    </header>
  );
};

export default ComponentHeader;
