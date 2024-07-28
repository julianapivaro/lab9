document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
