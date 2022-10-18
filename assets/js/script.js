//Defining custom variables
const mealDBurlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealDBurlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const lowCarbUrl = 'https://edamam-recipe-search.p.rapidapi.com/search?q=';

//Define async funtion to grab data from api and append it to the page
      async function getRecipeName() {
        const response = await fetch(mealDBurlRandom);
        const data = await response.json();
        const newRecipe  = data.meals[0].strMeal;
        const firstRecipeWord  = data.meals[0].strMeal;
        const firstWord = firstRecipeWord.replace(/ .*/,'');
        const mealType = data.meals[0].strArea;
        const firstRecipeName = document.getElementById('firstRecipeName');
        firstRecipeName.innerHTML = newRecipe;
        getFirstRecipe(newRecipe);
        getKetoRecipe(mealType, firstWord);
      }
 
//Second function to grab recipe and other data
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

      async function getKetoRecipe(newFood, firstName){
        let regex = / /g;
        let result = newFood.replace(regex, "%20");
        console.log(firstName)
        let newUrl = lowCarbUrl + firstName + "&random=true";
        console.log(newUrl);
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '3dbfc0433dmsh56b1204eaeeb95dp104faejsnc54fdda40931',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
          }
        };
      const response = await fetch(newUrl, options);
      const data = await response.json();
      const secondRecipeName  = data.hits[0].recipe.label;
      const secondRecipeImg  = data.hits[0].recipe.image;
      const secondRecipeLink = data.hits[0].recipe.url;
      console.log(secondRecipeImg)
      var htmlDiv = `<h1><span>${secondRecipeName}</span></h1>
      <img width="100%" height="800px" id="secondRecipeImg" src="${secondRecipeImg}">
      <button id="secondButton" class="button is-danger"><a id="secondRecipeList" href="${secondRecipeLink}">Click for Recipe!</a></button>`

      if(secondRecipeImg){
        document.getElementById("secondDiv").innerHTML = htmlDiv
      }

      console.log(data.hits[0].recipe)
    }



  //Call the function
  getRecipeName();

  
// Future Functionality
// addEventListener('submit', function(event){
//   event.preventDefault();
//   console.log(userInput.value);

// })

// apikey = 901b466946b7c9d2ec37e9ff51d2caeb
// appid = e7816b7d