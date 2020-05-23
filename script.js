drinkNameText = document.getElementsByClassName("DrinkName")[0];
cocktailImage = document.getElementsByClassName("cocktailPic")[0];
ul = document.querySelector("ul");
instuctionsText = document.querySelector("p");
alcoholicText = document.getElementsByClassName("alcoholic")[0];
glassText = document.getElementsByClassName("glass")[0];

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => res.json())
  .then((data) => {
    drinkNameText.textContent = data.drinks[0].strDrink;
    cocktailImage.src = data.drinks[0].strDrinkThumb;
    instuctionsText.textContent = data.drinks[0].strInstructions;
    alcoholicText.textContent = data.drinks[0].strAlcoholic.toLowerCase();
    glassText.textContent = data.drinks[0].strGlass.toLowerCase();

    for (let i = 21; i < 36; i++) {
      const liElement = document.createElement("li");
      Object.values(data.drinks[0])[i];
      liElement.innerText =
        Object.values(data.drinks[0])[i + 15].toLowerCase() +
        Object.values(data.drinks[0])[i].toLowerCase();
      ul.appendChild(liElement);
    }
  });
//.catch((error) => console.log(error));
