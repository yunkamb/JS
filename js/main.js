// Desafio clase 08 DOM 

let numero = Number(document.querySelector("#numeroEscogido").value);
let año = Number(document.querySelector("#numeroEdad").value);
let cumple = document.getElementById("numeroCumple");

cumple.addEventListener('change', function () {
    if (this.checked) {
        cumple = 1771;
    } else {
        cumple = 1770;
    }
});


function calcularResultado() {
    console.log(`${numero}, ${año}, ${cumple}`)
}