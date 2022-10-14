var userInput = document.getElementById('userSearch'); 
var firstCarousel = document.getElementById("carousel")
var splide = new Splide( firstCarousel, {
    perPage: 3,
    rewind : true,
  } );
  
  splide.mount();


  const tastySettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "3dbfc0433dmsh56b1204eaeeb95dp104faejsnc54fdda40931",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com"
    }
  };

  console.log(userInput.value);

  addEventListener('click', function(event){

  })