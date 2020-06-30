import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl, content) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: '' });

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios(initUrl);
        console.log(response);
        if (!ignore) setData(response.data.entries);
        if (response.data.results) {
          const resultsArray = response.data.results;
          const first10 = resultsArray.slice(0, 10);
          if (!ignore) setData(first10);
        } else {
          const resposneArray = response.data.items;
          const first21 = resposneArray.slice(0, 21);
          if (!ignore) setData(first21);
        }
      } catch (err) {
        setError({ error: err });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [initUrl, content]);

  return { data, loading, error };
};

export default useRequest;
