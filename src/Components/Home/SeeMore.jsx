import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../../Context/PaginationContext";

const SeeMore = () => {
  const { setTopRatedCurrent } = useContext(Context);
  const viewMoreHandler = () => {
    setTopRatedCurrent(1);
  };
  return (
    <Link
      to="/viewMore"
      onClick={viewMoreHandler}
      className=" mt-4 flex space-x-2 items-center text-subMain p-4 cursor-pointer w-fit"
    >
      <button type="button" className=" font-thin text-sm ">
        View More
      </button>
      <BsArrowRight />
    </Link>
  );
};

export default SeeMore;
