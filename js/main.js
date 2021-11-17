// Desafio clase 08 DOM 

let edad = 0;

let parrafo = document.querySelector("#resultadoMat")

let cumple = document.querySelector("#numeroCumple");
cumple.addEventListener("change", function () {
    if (this.checked) {
        cumple = 1771
    } else {
        cumple = 1770
    }
})

let defaultCumple = 1770

function calcularResultado() {
    let numero = Number(document.querySelector("#numeroEscogido").value);
    let año = Number(document.querySelector("#numeroEdad").value);
    calcular(numero, año, cumple);
    mostrarResultado();

}

function calcular(numero, año, cumple) {
    if (cumple == "1771") {
        edad = (((numero * 2) + 5) * 50 + cumple) - año;
    } else {
        edad = (((numero * 2) + 5) * 50 + defaultCumple) - año;
    }
}

function mostrarResultado() {
    parrafo.style.backgroundColor = "#c53b1c41";
    parrafo.textContent = `El primer dígito de la siguiente cifra es el número que escogiste, y las siguientes dos cifras indican tu edad: ${edad}`;
}