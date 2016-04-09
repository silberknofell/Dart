/**
 * Created by test on 16.01.2016.
 */
var punkte;
var durchgang;
var faktor;

function initModel() {
    punkte = 301;
    durchgang = [];
    faktor = 1;
    anzeigeAktualisieren();
}

function getPunkteImDurchgang() {
    var punkteImDurchgang = 0;
    for (var i = 0; i < durchgang.length; i++) {
        punkteImDurchgang += durchgang[i];
    }
    return punkteImDurchgang;
};

function getAktuellePunktzahl() {
    var punkteImDurchgang =  getPunkteImDurchgang();
    if (punkte < punkteImDurchgang) {
        return punkte;
    }
    return punkte - punkteImDurchgang;
}

function addWurf(punkteImWurf) {
    if (istDurchgangVollstaendig()) {
        neuerDurchgang();
    }
    durchgang.push(punkteImWurf);
}

function undoWurf() {
    durchgang.pop();
}


function istDurchgangVollstaendig() {
    return durchgang.length >= 3 || getAktuellePunktzahl() <= 0;
}

function getPunkteString() {
    var punkteString=" ";
    for (var i = 0; i < durchgang.length; i++) {
        if (i>0) {
            punkteString += "+";
        }
        punkteString += durchgang[i];
    }
    if (durchgang.length>1) {
        punkteString += "=" + getPunkteImDurchgang();
    }

    return punkteString;
}

function neuerDurchgang() {
    if (getAktuellePunktzahl() >= 0) {
        punkte = getAktuellePunktzahl();
    }
    durchgang = [];
}