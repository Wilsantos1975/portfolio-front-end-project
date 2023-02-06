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
const cocktailFormSubmit = document.querySelector("form");
const main = document.querySelector("main");
const classics = document.querySelector("#classics");
const random = document.querySelector("#random");
const latest = document.querySelector("#latest");

//code below is for the cocktail input
cocktailFormSubmit.addEventListener("submit", cocktailFormSubmitEvent);

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

function handleCocktail(cocktail, input) {

  if (input === "") {   
    alert("Please enter a cocktail name");  
  } else if (cocktail.drinks === null) {
    alert("Please enter a valid cocktail name");
  } 

  const drinkFound = cocktail.drinks.find(
    (drink) => drink.strDrink.toLowerCase() === input.toLowerCase()
  );
  document.querySelector("#container").remove();
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("main").after(container);

  createCard(drinkFound);
}

// for the random button
random.addEventListener("click", getRandom);

async function getRandom(e) {
  e.preventDefault();
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`
  );
  const data = await response.json();
  const random = data.drinks[0];

  document.querySelector("#container").remove();
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("main").after(container);

  createCard(random);
}

//for the latest button

latest.addEventListener("click", getLatest);

async function getLatest(e) {
  e.preventDefault();
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`
  );
  const data = await response.json();
  const popular = data.drinks;

  document.querySelector("#container").remove();
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("main").after(container);

  popular.forEach((drink) => {
    createCard(drink);
  });
}

// for the classics button

classics.addEventListener("click", getclassics);

async function getclassics(e) {
  e.preventDefault();
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`
  );
  const data = await response.json();
  const classics = data.drinks;

  document.querySelector("#container").remove();
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("main").after(container);

  classics.forEach((drink) => {
    createCard(drink);
  });
}
// function to create card
function createCard(drink) {

  const card = document.createElement("div");

  document.getElementById("container").append(card);

  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardInstructions = document.createElement("div.card-text");
  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = drink.strDrinkThumb;
  const title = document.createElement("div.card-title");
  title.classList.add("card-title");
  title.textContent = drink.strDrink;
  const span = document.createElement("span.card-subtitle");
  
  let recipe = []
  let ingredientsArray = Object.values(drink).map((ingredient) => {
    return ingredient;
  });
  
  console.log(ingredientsArray)
  for (let i = 0; i < 8; i++) {
    let ingredients = ingredientsArray.slice(17, 25);
    let measures = ingredientsArray.slice(32, 40);
    if (ingredients[i] !== null && measures[i] !== null) {
      recipe.push(`${ingredients[i]} - ${measures[i]}`);
      console.log(recipe);
    }
  }
  const ul = document.createElement("ul")

  recipe.forEach((elements) => {
    let li = document.createElement('li');
    li.textContent = elements
    ul.append(li)
  })
  span.textContent = recipe;
  cardBody.textContent = drink.strInstructions;
  card.append(cardImage,title,ul,cardBody)
  
}

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


