//Defining custom variables
const mealDBurlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
const mealDBurlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const lowCarbUrl = 'https://edamam-recipe-search.p.rapidapi.com/search?q=';
const randomizeButton = document.getElementById("inputButton");

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
        const newRecipeImg  = data.meals[0].strMealThumb;
        const newRecipeLink = data.meals[0].strSource;
        const newYoutube = data.meals[0].strYoutube;
        const imgInput = newRecipeImg || {}
        const linkInput = newRecipeLink || {}
        const youtubeInput = newYoutube || {}
        var splitLink = youtubeInput.split('watch?v=')
        var embedLink1 = splitLink.join("embed/")
        document.getElementById("firstYoutube").src = embedLink1;
        document.getElementById("firstRecipeList").href = linkInput;
        document.getElementById("firstRecipeImg").src = imgInput;
      }

//Third funtion to grab a second random recipe
      async function getKetoRecipe(newFood, firstName){
        // let regex = / /g;
        // let result = newFood.replace(regex, "%20");
        let newUrl = lowCarbUrl + firstName + "&random=true";
        const options = {
          method: 'GET',
          headers: {'X-RapidAPI-Key': '3dbfc0433dmsh56b1204eaeeb95dp104faejsnc54fdda40931', 'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'}};
      const response = await fetch(newUrl, options);
      const data = await response.json();
      const secondRecipeName  = data.hits[0].recipe.label;
      const secondRecipeImg  = data.hits[0].recipe.image;
      const secondRecipeLink = data.hits[0].recipe.url;
      var htmlDiv = `<h1><span>${secondRecipeName}</span></h1>
      <img width="100%" height="800px" class="imageSize" id="secondRecipeImg" src="${secondRecipeImg}">
      <button id="secondButton" class="button is-danger"><a id="secondRecipeList" href="${secondRecipeLink}">Click for Recipe!</a></button>`
      if(secondRecipeImg){
        document.getElementById("secondDiv").innerHTML = htmlDiv
      }
    }

  //Call the function on the click of the button and prevent the page from reloading
randomizeButton.addEventListener('click', function(event){
  event.preventDefault();
  document.querySelector('.instructions').classList.add('hide');
  document.querySelector('.instructions2').classList.add('hide');
  document.getElementById('firstDiv').classList.remove('hide');
  document.getElementById('firstYoutube').classList.remove('hide');
  getRecipeName(); 
})
//Had to end it here