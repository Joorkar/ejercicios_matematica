const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
]

calcularModa = (lista) => {
    const listaCount = {}

    lista.map(
        (elemento) => {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1
            } else {
                listaCount[elemento] = 1
            }
        }
    )

    const listaArray = Object.entries(listaCount).sort(
        (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
    )

    const moda = listaArray[listaArray.length - 1]

    return moda
}

