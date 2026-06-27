import { Link } from "react-router-dom";

const CocktailCard = ({ id, name, image, category, glass }) => {
  return (
    <div className="cocktail-card">
      <img src={image} alt={name}></img>
      <div className="cocktail-info">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{glass}</p>
        <Link to={`/cocktails/${id}`}></Link>
      </div>
    </div>
  );
};

export default CocktailCard;
