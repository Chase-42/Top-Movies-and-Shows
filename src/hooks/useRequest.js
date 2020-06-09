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
        const responseArray = response.data.entries;
        const movies = responseArray.filter(
          (movie) => movie.programType === `${content}`
        );
        const first21 = movies.slice(0, 21);
        const sortedMovies = first21.sort();
        if (!ignore) setData(sortedMovies);
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
