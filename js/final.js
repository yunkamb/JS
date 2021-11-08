class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
    }
}

const arrayUsuarios = [];

let continuar = "s";

while (continuar === "s") {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = parseInt(prompt("Ingrese su edad"));

    let nuevoUsuario = new Usuario(nombre, apellido, edad);
    arrayUsuarios.push(nuevoUsuario);

    continuar = prompt("¿Desea ingresar otro usuario? (s/n)");
}

console.log(arrayUsuarios);


let preview = prompt("¿Desea visualizar su información?(s/n)")

let i = 0;

function increaseNumber() {
    i += 1;
}


while (preview === "s") {
    alert(`Bienvenido ${arrayUsuarios[i].nombre} ${arrayUsuarios[i].apellido} de ${arrayUsuarios[i].edad} años de edad`)
    if (preview === "n") {
        alert("Muchas gracias por utilizar nuestra pagina");
        break
    }
    preview = prompt("¿Desea visualizar otro usuario? (s/n)");

    do {
        increaseNumber();
    } while (i < arrayUsuarios.lenght);
}


alert("Muchas gracias por utilizar nuestra pagina");