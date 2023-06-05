import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, shouldFetch = true) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (url && shouldFetch) {
      fetchData();
    }
  }, [url, shouldFetch]);

  return { data };
};

export default useFetch;
