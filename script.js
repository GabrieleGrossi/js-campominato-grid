function cellaCliccata(numero) {
    const cella = document.getElementById('cella-' + numero);
    cella.addEventListener('click', function(){
        cella.classList.toggle('cliccata');
        console.log('Hai cliccato sulla cella numero ' + numero);
    });
    
}

// Genera la griglia di gioco
const griglia = document.getElementById('griglia');
for (let i = 1; i <= 100; i++) {
    const cella = document.createElement('div');
    cella.id = 'cella-' + i;
    cella.className = 'cella';
    cella.textContent = i;
    cella.addEventListener('click', cellaCliccata.bind(null, i));
    griglia.appendChild(cella);
}

function refresh(){
    location.reload();
}