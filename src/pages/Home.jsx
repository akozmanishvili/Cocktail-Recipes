import useFetch from "../hooks/useFetch";
import CleanDrinkData from "../utils/CleanDrinkData";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, error, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error 404 - Page not Found</h2>;

  const drink = data?.drinks ? CleanDrinkData(data.drinks[0]) : null;

  if (!drink) {
    return <h2>Something went wrong...</h2>;
  }

  const { name, image, category, glass, alcoholic, instructions, ingredients } =
    drink;

  return (
    <div className="home">
      <div className="home-hero">
        <h1>Discover your Favorite Next COCKTAIL</h1>
        <p>Search hundreds of cocktail recipes from around the world.</p>
      </div>
      <div className="featured">
        <h2>Featured Cocktail</h2>
        <div className="single-cocktail-content">
          <img src={image} alt={name}></img>
          <div className="single-cocktail-info">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p>Alcoholic type: {alcoholic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
