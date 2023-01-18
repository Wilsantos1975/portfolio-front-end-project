
//logic below is is for hamburger menu;

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });
// document.querySelectorAll(".nav-link").forEach((link) => {
//   addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   });
// });




const cocktailFormSubmit = document.querySelector("form");
const main = document.querySelector("main");

// cocktailFormSubmit.addEventListener("submit", cocktailFormSubmitEvent); // 45 minutes lost because of async //1 hour testing the api, and it was the missing api key.

function cocktailFormSubmitEvent(e) {
  e.preventDefault();
  const input = e.target.cocktail.value;
  const BASE_URL = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${input}`;
  fetchCocktailInfo(BASE_URL, input);
  e.target.cocktail.value = "";
}


// function fetchCocktailInfo(url, input) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((cocktail) => {
//       handleCocktail(cocktail, input);
//     })
//     .catch((error) => console.log(error));
// }

async function fetchCocktailInfo(url, input) { //function written as async await, to test the api
  const response = await fetch(url);
  const cocktail = await response.json();
  handleCocktail(cocktail, input)
}

function handleCocktail(cocktail, input) {
  cocktail.drinks.length > 1 ? manyCocktails(cocktail,input) : singleCocktail(cocktail,input);
  
}

function manyCocktails(cocktail, input) {
  let ul = document.createElement("ul");

  cocktail.drinks.map((cocktail) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#">${cocktail.strDrink}</a>`;
    ul.append(li);
  });
  main.append(ul);
}

function singleCocktail(cocktail) {
  let h1 = document.createElement("h1");
  h1.textContent = cocktail.drinks[0].strDrink;
  main.append(h1);
  
}

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})
