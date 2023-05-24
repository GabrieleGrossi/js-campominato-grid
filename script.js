/*

function cellaCliccata(numero) {
    const cella = document.getElementById('cella-' + numero);
        cella.classList.toggle('cliccata');
        console.log('Hai cliccato sulla cella numero ' + numero);   
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
*/


const playButton = document.querySelector('button');

const gridElement = document.querySelector('div.griglia');

playButton.addEventListener(('click'), function(){
    gridElement.innerHTML = "";

    for (let index = 0; index < 100; index++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cella');
        newCell.innerHTML = `
            <p>
                ${index + 1}
            </p>`;

        newCell.addEventListener('click', function(){
            console.log(index + 1);
            newCell.classList.toggle('cliccata');
        });

        gridElement.appendChild(newCell);
    }
});
