
let valeurCompteur = 0;

const spanCompteur = document.getElementById('compteur');
const btnMoins = document.getElementById('btn-moins');
const btnPlus = document.getElementById('btn-plus');
const btnReset = document.getElementById('btn-reset');


btnPlus.addEventListener('click', function() {
    valeurCompteur++;
    spanCompteur.textContent = valeurCompteur;
});


btnMoins.addEventListener('click', function() {
    valeurCompteur--;
    spanCompteur.textContent = valeurCompteur;
});


btnReset.addEventListener('click', function() {
    valeurCompteur = 0;
    spanCompteur.textContent = valeurCompteur;
});



const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', function() {
   
    document.body.classList.toggle('dark-mode');
    
   
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = ' Mode Clair';
    } else {
        btnTheme.textContent = ' Mode Sombre';
    }
});