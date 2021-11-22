let usuariosCreados = document.querySelector("#usuariosCreados");
let usuariosListas = document.querySelectorAll("ul");
let numeroUsuario = 0;
let mostrarUsuarios = document.querySelector("#json")
let usuarioAdded = document.querySelector(".usuarioAdded")
const arrayUsuarios = [];
const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

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
    $('.usuarioAdded').finish().fadeIn("fast").delay(1000).fadeOut("slow");
}

const storageTest = () => {
    let guardarArray = JSON.stringify(arrayUsuarios);
    localStorage.setItem("infoUsuarios", guardarArray);
}


const loopArray = () => {
    for (let i = 0; i < infoUsuarios.length; i += 1) {
        ul = document.createElement('ul');
        ul.style.backgroundColor = "#c53b1c41";
        ul.id = 'usuariosLista';
        ul.className = 'usuariosListaClass';
        ul.innerHTML = `<h2>Usuario N°${infoUsuarios[i].numero}</h2> <li>Nombre: ${infoUsuarios[i].nombre}</li> <li>Apellido: ${infoUsuarios[i].apellido}</li> <li>Edad: ${infoUsuarios[i].edad}</li>`;
        usuariosCreados.appendChild(ul);
    }
}

mostrarUsuarios.addEventListener('click', function () {
    archivoJSON = localStorage.getItem("infoUsuarios");
    infoUsuarios = JSON.parse(archivoJSON);
    if (usuariosCreados.innerHTML == ""){
        loopArray();
    }else {
        removeAllChildNodes(usuariosCreados);
        loopArray();
    }
});