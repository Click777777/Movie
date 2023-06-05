import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="mt-8 text-center">
      <BeatLoader color="#FFB000" cssOverride={{}} margin={5} size={10} />
    </div>
  );
};

export default Spinner;
