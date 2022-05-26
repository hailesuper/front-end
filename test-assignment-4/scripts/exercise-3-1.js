$("button").click(function () {
    let inputValue = $("#name");
    alert(`Value: ${inputValue.val()}`);
    inputValue.val("")
})