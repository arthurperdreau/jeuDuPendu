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
    let motTiret= motADeviner.split('');
    for (let i = 0; i < motTiret.length; i ++) {
        motTiret[i] = "_";
    }
    return motTiret;
}
function motTrouve(motEncours){
    for (let i = 0; i < motEncours.length; i++) {
        if (motEncours[i]==="_"){
            return true;
        }
    }

}
function lancerPartie(){
    let motFinalADeviner=choixMotADeviner(); // --> ex: bateau
    let vieDuJoueur=5; //--> initialisation du nombre de vie
    let lettreSaisieParJoueur; //--> initialisation de la variable lettreSaisieParJoueur à none
    let motTiret=creationMotTiret(motFinalADeviner); // --> ["_","_","_"]
    let nbLettreTrouve=0;
    while (vieDuJoueur > 0 && motTrouve){ //--> tant que le joueur a encore des vies et qu'il n'a pas trouvé le mot
        lettreSaisieParJoueur=recuperationLettre();//--> actualisation de la variable lettreSaisieParJoueur avec une lettre
        for (let i = 0; i < motFinalADeviner.length; i ++) {
            if (lettreSaisieParJoueur.toLowerCase() === motFinalADeviner[i]) {
                motTiret[i] = lettreSaisieParJoueur.toLowerCase();
                nbLettreTrouve++;
            }
        }
        if(nbLettreTrouve ===0) {
            vieDuJoueur --; //--> décrémenter les vies si pas de lettre trouvée
            console.log(vieDuJoueur);
        }
        else {
            nbLettreTrouve = 0; //--> reset du nombre de lettre trouvée pour le prochain tour
            console.log(nbLettreTrouve);
        }
        console.log(motTiret);
    }
    if (vieDuJoueur === 0) {
        alert("Vous avez perdu !")
            }else{
        alert("Bravo tu a trouvé le mot")
    }
}
lancerPartie();


//const valider = document.querySelector('.buttonValider');
//let mot=choixMotADeviner();
//let motTiret= creationMotTiret(mot);
//let motAtrouver=motTiret;
//let lettreSaisie=recuperationLettre();


//valider.addEventListener("click", remplacementTiret);
//console.log(mot);
//console.log(motAtrouver);

