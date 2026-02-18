import React from "react";

const Subtitle = ({title,description}) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500 mt-2">
        {description}
      </p>
    </div>
  );
};

export default Subtitle;
