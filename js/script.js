$(document).ready(function () {
  $("#creator_slider").owlCarousel({
    loop: false,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    nav: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#live_bids").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:true,
    items: 1,
  });
});
