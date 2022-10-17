const firstRecipeName = document.getElementById('one');
const input = firstRecipeName || {}
// Future Functionality


// var userInput = document.getElementById('userSearch'); 
// var firstCarousel = document.getElementById("carousel")

//Defining custom variables
const mealDBurl = 'https://www.themealdb.com/api/json/v1/1/random.php';

//Carousel setup
// var splide = new Splide( firstCarousel, {
//     perPage: 3,
//     rewind : true,
//   } );
  
//   splide.mount();
// var recipeName;
// var getRecipeNameFunction = function(recipe) {
//   console.log(recipe);
//   OGrecipeName.document.createElement('p');
//   OGrecipeName.textContent = recipe;
//   console.log(OGrecipeName)
// };

// fetch(mealDBurl)
//   .then(response => response.json())
//   .then(response => {
//     createRecipe(response.meals[0].strMeal);
//   });

//   const createRecipe = recipe => {
//     // var recipeName = document.createElement('p');
//     // recipeName = [];
//     // recipeName.textContent = recipe;
//     // console.log(recipeName); 
//     document.getElementById('firstRecipeName') = recipe;
//   }
  // .then(data => console.log(data.meals[0].strMeal))
  // .then(data => function(data) {
  //   console.log(data.meals[0].strMeal);
  //   var recipeName = document.createElement('p');
  //   recipeName.textContent = data.meals[0].strMeal;
  //   console.log(recipeName); 
  //   OGrecipeName.append(recipeName);
  // })
  // .catch(() => {
  //   console.log("Error");
  // });
  // input.value = 'new value'

      async function getRecipe() {
        const response = await fetch(mealDBurl);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        console.log(newRecipe);
        const firstRecipeName = document.getElementById('one');
        const input = firstRecipeName || {}
        input.textContent = newRecipe;
        console.log(input);
        // document.getElementById('lon').textContent = longitude.toFixed(2);
      }

      getRecipe();





  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })