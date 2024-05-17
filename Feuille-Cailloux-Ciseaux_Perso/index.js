const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur;
let resultat;
let choixOrdinateur;

//Evenement 'click sur les boutons
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click',(e) =>{
    //recupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id ;
    // on ajoute l'image qui correspond au choix.  
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png" alt="${choixUtilisateur}">`
    generer_choix_ordinateur();
    verification();
}))

//fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() *3) +1 // générer des nombres compris entre 1 et 3
    if(random === 1){// si random = à 1
        choixOrdinateur = "pierre";
    }
    else if(random === 1){// si random = à
        choixOrdinateur = "papier";
    }
    else if(random === 1){// si random = à
        choixOrdinateur = "ciseaux";
    }
    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML =`<img src="${choixOrdinateur}.png" alt="${choixOrdinateur}">`
}

//fonction pour vérifier si le joueur a gagné ou non. 

function verification(){
    if(choixUtilisateur == choixOrdinateur){
            resultat = "Egalité poto!";
    }
    // les cas ou l'utilisateur a perdu
    else if(choixUtilisateur =="pierre" && choixOrdinateur =="papier"){
            resultat = "Perdu poto!";
    }
   else  if(choixUtilisateur =="papier" && choixOrdinateur == "ciseaux"){
            resultat = "perdu poto!";
    }
    else if(choixUtilisateur =="ciseaux" && choixOrdinateur == "pierre"){
            resultat = "perdu poto!";
    }
//les cas ou le joueur gagne

   else  if(choixUtilisateur =="pierre" && choixOrdinateur =="ciseaux"){
        resultat = "Gagné poto!";
}
else if(choixUtilisateur =="papier" && choixOrdinateur == "pierre"){
        resultat = "Gagné poto!";
}
else if(choixUtilisateur =="ciseaux" && choixOrdinateur == "papier"){
        resultat = "Gagné poto!";
}
contenantResultat.innerHTML = resultat;
}