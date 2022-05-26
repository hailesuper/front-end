$("div").click(function () {
    $(this).animate({
        left: "+=250",
    }, function () {
        $(this).css("background-color","red");
    })
})