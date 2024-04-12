// Cuando se hace clic en el botón "Generar Tabla"...
document.getElementById('generateBtn').addEventListener('click', function() {
    // Se solicita al usuario un número mediante un cuadro de diálogo
    var number = prompt('Escribe el númrto de que quieras hacer su tabl de multiplicar:');
    // Si el usuario no cancela la solicitud...
    if (number !== null) {
      // Se convierte el número ingresado a un valor entero
      number = parseInt(number);
      // Se inicializa una variable para almacenar el HTML de la tabla
      var tableHTML = '<table><thead><tr><th>Multiplicaión</th><th>Resultado</th></tr></thead><tbody>';
      // Se genera cada fila de la tabla de multiplicar y se concatena al HTML de la tabla
      for (var i = 1; i <= 10; i++) {
        var result = number * i; // Se calcula el resultado de la multiplicación
        tableHTML += '<tr><td>' + number + ' x ' + i + '</td><td>' + result + '</td></tr>'; // Se concatena la fila al HTML de la tabla
      }
      tableHTML += '</tbody></table>'; // Se cierra el elemento <tbody> y </table> del HTML de la tabla
      // Se coloca el HTML de la tabla en el contenedor correspondiente en la página
      document.getElementById('tableContainer').innerHTML = tableHTML;
    }
  });
  