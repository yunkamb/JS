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
    
    let nuevoUsuario = new Usuario (nombre, apellido, edad);
    arrayUsuarios.push(nuevoUsuario);

    continuar = prompt("¿Desea ingresar otro usuario? (s/n)");
}

console.log(arrayUsuarios);


/* let preview = prompt("¿Desea visualizar su información?(s/n)")

if (preview === s) {
    document.write(`Bienvenido ${arrayUsuarios.nombre[0]}`)
} */
/* 
alert(`Bienvenido ${arrayUsuarios.nombre[0]}`) */