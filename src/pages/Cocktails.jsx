import { useEffect, useState, useRef } from "react";
import useFetch from "../hooks/useFetch";
import CleanDrinkData from "../utils/CleanDrinkData";
import { use } from "react";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktails = () => {
  const [query, setQuery] = useState(`a`);
  const [debouncedQuery, setDebouncedQuery] = useState(`a`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const url = `${BASE_URL}${debouncedQuery}`;

  const { data, error, isLoading } = useFetch(url);
  const drinks = data?.drinks ? data.drinks.map(CleanDrinkData) : [];

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error - ${error}</h2>;

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cocktails..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {drinks.map((SingleDrink) => {
          return <li key={SingleDrink.id}>{SingleDrink.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cocktails;
