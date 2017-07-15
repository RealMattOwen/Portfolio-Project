var timeout;

$(window).scroll(function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if($(window).scrollTop() + 50 < $('.about').position().top){
            $('li a').removeClass('active');
            $('.work-btn').addClass('active');
        } else {
            $('li a').removeClass('active');
            $('.about-btn').addClass('active');
        }
    }, 50);
});

$('#logo').click(function() {
    $('html,body').animate({
        scrollTop: 0},
    1000);
    $('li a').removeClass('active');
    $('.work-btn').addClass('active');
});

$('.work-btn').click(function() {
    $('html,body').animate({
        scrollTop: 0},
    1000);
    $('li a').removeClass('active');
    $('.work-btn').addClass('active');
});

$('.about-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('.about').offset().top},
    1000);
    $('li a').removeClass('active');
    $('.about-btn').addClass('active');
});

$('.contact-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('.about').offset().top},
    1000);
    $('li a').removeClass('active');
    $('.contact-btn').addClass('active');
});