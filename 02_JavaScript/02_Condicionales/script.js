console.log('Hola desde script.js! 👋');

// ESTRUCTURA BÁSICA IF-ELSE
// if ( condicion ) {
//   paso 1, lo que procede si la condición SÍ se cumple, o si arroja un true
// } else {
//   paso 2, lo que procede si la condición NO se cumple, o si arroja un false
// }

// OPERADORES RELACIONALES
// Son los símbolos que nos permiten realizar comparaciones
// menor que: <
// mayor que: >
// menor igual que: <=
// mayor igual que: >=
// comparar igualdad: ==
// comparar igualdad y tipo de dato: ===
// diferente de: !==

// Ejemplo:
let edad = 18;

if (edad >= 18) {
  console.log('Es MAYOR de edad 👴🏻');
} else {
  console.log('Es MENOR de edad 👼🏻');
}

// ESTRUCTURA DE IF ANIDADOS
// if ( condicion1 ) {
//   paso si la condicion1 es true
// } else if ( condicion2 ) {
//   paso si la condicion1 es false
//   paso si la condicion2 es true
// } else {
//   paso si la condicion1 es false
//   paso si la condicion2 es false
// }

let dia = 'nublado';
let hora = '5:00';

if (dia == 'nublado') {
  console.log('No salgas, el día está nublado 🌥');
} else if (hora == '5:00') {
  console.log('Estás a tiempo de salir a correr 🏃‍♂️');
} else {
  console.log('Vas tarde a correr ⏰');
}

// OPERADORES LÓGICOS
// Son los símbolos que nos permiten agregar lógica a nuestras condicionales
// AND: &&
// OR: ||
// NOT: !

// EJEMPLO CON AND (&&)
// Sirve para que se cumplan SÍ o SÍ dos o más condiciones
let precio = 350;

if (precio < 100) {
  console.log('Tu entrada es REGULAR 🎥');
} else if (precio >= 100 && precio <= 200) {
  console.log('Tu entrada es VIP ⭐️');
} else if (precio >= 200 && precio <= 300) {
  console.log('Tu entrada es PLATINO 👑');
} else {
  console.log('Te vieron la cara amigo 😭');
}

// EJEMPLO CON OR (||)
// Sirve para verificar que se cumpla CUALQUIERA de las condiciones
let comida = 'espaguetti';

if (comida == 'manzana' || comida == 'pera' || comida == 'naranja' || comida == 'banana') {
  console.log('Tu comida es una FRUTA 🍎');
} else if (comida == 'sirloin' || comida == 'arrachera' || comida == 'atún'){
  console.log('Tu comida es PROTEÍNA 🥩');
} else {
  console.log('Ni idea de qué sea tu comida amigo 🤷🏻‍♂️');
}

// EJEMPLO CON NOT (!)
let estaVivo = false;

if (!estaVivo) {
  console.log('Está MUERTO 💀');
} else {
  console.log('Está VIVO 🥳');
}

// DIFERENCIAS ENTRE OPERADORES RELACIONES
console.log(5 > 10); // false
console.log('hola' == 'hola'); // true
console.log(5 != 10); // true
console.log(10 != 10); // false

// Comparación básica de valor con ==
console.log(100 == '100'); // true

// Comparación estricta de valor y tipo de dato con ===
console.log(100 === '100'); // false
console.log(100 === 100); // true


// OPERADORES TERNARIOS
// Es otra sintáxis para declarar condicionales
// condicion ? lo que pasa si la condición es true : lo que pasa si la condición es false

// Ejemplo forma básica if-else
let edadIFELSE = 27;

if (edadIFELSE >= 18) {
  console.log('Es MAYOR de edad 👴🏻');
} else {
  console.log('Es MENOR de edad 👼🏻');
}

// Ejemplo forma operador ternario
let edadTernario = 12;

edadTernario >= 18
? console.log('Es MAYOR de edad 👴🏻')
: console.log('Es MENOR de edad 👼🏻');
