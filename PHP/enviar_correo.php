<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "gerenciao@mavaliu.com"; // Coloca aquí el correo electrónico destino
    $subject = "Nuevo mensaje desde el formulario de contacto";
    $message = "Nombre: " . $_POST["name"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Mensaje: " . $_POST["message"];

    $headers = "From: webmaster@example.com"; // Cambia esto a la dirección de tu sitio web

    $success = mail($to, $subject, $message, $headers);

    echo json_encode(["success" => $success]);
}
?>