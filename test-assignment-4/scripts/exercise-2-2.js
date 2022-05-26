$(".call-to-show").click(function () {
    $(".instruction").slideDown();
    $("iframe").slideDown();
    $("iframe")[0].src += "?autoplay=1";
})
