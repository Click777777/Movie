import { useEffect, useState } from "react";

const useProgressScroll = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const scrollCompletion = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", scrollCompletion);
    return () => {
      window.removeEventListener("scroll", scrollCompletion);
    };
  }, []);
  return { completion };
};

export default useProgressScroll;
