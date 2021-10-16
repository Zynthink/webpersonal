$(document).ready(function(){
    $('#botton').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function() {
        $('#botton').removeClass('fa-times');
        $('header').removeClass('toggle');
        
        
    });
});