let boxG = document.querySelector(".gauche");
let boxD = document.querySelector(".droite");
let btn = document.querySelector(".changebtn");
let btn2 =  document.querySelector(".btn2");
let carre = document.querySelector(".carre");
let compteur = btn2.querySelector("span");
let cpt = 0;


function move () {
    cpt ++;
    compteur.innerText = cpt ;
    if (carre.parentElement === boxG) {
        boxG.removeChild(carre);
        boxD.appendChild(carre);
    }
    else {
        boxD.removeChild(carre);
        boxG.appendChild(carre);
    }
}

// parentElement
// removeChild
// appendChild


btn.addEventListener("click",move)
