const firstRecipeName = document.getElementById('one');
const input = firstRecipeName || {}
// Future Functionality


// var userInput = document.getElementById('userSearch'); 
// var firstCarousel = document.getElementById("carousel")

//Defining custom variables
const mealDBurl = 'https://www.themealdb.com/api/json/v1/1/random.php';

//Define async funtion to grab data from api and append it to the page
      async function getRecipeName() {
        const response = await fetch(mealDBurl);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        console.log(newRecipe);
        const firstRecipeName = document.getElementById('one');
        const input = firstRecipeName || {}
        input.textContent = newRecipe;
        console.log(input);
      }

      //Call the function
      getRecipeName();

      async function getFirstRecipe() {
        const response = await fetch(mealDBurl);
        const data = await response.json();
        const newRecipe  = data.meals[0];
        console.log(newRecipe);
        const firstRecipeName = document.getElementById('one');
        const input = firstRecipeName || {}
        input.textContent = newRecipe;
        console.log(input);
      }

getFirstRecipe();


  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName, options)

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })