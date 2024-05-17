// Función que verifica si una frase es un palíndromo
function palindromo(cadena) {
    // Convertimos la cadena a minúsculas para evitar problemas con mayúsculas/minúsculas y la separamos en un array de caracteres
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";

    // Quitamos los espacios en blanco de la cadena
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] !== " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    // Separamos la cadena sin espacios en un array de letras
    var letras = cadenaSinEspacios.split("");
    // Creamos una copia de la cadena pero al revés
    var letrasReves = cadenaSinEspacios.split("").reverse();

    // Suponemos que las letras son iguales
    var iguales = true;
    // Comparamos las letras de la cadena original y la cadena invertida
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break; // Si encontramos una diferencia, dejamos de comparar
        }
    }

    // Construimos el resultado para mostrar al usuario
    var resultado = "La frase \"" + cadena + "\" ";
    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    return resultado;
}

// Función que se ejecuta al pulsar el botón para verificar el palíndromo
function verificarPalindromo() {
    // Obtenemos el valor del input con id "frase"
    var frase = document.getElementById("frase").value;
    // Llamamos a la función palindromo y guardamos el resultado
    var resultado = palindromo(frase);
    // Mostramos el resultado en el párrafo con id "resultado"
    document.getElementById("resultado").innerText = resultado;
}