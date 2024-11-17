//fonction permettant de récupérer la lettre saisi par le joueur
function recuperationLettre() {
    let lettre = document.getElementById("input").value;
    //alert(lettre);
    return lettre;
}

let alphabet="abcdefghijklmnopqrstuvwxyz";

//liste de mots parmis laquelle l'ordinateur choisira le mot à trouver
const listeMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin', 'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];

//fonction permettant de choisir le mot à deviner parmis l'array listMots
function choixMotADeviner() {
    let nbHasard = Math.random()*listeMots.length;
    let nbArrondi = Math.floor(nbHasard);
    let motADeviner = listeMots[nbArrondi];
    return motADeviner;
}

//fonction permettant d'afficher le mot sous forme de tirets
function creationMotTiret(motADeviner) {
    let longueurMot=motADeviner.length;
    let motTiret="";
    for (let i = 0; i < motADeviner.length; i++) {
        motTiret+="_ " +""
    }
    return motTiret;
}
// test fonction créationMotTiret alert(créationMotTiret(choixMotADeviner()));

const valider = document.querySelector('.buttonValider');
let mot=choixMotADeviner();
let motTiret= creationMotTiret(mot)

//fonction permettant le remplacement des lettres dans le mot composé de tiret
function remplacementTiret(motEnCours,lettreSaisie,motFinalADeviner) {
    for (let i=0; i<motEnCours.length; i++) {
        if (lettreSaisie == motFinalADeviner[i] ) {
            motEnCours.replace(motEnCours[i], lettreSaisie);
        }
    }
    console.log(motEnCours);
    return motEnCours;
}

valider.addEventListener("click", remplacementTiret(motTiret,recuperationLettre(),mot));






