function evalua() {
    var cadena = document.getElementById('cadena').value;
    var parrafo = document.getElementById('parrafo');
    var mensaje = "";
  
    if (/[A-Z]/.test(cadena) && /[a-z]/.test(cadena)) {
      mensaje = 'La cadena "' + cadena + '" contiene mayúsculas y minúsculas.';
    } else if (/[A-Z]/.test(cadena)) {
      mensaje = 'La cadena "' + cadena + '" contiene solo mayúsculas.';
    } else if (/[a-z]/.test(cadena)) {
      mensaje = 'La cadena "' + cadena + '" contiene solo minúsculas.';
    } else {
      mensaje = 'La cadena "' + cadena + '" no contiene letras.';
    }
  
    parrafo.textContent = mensaje;
  }
  