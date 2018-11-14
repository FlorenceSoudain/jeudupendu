//tableau avec les mots à trouver
var mots = ["voyage", "japon", "chat", "animaux", "portable", "ordinateur", "vietnam", "indien", "horoscope", "couleur"];

//choix d'un mot aléatoirement
var choixOrdi = mots[Math.floor(mots.length * Math.random())];

var vie = 10;
var nbrLettre = 0;

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

//fonction qui vérifie si la lettre donné est dans le mot random
function verif() {

    var recupLettre = document.getElementById('lettre').value;
    var recupSpan = document.getElementsByTagName('span');

    for (var i = 0; i < choixOrdi.length; i++)
    {
        if (choixOrdi[i] == recupLettre)
        {
            afficherLettre(recupLettre, i);
            document.getElementById('rep').innerHTML = '';
            nbrLettre++;
        }
        if (choixOrdi.indexOf(recupLettre) == -1)
        {
            document.getElementById('rep').innerHTML = "Cette lettre ne correspond pas";


        }
    }
    if (choixOrdi.indexOf(recupLettre) == -1){
        vie = vie-1;
        document.getElementById('nbrVie').innerHTML = "Il vous reste "+ vie + " possibilités.";
    }
    if(vie == 0){
        alert("Vous avez perdu. Le mot était " + choixOrdi + ".");
        window.location.reload();
    }
}

function victoire(){

    if(nbrLettre == choixOrdi.length)
    {
        alert("Félicitation ! Vous avez gagné.");
        window.location.reload();
    }
}

//boutton click
document.getElementById('envoyer').addEventListener('click', function () {
    verif();
    afficherLettre();
    victoire();
});


//divers console.log
console.log(choixOrdi);
