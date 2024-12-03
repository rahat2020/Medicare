const ComponentHeader = ({
  title,
  desc,
  customStyles = "",
  titleClasses = "",
  descClassess = ""
}) => {
  return (
    <div className={`text-center px-10 ${customStyles || "pb-14"}`}>
      <p className={`font-semibold text-blue-500  ${titleClasses || "text-28"}`}>{title}</p>
      <p className={` font-medium ${descClassess || "text-20"}`}>{desc}</p>
    </div>
  );
};

export default ComponentHeader;
