
//liste de mots parmis laquelle l'ordinateur choisira le mot à trouver
const valider = document.querySelector('.buttonValider');
const input = document.querySelector('.saisiLettre');
const motEnProgression = document.querySelector('.motEnCours');
const message=document.querySelector('.messageJeu');
const nbVies=document.getElementById('nombreVie');
const lettresDejaUtilisees= document.querySelector('.lettresDejaUtilises');
const listeMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin', 'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];
let vies=7;
let motAtrouver= choixMotADeviner()
let motTirets=creationMotTiret(motAtrouver)
let lettresUtilisees=[];
revelationPremiereEtDeuxiemeLettre()
valider.addEventListener("click",lancementJeu)






//fonction permettant de récupérer la lettre saisi par le joueur
function recuperationLettre() {
    let lettre = document.querySelector(".saisiLettre").value;
    //alert(lettre);
    return lettre.toLowerCase();
}


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
function revelationPremiereEtDeuxiemeLettre() {
    let premiereEtDeuxiemeLettre=[motAtrouver[0],motAtrouver[motAtrouver.length-1]];
    for (let i = 0; i < 2; i ++) {
        for (let j = 0; j < motAtrouver.length; j ++) {
            if (premiereEtDeuxiemeLettre[i] ===motAtrouver[j]) {
                motTirets[j]=premiereEtDeuxiemeLettre[i]
            }
        }
    }
}
lettresDejaUtilisees.innerHTML=`<p>Lettres utilisées : ${lettresUtilisees}</p>`;
motEnProgression.innerHTML=motTirets;
function lancementJeu(){
    const lettreDonnee=recuperationLettre();
    input.value="";
    if (lettresUtilisees.includes(lettreDonnee)){// in ne fonctionne pas
        message.innerHTML = `<p>Lettre déjà utilisée !</p>`;
    }else{
        lettresUtilisees.push(lettreDonnee)
        lettresDejaUtilisees.innerHTML=`<p>Lettres utilisées : ${lettresUtilisees}</p>`;
    }

    if (motAtrouver.includes(lettreDonnee )) {
        for (let k = 0; k < motAtrouver.length; k++) {
            if (lettreDonnee === motAtrouver[k]) {
                motTirets[k] = motAtrouver[k];
            }
        }
        motEnProgression.innerHTML=motTirets;
    }else {
            vies-=1;
            nbVies.innerHTML=`Nombre de vie : ${vies}`
            message.innerHTML = `<p>Lettre pas comprise dans le mot !</p>`;}


    if(motTirets.includes("_" )) {
    }else{
        alert(`Vous avez gagné. Le mot était ${motAtrouver}.`)
    }

    if(vies===0){
        alert(`Vous avez perdu. Le mot à trouver était ${motAtrouver}.`)
    }
}



