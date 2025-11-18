let numeroActual = "";
let numeroAnterior = "";
let operacion = null;

function agregar(num) {
    numeroActual += num;
    actualizarPantalla();
}

function operar(op) {
    if (numeroActual === "") return;

    numeroAnterior = numeroActual;
    operacion = op;
    numeroActual = "";
}

function calcular() {
    let resultado;

    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = actual === 0 ? "Error" : anterior / actual;
            break;
        default:
            return;
    }

    numeroActual = resultado;
    operacion = null;
    numeroAnterior = "";
    actualizarPantalla();
}

function limpiar() {
    numeroActual = "";
    numeroAnterior = "";
    operacion = null;
    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById("pantalla").value = numeroActual;
}
