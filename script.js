var mots = ["voyage", "japon", "chat", "animaux", "portable", "ordinateur", "vietnam", "indien", "horoscope", "couleur"];

var choixOrdi = mots[Math.floor(mots.length * Math.random())];

document.getElementById('envoyer').addEventListener("click", function () {
    var valeur = document.getElementById('lettre').value;

    for (var i = 0; i < choixOrdi.length; i++)
    {
        if (choixOrdi[i] == valeur)
        {
            var lettrecree = document.createElement('span');
            lettrecree.classList.add('lettre');
            lettrecree.innerHTML = valeur;
            document.body.appendChild(lettrecree);
        }
    }

});
console.log(choixOrdi);
console.log(choixOrdi.length);

