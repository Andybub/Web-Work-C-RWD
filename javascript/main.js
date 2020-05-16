$(document).ready(function(e){

    $('a').click(function(e){
        e.preventDefault();
    })

    $('.nav-button a').click(function(e){
        $('.modal-container-dark').fadeIn();
        $('.modal-dark').addClass('grow');
    })

    $('.modal-container-dark').click(function(e){
        $(this).fadeOut();
        $('.modal-dark').removeClass('grow');
    })

    $('.modal-dark').click(function(e){
        e.stopPropagation();
    })

    $('.search-small').click(function(e){
        $('.modal-container-light').fadeIn();
    })

    $('.search-big.read').click(function(e){
        $(this).removeClass('active');
        $('.search-big.edit').addClass('active');
        $('.search-big.edit input').focus();
    })

    $('.search-big.edit input').blur(function(e){
        $('.search-big.edit').removeClass('active');
        $('.search-big.read').addClass('active');
    })

    $('.close a').click(function(e){
        $('.modal-container-light').fadeOut();
    })

    $('.go-top').click(function(e){
        let offset = $('body').offset();
        $('html, body').animate({scrollTop: offset.top});
    })

    $('.email.read').click(function(e){
        $(this).removeClass('active');
        $('.email.edit').addClass('active').focus();
    })

    $('.email.edit').blur(function(e){
        $(this).removeClass('active');
        $('.email.read').addClass('active');
    })

    $('.search.read').click(function(e){
        $(this).removeClass('active');
        $('.search.edit').addClass('active').focus();
    })

    $('.search.edit').blur(function(e){
        $(this).removeClass('active');
        $('.search.read').addClass('active');
    })

    $('.pages .page').click(function(e){
        let index = $(e.currentTarget).index();
        $('.pages .page').removeClass('active').eq(index).addClass('active');
    })

});