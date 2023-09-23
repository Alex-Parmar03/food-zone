
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1,
    speed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


let custom_accordion = document.getElementsByClassName('custom-accordion');

// for (i = 0; i < custom_accordion.length; i++) {
//     custom_accordion[i].addEventListener('click', function () {
//         this.classlist.toggle('active');
//     })
// }
