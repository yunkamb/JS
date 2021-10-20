let numero = prompt("Elija un número del 1 al 9 : ");
let año = prompt("Escriba su año de nacimiento :")
let cumple = prompt("¿ Tu cumpleaños ya ha pasado este año ?")

if (cumple = "si"){
    cumple = 1771
} else {
    cumple = 1770
}


let edad = (((numero * 2) + 5) * 50 + cumple) - año;
alert("El primer dígito de la siguiente cifra es el número que escogiste, y las siguientes dos cifras indican tu edad: " + edad);