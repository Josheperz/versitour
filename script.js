document.addEventListener('DOMContentLoaded', () => {
    fetch('frases.json')
        .then(response => response.json())
        .then(data => {
            const frases = data;
            const fraseContainer = document.getElementById('frase');
            let index = Math.floor(Math.random() * frases.length);
            fraseContainer.textContent = frases[index].frase;
            frases.splice(index, 1);
            localStorage.setItem('frases', JSON.stringify(frases));
        })
        .catch(error => console.error('Error al cargar las frases:', error));
});

/* document.addEventListener('DOMContentLoaded', () => {
    let frases = JSON.parse(localStorage.getItem('frases')) || [];
    if (frases.length === 0) {
        fetch('frases.json')
            .then(response => response.json())
            .then(data => {
                frases = data;
                mostrarFrase(frases);
            })
            .catch(error => console.error('Error al cargar las frases:', error));
    } else {
        mostrarFrase(frases);
    }
}); */

/* function mostrarFrase(frases) {
    const fraseContainer = document.getElementById('frase');
    let index = Math.floor(Math.random() * frases.length);
    fraseContainer.textContent = frases[index].frase;
    frases.splice(index, 1);
    localStorage.setItem('frases', JSON.stringify(frases));
} */
