//niv 1

let btn = document.querySelector(".bout");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let result = document.querySelector(".vide");

function addition() {
    let add = Number(left.value) + Number(right.value); //Number comme ça ils s'additionnent
    result.innerText = add
}
btn.addEventListener("click", addition);

//niv 2
(() => {
    let nb1 = document.querySelector("#un")
    let nb2 = document.querySelector("#deux")
    let nb3 = document.querySelector("#trois")
    let nb4 = document.querySelector("#quatre")
    let nb5 = document.querySelector("#cinq")
    let nb6 = document.querySelector("#six")
    let nb7 = document.querySelector("#sept")
    let nb8 = document.querySelector("#huit")
    let nb9 = document.querySelector("#neuf")
    let nb0 = document.querySelector("#zero")

    let addition = document.querySelector("#addition")
    let soustraction = document.querySelector("#soustraction")
    let multipl = document.querySelector("#multipl")
    let division = document.querySelector("#division")

    let input = document.querySelector(".inpt")
    let resultat = document.querySelector(".resultatclc")

    let chiffre1 = 0
    let chiffre2 = 0
    let operator = ""

    nb1.addEventListener("click", () => {
        input.value = input.value + 1
    });

    nb2.addEventListener("click", () => {
        input.value = input.value + 2
    });

    nb3.addEventListener("click", () => {
        input.value = input.value + 3
    });

    nb4.addEventListener("click", () => {
        input.value = input.value + 4
    });

    nb5.addEventListener("click", () => {
        input.value = input.value + 5
    });

    nb6.addEventListener("click", () => {
        input.value = input.value + 6
    });

    nb7.addEventListener("click", () => {
        input.value = input.value + 7
    });

    nb8.addEventListener("click", () => {
        input.value = input.value + 8
    });

    nb9.addEventListener("click", () => {
        input.value = input.value + 9
    });

    nb0.addEventListener("click", () => {
        input.value = input.value + 0
    });

    addition.addEventListener("click", () => {
        if (chiffre1 == 0) {
            chiffre1 = Number(input.value)
            resultat.innerText = "";
            resultat.innerText += chiffre1.toString() + "+"
        } else {
            chiffre2 = Number(input.value)
        }

        input.value = ""
        operator = "+"
    })

    soustraction.addEventListener("click", () => {
        if (chiffre1 == 0) {
            chiffre1 = Number(input.value)
            resultat.innerText = "";
            resultat.innerText += chiffre1.toString() + "-"
        } else {
            chiffre2 = Number(input.value)
        }

        input.value = ""
        operator = "-"
    })

    multipl.addEventListener("click", () => {
        if (chiffre1 == 0) {
            chiffre1 = Number(input.value)
            resultat.innerText = "";
            resultat.innerText += chiffre1.toString() + "*"
        } else {
            chiffre2 = Number(input.value)
        }

        input.value = ""
        operator = "*"
    })


    division.addEventListener("click", () => {
        if (chiffre1 == 0) {
            chiffre1 = Number(input.value)
            resultat.innerText = "";
            resultat.innerText += chiffre1.toString() + "/"
        } else {
            chiffre2 = Number(input.value)
        }

        input.value = ""
        operator = "/"
    })

    clear.addEventListener("click", () => {
        chiffre1 = 0
        chiffre2 = 0
        operator = ""
        input.value = ""
        resultat.innerText = "0"
    })

    egal.addEventListener("click", () => {
        switch (operator) {
            case "+":
                chiffre2 = Number(input.value)
                resultat.innerText = resultat.innerText + chiffre2.toString() + " = " + (chiffre1 + chiffre2)
                input.value = ""
                break;
            case "-":
                chiffre2 = Number(input.value)
                resultat.innerText = resultat.innerText + chiffre2.toString() + " = " + (chiffre1 - chiffre2)
                input.value = ""
                break;

            case "*":
                chiffre2 = Number(input.value)
                resultat.innerText = resultat.innerText + chiffre2.toString() + " = " + (chiffre1 * chiffre2)
                input.value = ""
                break;

            case "/":
                chiffre2 = Number(input.value)
                resultat.innerText = resultat.innerText + chiffre2.toString() + " = " + (chiffre1 / chiffre2)
                input.value = ""
                break;
        }

    });
})();

