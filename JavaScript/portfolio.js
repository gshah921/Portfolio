
/*smooth scroll type 1*/
$("#homelink").click(function () {
    $('html, body').animate({
        scrollTop: $("#name").offset().top
    }, 700);
});

$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 700);
});

$("#contactbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 700);
});

$("#experiencebtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 700);
});

$("#skillsbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#skillsscroll").offset().top
    }, 700);
});

///*smooth scroll type 2*/
//$('navlink a').click(function () {
//    var $href = $(this).attr('href');
//    $('body').stop().animate({
//        scrollTop: $($href).offset().top
//    }, 1000);
//    return false;
//});

//scrollspy
//var $movebg = $(window).scrollTop() * -0.3;
//$('.portion').css('background-positionY', ($movebg) + 'px');

//var scrollPos = $(document).scrollTop() + 100;
//$('navlink a').each(function () {
//    var currLink = $(this);
//    var refElement = $(currLink.attr("href"));
//    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//        $('navlink a').removeClass("active");
//        currLink.addClass("active");
//    }
//});

//if (scrollPos > 250) {
//    $('.navbar-nav a').addClass('small');
//} else {
//    $('.navbar-nav a').removeClass('small');
//}
  
