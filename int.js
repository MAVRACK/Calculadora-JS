function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function backspace() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(
        0,
        resultado.length - 1,
    );
}

function calcule() {
    var resultado = document.getElementById("resultado").innerHTML;

    if (resultado)
        document.getElementById("resultado").innerHTML = eval(resultado);
    else {
        document.getElementById("resultado").innerHTML = "ERROR";
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = () => {
    var cleanBtn = document.querySelector(".clean");
    var backspaceBtn = document.querySelector(".backspace");
    var calculeBtn = document.querySelector(".calcule");

    cleanBtn.addEventListener("click", clean);
    backspaceBtn.addEventListener("click", backspace);
    calculeBtn.addEventListener("click", calcule);
};
