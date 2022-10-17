//Defining custom variables
const mealDBurl = 'https://www.themealdb.com/api/json/v1/1/random.php';

//Define async funtion to grab data from api and append it to the page
      async function getRecipe() {
        const response = await fetch(mealDBurl);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        const firstRecipeName = document.getElementById('one');
        firstRecipeName.textContent = newRecipe;
      }

      //Call the function
      getRecipe();

      async function getRecipe() {
        const response = await fetch(mealDBurl);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        const firstRecipeName = document.getElementById('one');
        firstRecipeName.textContent = newRecipe;
      }




  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName, options)

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })