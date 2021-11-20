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

let usuariosCreados = document.querySelector("#usuariosCreados");
const arrayUsuarios = [];
let numeroUsuario = 0;
let i = 0;

class Usuario {
    constructor(numero, nombre, apellido, edad) {
        this.numero = numero;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
    }
}

const añadirUsuario = () => {
    let numero = ++numeroUsuario;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = Number(document.querySelector("#edad").value);

    let nuevoUsuario = new Usuario(numero, nombre, apellido, edad);
    arrayUsuarios.push(nuevoUsuario);
    console.log(arrayUsuarios);
    storageTest();
}

const storageTest = () => {
    let guardarArray = JSON.stringify(arrayUsuarios);
    localStorage.setItem("infoUsuarios", guardarArray);
}


const showJSON = document.querySelector("#json");

let mostrarUsuarios = document.querySelector("#json")

mostrarUsuarios.addEventListener('click', function () {
    archivoJSON = localStorage.getItem("infoUsuarios");
    infoUsuarios = JSON.parse(archivoJSON);
    for (let i = 0; i < infoUsuarios.length; i += 1) {
        div = document.createElement('div');
        div.style.backgroundColor = "#c53b1c41";
        div.id = 'usuariosCreados';
        div.className = 'usuarios';
        div.innerHTML = `Usuario N°${infoUsuarios[i].numero} Nombre: ${infoUsuarios[i].nombre} Apellido: ${infoUsuarios[i].apellido} Edad: ${infoUsuarios[i].edad}`;
        document.body.appendChild(div);
    }
});