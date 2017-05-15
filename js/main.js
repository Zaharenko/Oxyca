
$( document ).ready(function() {
   $('#got-it').click(function(){
   	$('.cookies').hide();
   });
});

$( document ).ready(function() {
   $('.btn-join').mouseover(function(){
   	$('.join').addClass("plus-img");
   });
   	$('.btn-join').mouseout(function(){
   	$('.join').removeClass("plus-img");
   });
});

$( document ).ready(function() {
   $('#login').click(function(){
   	$('.login').show('slow');
   	$('.entrance').show('slow');
   });
 
   $('.close').click(function(){
   	$('.login').hide('fast');
   	$('.entrance').hide('fast');
   	$('.login-join').hide('fast');
   	$('.entrance-join').hide('fast');
   });

   $('.btn-join').click(function(){
   	$('.login-join').show('slow');
   	$('.entrance-join').show('slow');
   });

});


$('.btn-join-login').click(function(){
     var value = $(".nick").val();
     $(".check").remove();
     $(".navbar-right").html('<i class="fa fa-user fa-2x"> '+value+'</i>');
     $(".navbar-right").text();
     $('.login').hide('fast');
      $('.entrance').hide('fast');
   });


 $('.middle').slick({
    infinite: false,
   autoplay: true,
   slidesToShow: 5,
   slidesToScroll: 1,
   infinite: true,
   nextArrow: '<i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>',
   prevArrow: '<i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>',
   responsive: [
    {
      breakpoint: 480,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
]
});

