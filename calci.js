function add(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calci(callbackFunction) {
    callbackFunction();
}

module.exports = {
    add,
    diff,
    mul,
    div,
    calci
}