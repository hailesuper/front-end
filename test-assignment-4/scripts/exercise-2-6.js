$("img").click(function () {
    $(this).animate({
        width: "+=150px",
        height: "+=150px",

    }, function () {
        const youCanDoItAudio = new Audio("audio/you-can-do-it.mp3")
        youCanDoItAudio.play();
    })
})