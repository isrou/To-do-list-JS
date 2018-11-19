//Exercice 2//

let liens = document.querySelectorAll("a");
liens[1].addEventListener("click", apparait)

function apparait() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "block"
    document.querySelector(".div4").style.display = "none"
    document.querySelector(".div5").style.display = "none"
    document.querySelector(".div6").style.display = "none"
    document.querySelector(".div7").style.display = "none"
    document.querySelector(".div8").style.display = "none"
}

//Exercice 3//

//let liens = document.querySelectorAll("a");
liens[2].addEventListener("click", apparait2)

function apparait2() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "none"
    document.querySelector(".div4").style.display = "block"
    document.querySelector(".div5").style.display = "none"
    document.querySelector(".div6").style.display = "none"
    document.querySelector(".div7").style.display = "none"
    document.querySelector(".div8").style.display = "none"
}

//Exercice 4//

//let liens = document.querySelectorAll("a");
liens[3].addEventListener("click", apparait3)


function apparait3() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "none"
    document.querySelector(".div4").style.display = "none"
    document.querySelector(".div5").style.display = "block"
    document.querySelector(".div6").style.display = "none"
    document.querySelector(".div7").style.display = "none"
    document.querySelector(".div8").style.display = "none"
}

//Exercice 5//

//let liens = document.querySelectorAll("a");
liens[4].addEventListener("click", apparait4)


function apparait4() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "none"
    document.querySelector(".div4").style.display = "none"
    document.querySelector(".div5").style.display = "none"
    document.querySelector(".div6").style.display = "block"
    document.querySelector(".div7").style.display = "none"
    document.querySelector(".div8").style.display = "none"
}

//Exercice 6//

//let liens = document.querySelectorAll("a");
liens[5].addEventListener("click", apparait5)

function apparait5() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "none"
    document.querySelector(".div4").style.display = "none"
    document.querySelector(".div5").style.display = "none"
    document.querySelector(".div6").style.display = "none"
    document.querySelector(".div7").style.display = "block"
    document.querySelector(".div8").style.display = "none"
}

//Exercice 7//

liens[6].addEventListener("click", apparait6)

function apparait6() {
    event.preventDefault();
    document.querySelector(".div2").style.display = "none"
    document.querySelector(".div3").style.display = "none"
    document.querySelector(".div4").style.display = "none"
    document.querySelector(".div5").style.display = "none"
    document.querySelector(".div6").style.display = "none"
    document.querySelector(".div7").style.display = "none"
    document.querySelector(".div8").style.display = "block"
}
