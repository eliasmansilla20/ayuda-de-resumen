document.getElementById('generate-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.trim();
    if (inputText.length > 0) {
        // Simulando un resumen
        let summary = inputText.split(" ").slice(0, 30).join(" ") + '...';

        // Mostrar el resumen
        document.getElementById('summary-output').innerText = summary;
        document.getElementById('result').style.display = 'block';

        // Contadores de palabras
        document.getElementById('original-count').innerText = inputText.split(" ").length;
        document.getElementById('summary-count').innerText = summary.split(" ").length;
    }
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let summaryText = document.getElementById('summary-output').innerText;
    navigator.clipboard.writeText(summaryText)
        .then(() => alert('Resumen copiado al portapapeles!'))
        .catch(err => alert('Error al copiar: ' + err));
});

// Modo oscuro
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});