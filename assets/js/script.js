
//Defining custom variables
const mealDBurlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealDBurlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const lowCarbUrl = 'https://low-carb-recipes.p.rapidapi.com/search?name=';

var firstMealName;
//Define async funtion to grab data from api and append it to the page
      async function getRecipeName() {
        const response = await fetch(mealDBurlRandom);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        const firstRecipeName = document.getElementById('recipeName');
        firstRecipeName.innerHTML = newRecipe;
        // const input = firstRecipeName || {}
        // input.textContent = newRecipe;
        // console.log(input.innerHTML)
        getFirstRecipe(newRecipe);
        getKetoRecipe(newRecipe);
      }

      //Call the function
      getRecipeName();

      async function getFirstRecipe(recipe) {
        const response = await fetch(mealDBurlSearch + recipe);
        const data = await response.json();
        console.log(data);
        const newRecipeImg  = data.meals[0].strMealThumb;
        const newRecipeLink = data.meals[0].strSource;
        const newYoutube = data.meals[0].strYoutube;
        const imgInput = newRecipeImg || {}
        const linkInput = newRecipeLink || {}
        const youtubeInput = newYoutube || {}
        var splitLink = youtubeInput.split('watch?v=')
        var embedLink1 = splitLink.join("embed/")
        // var autoplay = "&autoplay=1";
        // var autoplayYoutube1 = embedLink1 + autoplay;
        // console.log(autoplayYoutube1);
        document.getElementById("firstYoutube").src = embedLink1;
        document.getElementById("firstRecipeList").href = linkInput;
        console.log(newRecipeImg);
        document.getElementById("firstRecipeImg").src = imgInput;
      }

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f54cbceebemshaaff6c48ccd6b24p1a7c1ajsn4e2d1b0e62ae',
          'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
        }
      };

      async function getKetoRecipe(newFood, options){
        let regex = / /g;
        let result = newFood.replace(regex, "%20");
        console.log(result)
        let newUrl = lowCarbUrl + result;
        console.log(newUrl);
      const response = await fetch(lowCarbUrl, options);
      const data = await response.json();
      console.log(data)
    }



  // fetch('https://low-carb-recipes.p.rapidapi.com/search?name=' + foodName)

  
  // Future Functionality
  // addEventListener('submit', function(event){
  //   event.preventDefault();
  //   console.log(userInput.value);

  // })