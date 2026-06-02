let numero = 1;
let bandera = 0;

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(sumar(5, 10));

function restar(numero1, numero2) {
    return numero1 - numero2;
}
console.log(restar(5, 10));

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicar(5, 10));

function dividir(numero1, numero2) {
    return numero1 / numero2;
}
console.log(dividir(10, 5));
// === sirve para comparar el valor y el tipo de dato
function calculadora(numero1, numero2, operacion) {
    if (operacion === "suma") {
        return sumar(numero1, numero2);
    } else if (operacion === "resta") {
        return restar(numero1, numero2);
    } else if (operacion === "multiplicacion") {
        return multiplicar(numero1, numero2);
    } else if (operacion === "division") {
        return dividir(numero1, numero2);
    }
}
console.log(calculadora(23, 10, "suma"));
console.log(calculadora(7, 10, "resta"));
console.log(calculadora(9, 10, "multiplicacion"));
console.log(calculadora(1, 5, "division"));

