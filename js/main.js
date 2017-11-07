 $('.owl-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    margin:17,
    touchDrag: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive: {
          
          0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
