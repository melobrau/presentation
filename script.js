var msgArray = ["/* negócio que escreve coisa, clica ai ou aperta qualquer botão pra abrir o outro negócio */"];
var textPosition = 0;
var speed = 85;

typewriter = () => {
    document.querySelector("#msg").
    innerHTML = msgArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if (textPosition ++ != msgArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

document.addEventListener('click', function(){
    window.location.assign('calculadora/calculadora.html')
})

document.addEventListener('keydown', function(e){
    window.location.assign('calculadora/calculadora.html')
})

