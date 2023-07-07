var msgArray = ["/* negocio que escreve coisa*/"];
var textPosition = 0;
var speed = 85;

typewriter = () => {
    document.querySelector("#msg").
    innerHTML = msgArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if (textPosition ++ != msgArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);