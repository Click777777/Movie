import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const PreNextBTN = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-end">
      <div className="max-w-[100px] text-subMain gap-2 flex justify-center items-center">
        <button onClick={() => swiper.slidePrev()}>
          <AiOutlineLeft className="text-[26px] font-semibold" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <AiOutlineRight className="text-[26px] font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default PreNextBTN;
