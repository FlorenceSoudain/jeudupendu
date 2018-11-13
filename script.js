//tableau avec les mots à trouver
var mots = ["voyage", "japon", "chat", "animaux", "portable", "ordinateur", "vietnam", "indien", "horoscope", "couleur"];

//choix d'un mot aléatoirement
var choixOrdi = mots[Math.floor(mots.length * Math.random())];

//Ligne de tiret équivalent au nombre de lettre à trouver
for (var i = 0; i < choixOrdi.length; i++) {
    var tirets = document.createElement('span');
    document.getElementById('rempli').appendChild(tirets);
    tirets.id = i;
    tirets.innerHTML = "_ ";
}

//fonction pour afficher la lettre
function afficherLettre (recupLettre, index) {
    var recupSpan = document.getElementsByTagName('span');

    for (var j = 0; j < recupSpan.length; j++) {
        if (j == index) {
            recupSpan[j].innerHTML = recupLettre;
        }
    }
}

function verif() {

    var recupLettre = document.getElementById('lettre').value;

    for (var i = 0; i < choixOrdi.length; i++)
    {
        if (choixOrdi[i] == recupLettre)
        {
            afficherLettre(recupLettre, i);
        }
    }
}

document.getElementById('envoyer').addEventListener('click', function () {
    verif();
    afficherLettre();
});


//divers console.log
console.log(choixOrdi);
console.log(choixOrdi.length);
