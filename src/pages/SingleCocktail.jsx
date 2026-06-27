import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CleanDrinkData from "../utils/CleanDrinkData";
import { Link } from "react-router-dom";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`${BASE_URL}${id}`);

  console.log(data);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h2>404-Error: Not Found</h2>;

  const drink = data?.drinks ? CleanDrinkData(data.drinks[0]) : null;

  if (!drink) {
    return <h2>No Cocktail Found...</h2>;
  }

  const { name, image, category, glass, alcoholic, instructions, ingredients } =
    drink;

  return (
    <div className="single-cocktail">
      <Link to={"/cocktails"} className="back-btn">
        Back to Cocktails
      </Link>
      <div className="single-cocktail-content">
        <img src={image} alt={name}></img>
        <div className="single-cocktail-info">
          <h2>{name}</h2>
          <p>
            Category: <span>{category}</span>
          </p>
          <p>
            Glass type: <span>{glass}</span>
          </p>
          <p>
            Alcoholic Type: <span>{alcoholic}</span>
          </p>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map(({ ingredient, measure }) => {
              return (
                <li key={ingredient}>
                  {measure} {ingredient}
                </li>
              );
            })}
          </ul>
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
