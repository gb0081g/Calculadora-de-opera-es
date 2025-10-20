function Soma(a, b) {
    // console.log("Soma: ", Soma(6, 3));
    return a + b;
}

function Multi(a, b) {
    // console.log("Multiplicação: ", Multi(6, 3));
    return a * b;
}

function Divi(a, b) {
    // console.log("Divisão: ", Divi(6, 3));
    return a / b;
}

function Sub(a, b) {
    // console.log("Subtração: ", Sub(6, 3));
    return a - b;
}

// let x = Soma(6, 3);
// console.log("Soma: ", x);

module.exports = { Soma, Multi, Divi, Sub };