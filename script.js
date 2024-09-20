function toggleText() {
    const textElement = document.getElementById('revealText');
    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'block';
    } else {
        textElement.style.display = 'none';
    }
}

function toggleExtraText(index) {
    const textElement = document.getElementById(`extraText${index}`);
    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'block';
        textElement.style.maxHeight = textElement.scrollHeight + 'px'; // Expand to full height
        textElement.style.padding = '20px'; // Ensure padding is visible
    } else {
        textElement.style.maxHeight = '0px'; // Collapse
        textElement.style.padding = '0px'; // Hide padding
        setTimeout(() => {
            textElement.style.display = 'none';
        }, 300); // Match the transition duration
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Alternativa si el desplazamiento suave no funciona completamente
    // Se asegura de que el scroll llegue al top usando setTimeout
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 500); // Asegúrate de que el tiempo sea suficiente para el scroll suave
}
