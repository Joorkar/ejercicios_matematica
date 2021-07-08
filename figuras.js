// Código del cuadrado
let perimetroCuadrado = lado => lado * 4

let areaCuadrado = lado => lado * lado

// Código del triangulo
let perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base

let areaTriangulo = (base, altura) => (base * altura) / 2

// Código del circulo
let diametroCirculo = radio => radio * 2

const pi = Math.PI
const piCuatroDecimales = pi.toFixed(4)

let perimetroCirculo = radio => {
    let diametro = diametroCirculo(radio)
    return diametro * piCuatroDecimales
}

let areaCirculo = radio => (radio * radio) * piCuatroDecimales

// Aqui interactuamos con HTML

//Cuadrado
calcularPerimetroCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

calcularAreaCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}

//Triangulo
calcularPerimetroTriangulo = () => {
    const input_1 = document.getElementById('inputTriangulo1')
    const value_1 = parseInt(input_1.value)
    const input_2 = document.getElementById('inputTriangulo2')
    const value_2 = parseInt(input_2.value)
    const input_base = document.getElementById('inputTrianguloBase')
    const value_base = parseInt(input_base.value)

    const perimetro = perimetroTriangulo(value_1, value_2, value_base)
    alert(perimetro)
}

calcularAreaTriangulo = () => {
    const input_base = document.getElementById('inputTrianguloBase')
    const value_base = parseInt(input_base.value)
    const input_altura = document.getElementById('inputTrianguloAltura')
    const value_altura = parseInt(input_altura.value)

    const area = areaTriangulo(value_base, value_altura)
    alert(area)
}

//Circulo
calcularDiametroCirculo = () => {
    const input = document.getElementById('inputCirculo')
    const value = input.value
    const perimetro = diametroCirculo(value)
    alert(perimetro)
}

calcularPerimetroCirculo = () => {
    const input = document.getElementById('inputCirculo')
    const value = input.value
    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

calcularAreaCirculo = () => {
    const input = document.getElementById('inputCirculo')
    const value = input.value
    const area = areaCirculo(value)
    alert(area)
}