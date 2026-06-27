import { Link } from "react-router-dom";

const CocktailCard = ({ id, name, image, category, glass }) => {
  return (
    <div className="cocktail-card">
      <Link to={`/cocktails/${id}`}>
        <img src={image} alt={name}></img>
      </Link>
      <div className="cocktail-info">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{glass}</p>
        <Link to={`/cocktails/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default CocktailCard;
