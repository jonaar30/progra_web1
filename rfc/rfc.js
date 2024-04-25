const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const rfcInput = document.getElementById('rfc');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidoPaterno = document.getElementById('apellido-paterno').value.toUpperCase();
    const apellidoMaterno = document.getElementById('apellido-materno').value.toUpperCase();
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio);
    rfcInput.value = rfc;
    resultado.style.display = 'block';
});

function generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio) {
    const apellidoPaternoInicial = apellidoPaterno.substring(0, 1);
    const apellidoMaternoInicial = apellidoMaterno.substring(0, 1);
    const nombreInicial = nombre.substring(0, 1);

    const fecha = `${anio}${mes.toString().padStart(2, '0')}${dia.toString().padStart(2, '0')}`;

    return `${apellidoPaternoInicial}${apellidoMaternoInicial}${nombreInicial}${fecha}`;
}