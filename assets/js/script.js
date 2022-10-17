
//Defining custom variables
const mealDBurlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealDBurlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


var firstMealName;
//Define async funtion to grab data from api and append it to the page
      async function getRecipeName() {
        const response = await fetch(mealDBurlRandom);
        const data = await response.json();
        console.log(data);
        const newRecipe  = data.meals[0].strMeal;
        const firstRecipeName = document.getElementById('recipeName');
        const input = firstRecipeName || {}
        input.textContent = newRecipe;
        getFirstRecipe(newRecipe);
        // lowCarbFunction(newRecipe);
      }

      //Call the function
      getRecipeName();

      async function getFirstRecipe(recipe) {
        const response = await fetch(mealDBurlSearch + recipe);
        const data = await response.json();
        const newRecipe  = data.meals[0];
        console.log(newRecipe);
      }



  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName)

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })