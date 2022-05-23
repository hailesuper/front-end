let calButton = document.querySelector(".calButton");
calButton.addEventListener("click", () => {
    let firstLength = Number(document.querySelector("#firstLength").value);
    let secondLength = Number(document.querySelector("#secondLength").value);
    if (firstLength <= 0 || secondLength <= 0)
        alert("Giá trị nhập vào <= 0");
    else {
        let perimeterOutput = document.querySelector("#perimeter");
        let areaOutput = document.querySelector("#area");
        perimeterOutput.value = 2 * (firstLength + secondLength);
        areaOutput.value = firstLength * secondLength;
    }
})