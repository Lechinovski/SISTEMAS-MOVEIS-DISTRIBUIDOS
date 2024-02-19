document.getElementById("botao").addEventListener("click", acender);

function acender() {
    var lampada = document.getElementById("lampada");
    var botaoImg = document.getElementById("botaoImg");
    if (lampada.classList.contains("apagada")) {
        lampada.src = "img/Ligado.png";
        lampada.alt = "Acesa";
        lampada.title = "Acesa";
        lampada.classList.remove("apagada");
        botaoImg.src = "img/on.png";

    } else {
        lampada.src = "img/Apagado.png";
        lampada.alt = "Apagada";
        lampada.title = "Apagada";
        lampada.classList.add("apagada");
        botaoImg.src = "img/off.png";
    }
}
