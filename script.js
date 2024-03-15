// Función para generar un color hexadecimal aleatorio
function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Función para cambiar el color de fondo y actualizar el texto del contenedor
function changeBackgroundColor() {
    // Generar un nuevo color
    const newColor = generateRandomColor();
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = newColor;
    // Actualizar el texto del contenedor con el nuevo color
    document.getElementById('currentColor').textContent = `Color Actual: ${newColor}`;
}

// Asignar el evento click al botón para cambiar el fondo
document.getElementById('changeBackgroundBtn').addEventListener('click', changeBackgroundColor);
