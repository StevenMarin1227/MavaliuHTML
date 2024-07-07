<script>
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");
        const nameInput = document.getElementById("nombre");
        const emailInput = document.getElementById("email");
		const phoneInput = document.getElementById("Telefono");
        const messageInput = document.getElementById("message");
        const submitButton = document.getElementById("submit");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            //validación aquí y mostrar mensajes de error si es necesario

            // Simplemente muestra un mensaje de éxito por ahora
            alert("Mensaje enviado con éxito");
        });
    });
</script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");
        // Resto de tu código JavaScript

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            // Resto de tu código de manejo de formulario

            // Envío de los datos al servidor PHP
            fetch("send_email.php", {
                method: "POST",
                body: new FormData(form)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Mensaje enviado con éxito");
                } else {
                    alert("Error al enviar el mensaje");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    });
</script>

