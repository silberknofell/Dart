/**
 * Created by test on 16.01.2016.
 */

const aktiveClassName = "aktiviert";
function init() {
    initModel();

}
var listener = function () {
    this.removeEventListener("animationend", listener);
    this.classList.remove("anim");
}

function animButton(button) {
    button.addEventListener("animationend", listener
        , false);
    button.classList.add("anim");
}
function wurf(punkteImWurf, button) {
    animButton(button);
    if (punkteImWurf > 20) {
        addWurf(punkteImWurf);
    } else {
        addWurf(punkteImWurf * faktor);
    }

    faktor = 1;
    resetFaktorKlassen();
    anzeigeAktualisieren();
}

function undo() {
    undoWurf();
    anzeigeAktualisieren();
}

function setFaktor(f, button) {
    resetFaktorKlassen();
    if (faktor != f) {
        button.classList.add(aktiveClassName);
        faktor = f;
    } else {
        faktor = 1;
    }

    anzeigeAktualisieren();
}

function resetFaktorKlassen() {
    var f = document.getElementsByClassName(aktiveClassName);
    for (i = 0; i < f.length; i++) {
        f[i].classList.remove(aktiveClassName);
    }
}

function anzeigeAktualisieren() {
    document.getElementById("punkte").innerHTML = getAktuellePunktzahl();
    document.getElementById("punkte-string").innerHTML = getPunkteString();

    var farbe = istDurchgangVollstaendig() ? "#444" : "#FFF";
    document.body.style.backgroundColor = farbe;
}