$("div").click(function () {
    $(this).animate({
        left: "+=250",
        opacity: "50%",
        width: "+=50px",
        height: "+=50px",

    }, function () {
        $(this).css("background-color","red");
    })
})