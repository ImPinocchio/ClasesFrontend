console.log(multiplicar(5,50));
function multiplicar(a, b) {
    return a * b;
}

const multiplication  = function(a, b) {
    return a * b;
}
console.log(multiplication(5, 10));


const dividir = (a, b) => {
    return a / b;
}
console.log(dividir(10, 5));



const productos = [
    {id: 1 , nombre: "laptop", },
    {id: 2 , nombre: "celular", },
    {id: 3 , nombre: "tablet", },
    {id: 4 , nombre: "monitor"},
];
const buscarProducto = productos.find(x => x.nombre === "celular");
console.log(buscarProducto);
console.log(productos);

const peliculas = [
    {id: 1 , nombre: "El Padrino", },
    {id: 2 , nombre: "El Señor de los Anillos", },
    {id: 3 , nombre: "El Hobbit", },
    {id: 4 , nombre: "Pacific Rim"},
];

const buscarPelicula = peliculas.find(x => x.nombre === "El Hobbit");
if (buscarPelicula == undefined) {
    console.log("La película no se encontró");
} else {
    console.log(buscarPelicula);
}

setTimeout(() => {
    const buscarPelicula = peliculas.find(x => x.nombre === "El Hobbit");
    if (buscarPelicula == undefined || buscarPelicula == null) {
        console.log("La película no se encontró");
    } else {
        console.log(buscarPelicula);
    }
}, 5000);


let promesaPizza = new Promise((resolve, reject) => {
    let todoBien = true;
    if (todoBien){
        resolve("todo bien con la pizza");
    } else {
        reject("algo salió mal con la pizza");
    }
})

promesaPizza.then((respuesta) => {console.log(respuesta)}).catch((error) => {console.log(error)});

// http://cine.runasp.net/api/Actores


fetch("http://cine.runasp.net/api/Actores").then(response => response.json()).then(respuesta => {
    parrafo.innerHTML = JSON.stringify(respuesta);
}).catch(error => console.log(error));

fetch("http://cine.runasp.net/api/Generos").then(response => response.json()).then(respuesta => console.log(respuesta)).catch(error => console.log(error));

let parrafo = document.getElementById("parrafo");







