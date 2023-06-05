import React from "react";

const Title = ({ title, Icon, total }) => {
  return (
    <div className="flex w-full items-center gap-2 sm:gap-4">
      <Icon className="h-4 w-4 text-subMain sm:h-6 sm:w-6" />
      <h2 className="text-lg font-bold uppercase sm:text-xl">
        {title} {total}
      </h2>
    </div>
  );
};

export default Title;
