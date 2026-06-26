import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    SetIsLoading(true);
    setError(false);

    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error(`error` + err.message);
        setError(err.message);
      } finally {
        SetIsLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);
  return { data, error, isLoading };
};

export default useFetch;
