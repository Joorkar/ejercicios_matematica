inversionConInteresSimple = (montoInicial, porcentajeInteres, tiempoAnos) => {
    let capital = Number(montoInicial)
    let tiempo = Number(tiempoAnos)
    let tasaInteres = Number(porcentajeInteres / 100)

    let interesSimple = capital * tasaInteres * tiempo
    let montoFinal = capital + interesSimple
    return Number(montoFinal)
}

inversionConInteresCompuesto = (montoInicial, porcentajeInteres, tiempoAnos) => {
    let capital = Number(montoInicial)
    let tiempo = Number(tiempoAnos)
    let tasaInteres = Number(porcentajeInteres / 100)

    let montoFinal = capital * (1 + tasaInteres) ** tiempo
    return Number(montoFinal)
}

redondeoAlcentesimo = (numero) => {
    numero = Math.round((numero + Number.EPSILON) * 100) / 100
    return numero
}

reset = () => {
    const inputAmount = document.getElementById('input-amount')
    const inputInterest = document.getElementById('input-interest')
    const inputTime = document.getElementById('input-time')
    const inputTypeInterest = document.getElementById('type-interest')
    
    let montoValue = inputAmount.value
    let interesValue = inputInterest.value
    let tiempoValue = inputTime.value
    let tipoInteresValue = inputTypeInterest.value

    montoValue = ''
    interesValue = ''
    tiempoValue = ''
    tipoInteresValue = 'simple'
}

mostrarMontoInversion = () => {
    const inputAmount = document.getElementById('input-amount')
    const inputInterest = document.getElementById('input-interest')
    const inputTime = document.getElementById('input-time')
    const inputTypeInterest = document.getElementById('type-interest')
    const textResultado = document.getElementById('answer')

    let montoValue = inputAmount.value
    let interesValue = inputInterest.value
    let tiempoValue = inputTime.value
    let tipoInteresValue = inputTypeInterest.value

    if (montoValue !== '' && interesValue !== '' && tiempoValue !== '') {
        let resultado = 0
        if (tipoInteresValue === 'simple') {
            resultado = inversionConInteresSimple(montoValue, interesValue, tiempoValue)
            resultado = redondeoAlcentesimo(resultado)
            textResultado.innerHTML = `Tu inversión con el capital inicial de ${montoValue} y el interes simple anual de ${interesValue}% durante ${tiempoValue} años sera de <span>${resultado}</span>.`
        }
        if (tipoInteresValue === 'compuesto') {
            resultado = inversionConInteresCompuesto(montoValue, interesValue, tiempoValue)
            resultado = redondeoAlcentesimo(resultado)
            textResultado.innerHTML = `Tu inversión con el capital inicial de ${montoValue} y el interes complejo anual de ${interesValue} durante ${tiempoValue} años sera de <span>${resultado}</span>.`
        }
    } else {
        textResultado.innerHTML = `Error ❗❗`
    }
}