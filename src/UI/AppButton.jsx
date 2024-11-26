"use client";
import React from "react";
import Link from "next/link";

const AppButton = ({
  href = "",
  text,
  icon: Icon,
  disable = false,
  customStyles,
  iconClasses = "",
  customBtnStyles = "flex items-center",
  withoutHrefBtn = false,
  targetBlank = "",
  callback = () => {}
}) => {
  return (
    <div
      className={`flex items-center px-2 md:px-6 py-1 md:py-2 rounded-md border font-semibold duration-300 ${customStyles}`}
    >
      {withoutHrefBtn ? (
        <button disabled={disable} className={customBtnStyles} onClick={() => callback()}>
          {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
          <span className="ms-2">{text}</span>
        </button>
      ) : (
        <Link href={href} target={targetBlank} onClick={callback}>
          <button disabled={disable} className={customBtnStyles}>
            {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
            <span className="ms-2">{text}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default AppButton;
