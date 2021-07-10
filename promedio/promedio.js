const lista1 = [
    100,
    200,
    300,
    500
]

const calcularMediaAritmetica = (lista) => {
    let sumaLista = 0
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }
    
    /* const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    ) */ // Otra manera de hacer el ciclo for con el metodo reduce 

    const promediolista = sumaLista / lista.length

    return promediolista
}
