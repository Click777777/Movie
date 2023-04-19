import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Spinner = ({ loading = true }) => {
  return (
    <div className=" w-full h-screen flex-colo bg-main">
      <CircleLoader loading={loading} color="#ff0000" size={100} />
    </div>
  );
};

export default Spinner;
