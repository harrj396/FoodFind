// Future Functionality

// var userInput = document.getElementById('userSearch'); 
// var firstCarousel = document.getElementById("carousel")

//Defining custom variables
var mealDBurl = 'https://www.themealdb.com/api/json/v1/1/random.php';

//Carousel setup
// var splide = new Splide( firstCarousel, {
//     perPage: 3,
//     rewind : true,
//   } );
  
//   splide.mount();

fetch(mealDBurl)
  .then((response) => response.json())
  .then((data) => console.log(data.meals[0].strMeal))
  .then((data) => console.log(data.meals[0].strMeal));



  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })