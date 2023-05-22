//Obtenemos el elemento donde se mostrará el contador de visitas
var contadorElemento = document.getElementById('contador');

//Realizamos una petición HTTP para leer el archivo "visitas.txt"
fetch('visitas.txt')
    .then(response => response.text())
    .then(texto => {
        //Obtenemos el valor actual del contador de visitas
        var visitas = parseInt(texto.split('=')[1].trim())

        //Incrementar el contador en 1
        visitas++;

        //Actualizar el contador en la pagina web
        contadorElemento.textContent = visitas;

        //Guardamos el nuevo valor del contador en el archivo "visitas.txt"
        fetch('visitas.txt', {
            method: 'PUT',
            body: 'visita = ' + visitas
        });
    })
    .catch(error => {
        console.error('Error al leer el archivo de visitas', error);
    });