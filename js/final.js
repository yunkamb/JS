/* const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

let datos = localStorage.getItem("listaProductos");
let obj = JSON.parse(datos);

 */

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

if (preview == 'n') {
    alert("Muchas gracias por utilizar nuestra pagina");
} else {
    for (let i = 0; i < arrayUsuarios.length; i++) {
        alert(`Bienvenido ${arrayUsuarios[i].nombre} ${arrayUsuarios[i].apellido} de ${arrayUsuarios[i].edad} años de edad`)
    }
}

function cantidadUsuarios(a) {
    usuariosCreados = a;
    alert(`Has creado ${usuariosCreados} usuarios.`);
}

cantidadUsuarios(arrayUsuarios.length);


alert("Muchas gracias por utilizar nuestra pagina");