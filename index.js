

const cocktailFormSubmit = document.querySelector("form");


cocktailFormSubmit.addEventListener("submit", cocktailFormSubmitEvent) // 45 minutes lost because of async

function cocktailFormSubmitEvent(e) {
  e.preventDefault();
  const input = e.target.cocktail.value;
  const BASE_URL = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  fetchCocktailInfo(BASE_URL, input);
  e.target.cocktail.value = "";
}
function fetchCocktailInfo(BASE_URL, input) {
  fetch(BASE_URL)
    .then((res) => {
      res.json();
    })
    .then((cocktail) => {
      console.log(cocktail);
    });
}
