let bouton = document.querySelector(".btn")

function change() {
    //console.log("sakut");
    let text = document.querySelector("input").value;
    //console.log(text)

    let h2 = document.querySelector(".name")
    .innerText = text;
}

bouton.addEventListener("click", change);

