//Desafío Clase 01 y 02

/* let numero = prompt("Elija un número del 1 al 9 : ");
let año = prompt("Escriba su año de nacimiento :")
let cumple = prompt("¿ Tu cumpleaños ya ha pasado este año ?")

if (cumple == "si") {
    cumple = 1771
} else {
    cumple = 1770
}

let edad = (((numero * 2) + 5) * 50 + cumple) - año;
alert("El primer dígito de la siguiente cifra es el número que escogiste, y las siguientes dos cifras indican tu edad: " + edad); */


//Desafio Clase 03 - Loops

/* let planeta = prompt("Ingrese un planeta").toLowerCase();


while (planeta != "esc") {
    switch (planeta) {
        case "mercurio":
            alert("Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Se encuentra a 58 millones de Km del Sol.");
            break;
        case "venus":
            alert("Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Se eucneutra a 108 millones de Km del Sol.");
            break;
        case "tierra":
            alert("Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos. Se encuentra a 149,6 millones de Km del Sol.");
            break;
        case "marte":
            alert("Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Se encuentra a 228 millones de Km del Sol.");
            break;
        case "jupiter":
            alert("Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Se encuentra a 779 millones de Km del Sol.");
            break;
        case "saturno":
            alert("Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Se encuentra a 1.433 millones de Km del Sol.");
            break;
        case "urano":
            alert("Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se encuentra a 2.873 millones de Km del Sol.");
            break;
        case "neptuno":
            alert("Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Se encuentra a 4.495 millones de Km del Sol.");
            break;
        case "pluton":
            alert("Plutón es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Se encuentra a 5.916 millones de Km del Sol.");
            break;
    }
    planeta = prompt("Ingrese otro planeta").toLowerCase(); 
} */


//Desafio clase 04 - Funciones

/* let numero = prompt("Elija un número del 1 al 9 : ");
let año = prompt("Escriba su año de nacimiento :")
let cumple = prompt("¿ Tu cumpleaños ya ha pasado este año ?")

if (cumple == "si") {
    cumple = 1771
} else {
    cumple = 1770
}

let edad = 0;

function calcular(numero, año, cumple) {
    edad = (((numero * 2) + 5) * 50 + cumple) - año;
}

calcular(numero, año, cumple)

alert(`El primer dígito de la siguiente cifra es el número que escogiste, y las siguientes dos cifras indican tu edad: ${edad}`); */