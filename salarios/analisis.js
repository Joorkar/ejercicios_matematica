// Funciones Helpers
esPar = (numero) => numero % 2 === 0

calcularMediaAritmetica = (lista) => {
    let sumaLista = 0
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }
    
    const promediolista = sumaLista / lista.length

    return promediolista
}

// Calculadora de Mediana
medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

// Mediana General
const salariosNic = nicaragua.map((persona) => persona.salary)

const salariosNicSorted = salariosNic.sort((salaryA, salaryB) => salaryA - salaryB)

const medianaGeneralNic = medianaSalarios(salariosNicSorted)

// Mediana del top 10%


const spliceStart = (salariosNicSorted.length * 90) / 100
const spliceCount = salariosNicSorted.length - spliceStart

const salariosNicTop10 = salariosNicSorted.splice(spliceStart, spliceCount)
const medianaTop10Nic = medianaSalarios(salariosNicTop10)

console.log({
    medianaGeneralNic,
    medianaTop10Nic
})