// Selecciona el elemento de la pantalla de la calculadora
const pantalla = document.querySelector(".pantalla");

// Selecciona todos los botones de la calculadora
const botones = document.querySelectorAll(".botones");

// Añade un evento de clic a cada botón
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        // Si se presiona el botón "limpiar", borra la pantalla
        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        // Si se presiona el botón "eliminar", borra el último carácter de la pantalla
        if (boton.id === "eliminar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Si se presiona el botón "resultado", evalúa la expresión en la pantalla
        if (boton.id === "resultado") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Si la pantalla está vacía o muestra un error, reemplaza el contenido de la pantalla con el botón presionado
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            // Si no, añade el botón presionado al final de la pantalla
            pantalla.textContent += botonApretado;
        }
    })
})
