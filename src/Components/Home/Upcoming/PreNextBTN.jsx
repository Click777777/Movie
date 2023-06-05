import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const PreNextBTN = () => {
  const swiper = useSwiper();
  return (
    <div className=" hidden lg:block">
      <div className="flex w-full items-center justify-end">
        <div className="flex max-w-[100px] items-center justify-center gap-2 text-subMain">
          <button onClick={() => swiper.slidePrev()}>
            <AiOutlineLeft className="text-[26px] font-semibold" />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <AiOutlineRight className="text-[26px] font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreNextBTN;
