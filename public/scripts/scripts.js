const responsiveCarousel = document.querySelector(".glide");

const config = {
  type: 'slider',
  perView: 1,
  focusAt: 'center'
}

new Glide(responsiveCarousel, config).mount()