setTimeout(function(){
  $("#pre-main").fadeOut();
},4000)

 setTimeout(function(){
    $(".preloader").fadeOut();
},4000)



const cd = new Date().getFullYear() + 1
$('#countdown').countdown({
    year: cd
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5 , 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



$(".about-slider").slick({
  autoplay: true,
  autoplaySpeed: 6000,
    prevArrow:'<i class="fas fa-long-arrow-alt-left about-prv"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right about-nxt"></i>',
    
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,   
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            prevArrow:'<i class="fas fa-arrow-up ups"></i>',
            nextArrow:'<i class="fas fa-arrow-down downs"></i>',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            prevArrow:'<i class="fas fa-arrow-up ups"></i>',
            nextArrow:'<i class="fas fa-arrow-down downs"></i>',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            prevArrow:'<i class="fas fa-arrow-up ups"></i>',
            nextArrow:'<i class="fas fa-arrow-down downs"></i>',
          }
        }
         // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
 

$(".team-left").slick({
    prevArrow:'<i class="fas fa-chevron-up up"></i>',
    nextArrow:'<i class="fas fa-chevron-down down"></i>',
    vertical:true,
    slidesToShow:3,
    centerMode:true,
    centerPadding:0,
    asNavFor:".team-details",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
   
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical:false,
          prevArrow:'<i class="fas fa-arrow-circle-left lefts"></i>',
          nextArrow:'<i class="fas fa-arrow-circle-right rights"></i>',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical:false,
          prevArrow:'<i class="fas fa-arrow-circle-left lefts"></i>',
          nextArrow:'<i class="fas fa-arrow-circle-right rights"></i>',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical:false,
          prevArrow:'<i class="fas fa-arrow-circle-left lefts"></i>',
          nextArrow:'<i class="fas fa-arrow-circle-right rights"></i>',
        }
      }
       // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
})
$(".team-details").slick({
  arrows:false,
    vertical:true,
    slidesToShow:1,
    asNavFor:".team-left",
})
$(".news-slider").slick({
    slidesToShow:1,
    prevArrow:'<i class="fas fa-long-arrow-alt-left news-prv"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right news-nxt"></i>',
})

 


// new VenoBox({
//     selector: '.my-video-links',
// });

new VenoBox({
    selector: ".my-link"
});


// Set the date we're counting down to
var countDownDate = new Date("Jan 5 , 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(window).scroll(function(){
  console.log($(window).scrollTop())

  if($(window).scrollTop() > 185){

    $(".menu").addClass("top")
  }else{
    $(".menu").removeClass("top")
  }

  if($(window).scrollTop() > 800){

    $(".bottom-top").fadeIn()
  }else{
    $(".bottom-top").fadeOut()
  }
})


$(".bottom-top").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})