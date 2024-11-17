//fonction permettant de récupérer la lettre saisi par le joueur
function récupérationLettre() {
    let lettre = document.getElementById("input").value;
    alert(lettre);
    return lettre;
}

let alphabet="abcdefghijklmnopqrstuvwxyz";

//liste de mots parmis laquelle l'ordinateur choisira le mot à trouver
const listeMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin', 'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];

//fonction permettant de choisir le mot à deviner parmis l'array listMots
function choixMotADeviner() {
    let nbHasard = Math.random()*alphabet.length;
    let nbArrondi = Math.floor(nbHasard);
    let motADeviner = listeMots[nbArrondi];
    return motADeviner;
}

function créationMotTiret(motADeviner) {
    let longueurMot=motADeviner.length;
    let motTiret="";
    for (let i = 0; i < motADeviner.length; i++) {
        motTiret+="_ " +
            ""
    }
    return motTiret;
}
// test fonction cr&tionMotTiret alert(créationMotTiret(choixMotADeviner()));



