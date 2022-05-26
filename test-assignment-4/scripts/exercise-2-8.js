$(".start-withdrawal").click(function () {
    $(".in-withdrawal").css({"display":"flex","align-items":"center","justify-content":"center"}).slideDown();
});

$(".stop-withdrawal").click(function () {
    $(".in-withdrawal").slideUp();
});