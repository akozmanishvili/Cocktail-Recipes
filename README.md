## App Function

React app for searching cocktail recipes, built with the TheCocktailDB API

## Features

-Search cocktails by name
-View full recipe details
-Random featured cocktail on the home page

## Used

React 18, Router 6, Vite, TheCocktailDB API

## Live

https://cocktaill-recipes.netlify.app/

### Long Description

In src folder, I have created 4 folders: utils, pages, hooks, components.

Util: contains CleanDrinkData.js which gets drink as a parameter and returns cleaned parameter, because sometimes in TheCocktailDB API ingredients have null value. This is the mess, which this JS function cleans up and returns tidy, clean object.

Hooks: contains useFetch which is basic fetch function with its state values, async/await and abort controller for cleanup function.

Components: contains CocktailCard.jsx and Navbar.jsx. Navbar.jsx is simple navbar with NavLinks to different pages. CocktailCard.jsx destructs object and displays its values (name, image and so on)

Pages: contains 4 pages Cocktails.jsx, Error.jsx, Home.jsx, SingleCocktail.jsx. 1) Cocktails.jsx with debounced query gets data from API using useFetch hook, cleans data using CleanDrinkData util and displays all the values which it gets from user input 2) SingleCocktail.jsx gets the data from API and displays all the details of the single cocktail 3)Home.jsx gets the data for random cocktail and displays its values on the Home Page 4) Error.jsx displays error message if something does not work out
