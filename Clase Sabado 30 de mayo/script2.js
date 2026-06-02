console.log("inicializando...");
let usuario = "juan";
let password = "1234";

// el && sirve para comparar dos condiciones y que ambas sean verdaderas
if (usuario == "juan" && password == "1234") {
    console.log("Bienvenido al sistema");
} else {
    console.log("Usuario o contraseña incorrectos");
}

let diasemana = 7; 
 
switch (diasemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no corresponde a los 7 días de la semana"); 
        break;      
}

//arreglos 

let arregloDeNotas = [7, 7, 8, 9, 10];
arregloDeNotas.push(6);


console.log(arregloDeNotas[0]);
let arregloDeNombres = ["Juan", "María", "Pedro"];
console.log(arregloDeNombres);

let arreglospersonas = [
    {nombre: "Juan", apellido: "Pérez", edad: 30},
    {nombre: "María", apellido: "Gómez", edad: 25},
    {nombre: "Pedro", apellido: "López", edad: 35},
    {nombre: "Ana", apellido: "Martínez", edad: 28}
];
arreglospersonas.push({nombre: "Ana", apellido: "Martínez", edad: 28});

console.log(arreglospersonas);
console.log(arreglospersonas[0].nombre);
console.log(arreglospersonas[1].apellido);
console.log(arreglospersonas[2].edad);











