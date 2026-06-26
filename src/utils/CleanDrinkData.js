const CleanDrinkData = (drink) => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (!ingredient) break;
    ingredients.push(ingredient, measure ? measure : "to taste");
  }

  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    category: drink.strCategory,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    alcoholic: drink.strAlcoholic,
    ingredients,
  };
};

export default CleanDrinkData;
