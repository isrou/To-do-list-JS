let btn = document.querySelector(".more");

function addImg() {
     let img = document.createElement("img");
     img.setAttribute("src","./public/img/branche-de-coton-6-boules.jpg") //je prends le bon lien grace à la balise du html, puis je supprime la balise img du html ainsi l'img n'est ajouté

     document.querySelector(".creabtn").appendChild(img); //qui va contenir toutes mes images par la suite
}

btn.addEventListener("click", addImg);
