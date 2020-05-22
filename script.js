drinkNameText = document.getElementsByClassName("DrinkName")[0];

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => res.json())
  .then((data) => {
    drinkNameText.textContent = data.drinks[0].strDrink;
    console.log(data.drinks[0].strDrink);
  })
  .catch((error) => console.log("Error"));
