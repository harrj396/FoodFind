var firstCarousel = document.getElementById("carousel")
var splide = new Splide( firstCarousel, {
    perPage: 3,
    rewind : true,
  } );
  
  splide.mount();