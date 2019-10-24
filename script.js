var height = $(".header").height();

$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $(".main-nav").addClass("fixed");
    }
    else {
        $(".main-nav").removeClass("fixed");
    }
})