$(document).ready(function(){
    $('.toggle').click(function(){
        $('nav').toggleClass('return');
    });
    $('nav ul').click(function(){
        $('ul').toggleClass('return');
    });
    $('.go-back').click(function(){
        $('ul').toggleClass('return');
    })
})