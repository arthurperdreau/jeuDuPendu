
const valider = document.querySelector('.buttonValider');//-->récupération du bouton valider pour pouvoir récupérer le contenu du input
const input = document.querySelector('.saisiLettre');//-->récupération du imput pour pouvoir récupérer sa valeur
const motEnProgression = document.querySelector('.motEnCours');//-->récupération du paragraphe motEnCours pour le remplacer par des tirets
const message=document.querySelector('.messageJeu');//-->récupération du paragraphe message ou s'affichera si le joueur s'est trompé
const nbVies=document.getElementById('nombreVie');//-->récupération du paragraphe nombre de vie
const lettresDejaUtilisees= document.querySelector('.lettresDejaUtilises');//-->récupération du paragraphe ou s'affichera les lettres utilisées
const nouveauMot=document.querySelector('.boutonRejouer');//-->récupération du bouton Nouveau mot
//-->liste de mots parmis laquelle l'ordinateur choisira le mot à trouver
const listeMots = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin', 'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];
let vies=7;//-->initialisation du nombre de vie
let motAtrouver= choixMotADeviner()
let motTirets=creationMotTiret(motAtrouver)
let lettresUtilisees=[];
revelationPremiereEtDerniereLettre()
valider.addEventListener("click",lancementJeu);
nouveauMot.addEventListener('click',refreashPage)


//-->fonction permettant de d'avoir un nouveau mot à deviner
function refreashPage() {
    window.location.reload();
    }
//-->fonction permettant de récupérer la lettre saisi par le joueur
function recuperationLettre() {
    let lettre = document.querySelector(".saisiLettre").value;
    //alert(lettre);
    return lettre.toLowerCase();
}
//-->fonction permettant de choisir le mot à deviner parmis l'array listMots
function choixMotADeviner() {
    let nbHasard = Math.random()*listeMots.length;
    let nbArrondi = Math.floor(nbHasard);
    let motADeviner = listeMots[nbArrondi];
    return motADeviner;
}
//-->fonction permettant d'afficher le mot sous forme de tirets
function creationMotTiret(motADeviner) {
    let motTiret= motADeviner.split('');
    for (let i = 0; i < motTiret.length; i ++) {
        motTiret[i] = "_";
    }
    return motTiret;
}
//-->fonction permettant d'afficher dans le mot avec sa première et dernière lettre. Si la première ou/et la dernière lettre ont d'autres occurences dans le mot, les autres occurences s'affiche également.
function revelationPremiereEtDerniereLettre() {
    let premiereEtDeuxiemeLettre=[motAtrouver[0],motAtrouver[motAtrouver.length-1]];//récupération de la première et dernière lettre de mon mot à trouver
    for (let i = 0; i < 2; i ++) {//-->premier tour i=0 donc premiereEtDeuxiemeLettre correspond à la première lettre du mot à trouver
        for (let j = 0; j < motAtrouver.length; j ++) {
            if (premiereEtDeuxiemeLettre[i] ===motAtrouver[j]) {
                motTirets[j]=premiereEtDeuxiemeLettre[i]
            }
        }
    }
}

lettresDejaUtilisees.innerHTML=`<p>Lettres utilisées : ${lettresUtilisees}</p>`;//-->affichage de la liste des lettres utilisées.
motEnProgression.innerHTML=motTirets;//-->affichage du mot sous forme de tiret avec la première et dernière lettre

//-->fonction permettant de jouer
function lancementJeu(){
    const lettreDonnee=recuperationLettre();
    input.value="";//-->permet de reset le contenu du input pour pouvoir remettre une lettre. Sinon problème car plusieurs lettres et oblige l'utilisateur à supprimer
    if (lettresUtilisees.includes(lettreDonnee)){//--> in ne fonctionne pas
        message.innerHTML = `<p>Lettre déjà utilisée !</p>`;//-->affichage de l'erreur du joueur sur l'interface utilisateur
    }else{
        lettresUtilisees.push(lettreDonnee)//-->ajoute à l'array lettresUtilisees  la lettre saisie si elle n'y est pas deja
        lettresDejaUtilisees.innerHTML=`<p>Lettres utilisées : ${lettresUtilisees}</p>`;
    }

    if (motAtrouver.includes(lettreDonnee )) {//-->test si la lettre saisie est dans le mot à trouver
        for (let k = 0; k < motAtrouver.length; k++) {
            if (lettreDonnee === motAtrouver[k]) {//-->recherche de l'index de la lettre
                motTirets[k] = motAtrouver[k];//-->remplacement par la lettre à l'index k de l'array motTirets
            }
        }
        motEnProgression.innerHTML=motTirets;
    }else {
            vies-=1;//-->décrémentation du nombre de vie
            nbVies.innerHTML=`Nombre de vie : ${vies}`//-->actualisation du nombre de vie sur l'interface utilisateur
            message.innerHTML = `<p>Lettre pas comprise dans le mot !</p>`;}//-->affichage de l'erreur du joueur sur l'interface utilisateur


    if(motTirets.includes("_" )) {
    }else{
        alert(`Vous avez gagné. Le mot était ${motAtrouver}.`)
    }

    if(vies===0){
        alert(`Vous avez perdu. Le mot à trouver était ${motAtrouver}.`)
    }
}

