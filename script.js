
let nombre = document.getElementById("name");
let apellido = document.getElementById("rename");
let fecha = document.getElementById("fecha");
let btn = document.getElementById("envio");
const url = 'https://jsonplaceholder.typicode.com/users';

// Agrega un evento
btn.addEventListener("click", function (event) {
     // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Crea un objeto con los datos del formulario
    const formData = {
        "name": nombre.value,
        "username": apellido.value,
        "date": fecha.value,
    };

    // Configura las opciones de la solicitud POST
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    };

    // Realiza la solicitud POST al servidor
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


