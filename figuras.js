// Código del cuadrado

console.group('Cuadrados')
const ladoCuadrado = 5
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El área del cuadrado mide: ${areaCuadrado}cm²`)
console.groupEnd()

// Código del triangulo

console.group('Triángulos')
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)

const alturaTriangulo = 5.5
console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perímetro del triángulo mide: ${perimetroTriangulo}cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El área del triángulo mide: ${areaTriangulo}cm²`)

console.groupEnd()

// Código del circulo

console.group('Circulos')
const radioCirculo = 4
console.log(`El radio del círculo mide: ${radioCirculo}cm`)

const diametroCirculo = radioCirculo * 2
console.log(`El diámetro del círculo mide: ${diametroCirculo}cm`)

const pi = Math.PI
const piDosDecimales = pi.toFixed(4)
console.log(`El π del círculo mide: ${piDosDecimales}cm`)

const perimetroCirculo = diametroCirculo * pi
const perimetroCirculoDosDecimales = perimetroCirculo.toFixed(2)
console.log(`El perímetro del círculo mide: ${perimetroCirculoDosDecimales}cm`)

const areaCirculo = (radioCirculo * radioCirculo) * pi
const areaCirculoDosDecimales = areaCirculo.toFixed(2)
console.log(`El área del círculo mide: ${areaCirculoDosDecimales}cm`)



console.groupEnd()