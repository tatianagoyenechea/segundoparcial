document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeError.textContent = "Por favor, complete todos los campos.";
        return;
    }

    if (!emailRegex.test(email)) {
        mensajeError.textContent = "Por favor, ingrese un email válido.";
        return;
    }

    // Si todo está bien, mostrar mensaje de agradecimiento
    mensajeError.textContent = "";
    alert(`Gracias por su contacto, ${nombre}. En breve le estaré respondiendo.`);
    
    // Opcional: limpiar el formulario
    document.getElementById("contactoForm").reset();
});
