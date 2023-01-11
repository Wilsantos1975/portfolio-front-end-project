const cocktailFormSubmit = document.querySelector("form");

cocktailFormSubmit.addEventListener("submit", cocktailFormSubmitEvent); // 45 minutes lost because of async //1 hour testing the api, and it was the missing api key.

function cocktailFormSubmitEvent(e) {
  e.preventDefault();
  const input = e.target.cocktail.value;
  const BASE_URL = `http://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${input}`;
  fetchCocktailInfo(BASE_URL, input);
  e.target.cocktail.value = "";
}
function fetchCocktailInfo(url, input) {
  fetch(url)
    .then((res) => res.json())
    .then((cocktail) => {
      console.log(cocktail, input);
    })
    .catch((error) => console.log(error));
}
