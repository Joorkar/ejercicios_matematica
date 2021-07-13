const calcularMediaGeometrica = (lista) => {
    const multiplicacion = lista.reduce((acumulador, valorInicial) => acumulador * valorInicial)
    return multiplicacion ** (1 / lista.length)
}
