/*
$(".nav-logo").click(function(){
    $("#logo").animate({opacity:"0.5"});
})



$(".about-me aboutme-image").click(function(){
    $("#id1").animate({
        height:"200px",
        width:"200px",
        marginleft:"30px",
    },2000);
})
*/



$(".profile").click(function(){
    $("#heading").slideUp(2000).slideDown(2000);
})

$(".nav-logo").click(function(){
    $("#logo").animate({opacity:"0.5"});
})

$(function () {     
    $(".focusme").focus(function(){
        $(this).img.invert();
    });
});

