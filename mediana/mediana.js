const calcularMediaAritmetica = (lista) => {
    let sumaLista = 0
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }
    
    const promediolista = sumaLista / lista.length

    return promediolista
}

calcularMediana = (lista) => {
    const listaOrdenada = lista.sort((a, b) => a - b)
    const mitadLista = parseInt(listaOrdenada.length / 2)
    esPar = (numero) => {
        if (numero % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    let mediana
    if (esPar(listaOrdenada.length)) {
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
        mediana = promedioElemento1y2
        return mediana
    } else {
        mediana = listaOrdenada[mitadLista]
        return mediana
    }
}

console.log(calcularMediana([1,4,50,40,]));