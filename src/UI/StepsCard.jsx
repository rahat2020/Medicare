const StepsCard = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-100 p-3 rounded-md">
        <Icon className="text-blue-500" size={32} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StepsCard;
