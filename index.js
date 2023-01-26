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

// logic below if for the select bar
let ingredients = document.querySelector(".form-select-lg");

let ingredientsNames = [
  "Rum",
  "Bourbon",
  "Vodka",
  "Wine",
  "Whiskey",
  "Scotch",
  "Gin",
  "Tequila",
  "Mezcal",
  "Coffee",
  "Sweet Vermouth",
  "Dry Vermouth",
  "light Rum",
  "dark rum",
];

ingredientsNames.forEach((ingredient) => {
  let tag = document.createElement("option");
  tag.innerHTML = ingredient;
  tag.value = ingredient;
  ingredients.append(tag);
});

const cocktailFormSubmit = document.querySelector("form");
const main = document.querySelector("main");

cocktailFormSubmit.addEventListener("submit", cocktailFormSubmitEvent); // 45 minutes lost because of async //1 hour testing the api, and it was the missing api key.

function cocktailFormSubmitEvent(e) {
  e.preventDefault();
  const input = e.target.cocktail.value;

  const BASE_URL = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${input}`;

  fetchCocktailInfo(BASE_URL, input);
  e.target.cocktail.value = "";
}

function fetchCocktailInfo(url, input) {
  fetch(url)
    .then((res) => res.json())
    .then((cocktail) => {
      handleCocktail(cocktail, input);
    })
    .catch((error) => console.log(error));
}
// async function fetchCocktailInfo(url, input) {
//   //function written as async await, to test the api
//   // const response = await fetch(url);
//   // const data = await response.json();
//   // const drinkFound = data.drinks.find((drink) => drink.strDrink.toLowerCase() === input.toUpperCase());
//   // console.log(drinkFound)

//   singleCocktail(data, input);
// }

function handleCocktail(cocktail, input) {
  console.log(cocktail);
  const drinkFound = cocktail.drinks.find(
    (drink) => drink.strDrink.toLowerCase() === input.toLowerCase()
  );
  createCard(drinkFound);
}

function createCard(drink) {
  const card = document.querySelector(".card");
  
  const cardBody = document.querySelector(".card-body");
  const cardInstructions = document.createElement("div.card-text");
  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = drink.strDrinkThumb
  const title = document.createElement("div.card-title");
  title.textContent = drink.strDrink;


  console.log(drink)
  title.append(cardBody);
  cardBody.textContent = drink.strInstructions
  card.append(cardImage)
  card.append(title);
  card.append(cardInstructions)
}

//  function singleCocktail(cocktail, input) {

// for (let i = 0; i < cocktail.drinks.length; i++) {
//   const drink = cocktail.drinks[i];

//   if (input.toUpperCase() === drink.strDrink.toUpperCase()) {
//     console.log(drink[i]);
//   } else {
//     console.log("error");
//   }

// }


//   function createCard() {
//     const card = document.querySelector(".card");
//     const cardBody = document.querySelector(".card-body");
//     let title = document.createElement("div.card-title");
//     title.textContent = cocktail.drinks.strDrink;
//     title.append(cardBody);
//     card.append(title);
//   }
// });

let h1 = document.createElement("h1");
// h1.textContent = cocktail.drinks[0].strDrink;
main.append(h1);
// }

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
