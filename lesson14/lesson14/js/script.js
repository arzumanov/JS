$(document).ready(function (){
    $('.main_btn, .main_btna, li:eq(7)').on('click', function(){
        $('.overlay').fadeIn(1000, function(){
            $('.modal').slideDown('slow');
        });
       
    });
    $('.close').on('click', function (){
        $('.modal').slideUp('slow', function(){
            $('.overlay').fadeOut('1000');
        });
    });
});