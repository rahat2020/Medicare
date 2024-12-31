"use client";

export const alterredUserAvatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9DBm4up7xkDQKhfO1kvAAwU8Grk36ZywnngllVU&s";

export const getCurrentYear = new Date().getFullYear();

export const truncateText = (text, maxLength, ellipsis = "...") => {
  if (typeof text !== "string" || typeof maxLength !== "number") {
    console.error(
      "Invalid arguments for truncateText: text must be a string and maxLength must be a number."
    );
    return text;
  }

  if (text.length <= maxLength) return text;

  const charsToShow = maxLength - ellipsis.length;
  return text.substring(0, charsToShow) + ellipsis;
};

export const checkEmailForValid = (value) => {
  const regex = /^[\w%\+\-]+(\.[\w%\+\-]+)*@[\w%\+\-]+(\.[\w%\+\-]+)+$/;
  return regex.test(value);
};

export const convertNumToPad = (value = 0) =>
  value === 0 ? 0 : value?.toString().padStart(2, "0");

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const checkWindow = () => {
  return typeof window !== "undefined" ? true : false;
};

export const getPlayerDimensions = (screenSize) => {
  switch (screenSize) {
    case "xs":
      return { width: "100%", height: "auto" };
    case "sm":
      return { width: "300px", height: "180px" };
    case "md":
      return { width: "330px", height: "200px" };
    case "lg":
      return { width: "330px", height: "200px" };
    case "xl":
      return { width: "355px", height: "200px" };
    case "xxl":
      return { width: "415px", height: "200px" };
    default:
      return { width: "360px", height: "200px" };
  }
};
