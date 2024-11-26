/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import { X } from "react-feather";
import React, { useRef } from "react";
// import "@/styles/_mobile_modal.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

const AppModal = ({
  children,
  size = "miniXL",
  setIsModalOpen = () => {},
  modalHeader = true,
  modalFooter = true,
  isModalFooterBg = false,
  mainBodyPadding = "px-6",
  isAppConfirmationModal = false,
  modalMargin = "mx-5",
  title = "",
  titleStyle = "font-semibold text-border-dark text-[16px]",
  customBtn,
  onModalClose,
  drawerModal = false,
  isScrollable = true,
  isScrollingDrawerModal = false,
  options: {
    isOpenForMultiModal = false,
    yAxisPosition = "center",
    modalMainClass = "",
    footerClass = ""
  } = {}
}) => {
  const modalRef = useRef(null);
  const modalCloseValue = isOpenForMultiModal ? {} : false;
  const isSmallHeight = useMediaQuery("(max-height: 750px)");
  const mainClass = drawerModal
    ? `fixed bottom-0 rounded-t-xl h-[80vh] w-[95%] drawer-open-class ${isScrollingDrawerModal ? "overflow-y-auto no-scrollbar" : ""}`
    : `rounded-[10px] ${!isAppConfirmationModal && "desktop-style-class"}`;

  const handleModalClose = () => {
    if (onModalClose) {
      onModalClose();
    }
    setIsModalOpen(modalCloseValue);
  };
  const modalSizeClass = {
    xs: "w-48",
    sm: "w-72",
    md: "w-96",
    lg: "w-1/3",
    miniXL: "w-[40%] 2xl:w-[33%]",
    xl: "w-1/2",
    "2xl": "w-3/4",
    "3xl": "w-4/5",
    full: "w-full"
  };
  const handleCloseModalOnOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(modalCloseValue);
      if (onModalClose) {
        onModalClose();
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 z-[120] flex justify-center items-${yAxisPosition}`}
      onClick={handleCloseModalOnOutsideClick}
    >
      <div
        className={`${mainClass} bg-white shadow-lg
         ${
           modalSizeClass[size] === "w-full" ? modalMargin : modalSizeClass[size]
         } ${modalMainClass} ${isScrollable && "overflow-y-auto no-scrollbar"} ${isSmallHeight ? "lg:max-h-full" : "lg:max-h-[80vh]"} lg:h-max 
           `}
        ref={modalRef}
      >
        {modalHeader && (
          <div className="flex sticky top-0 items-center justify-between pb-4 bg-light-white p-6 rounded-t-lg bg-white-light z-[120]">
            <h5 className={titleStyle}>{title}</h5>
            <button
              type="button"
              onClick={handleModalClose}
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className={`${mainBodyPadding} rounded-2xl`}>{children}</div>
        {modalFooter && (
          <div
            className={`${isModalFooterBg && "bg-white-light"} py-6 ${footerClass} rounded-b-lg`}
          >
            {customBtn}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppModal;
