$(function(){

  $(".banner-web").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next")
  });

})