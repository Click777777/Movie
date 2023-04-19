import React from "react";

const Title = ({ title, Icon, total }) => {
  return (
    <div className="w-full flex items-center gap-2 sm:gap-4">
      <Icon className="w-4 h-4 text-subMain sm:w-6 sm:h-6" />
      <h2 className="text-lg sm:text-xl font-bold">
        {title} {total}
      </h2>
    </div>
  );
};

export default Title;
