// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function contar() {
//     const texto = prompt("ingrese el texto");
//     console.log(texto.length)
// }

// contar();
// let texto = prompt("ingrese texto")

// const contar = () => {
//     console.log(texto.length)
// }
// contar();

// // ejercicio 1
// const contar = (texto) => {
//     console.log(texto.length);
// };

// contar(prompt("ingrese cadena de texto para contar los caracteres"));

// // ejercicio 2

// const cortar = (string, caracteres) => {
//     console.log(string.substring(0, caracteres));
// }

// cortar(prompt("ingrese la cadena de texto"), prompt("cortar a cuantos caracteres"));


// ejercicio 3

const separar = (string, separador) => {
    var result = string.split(separador);

    console.log(result);

}

separar(prompt("ingrese la cadena texto", ), " ");

// ejercicio 4

// const repetir = (string, veces) => {
//     console.log(string.repeat(veces));
// }

// repetir(prompt("ingrese la cadena texto") + " ", prompt("ingrese el numero de repeticiones"));