//Variablen werden mit let definiert

let eingabefelder = ['tfNote1', 'tfnote2', 'tfnote3', 'tfnote4', 'tfnote5', 'tfnote6'];
let noten = [];
let summe = 0;
let anzahlNoten = 0
let ergebnis;
let aktuelleEingabe

function tfAuslesen() {

    anzahlNoten = 0
    summe = 0

    //for := schleife, hat 3 Bedingungen
    //i++ := i = i+1

    for (let i = 0; i < eingabefelder.length; i++) {
        aktuelleEingabe = parseInt(document.getElementById(eingabefelder[i]).value)
        eingabeUeberpruefung(aktuelleEingabe)

        ergebnis = summe / anzahlNoten;
    }

//Ausgabe wird als Erbgebnis definiert

    document.getElementById("ausgabe").innerHTML = ergebnis;

    //Färbung der Ergebnisse

    if (ergebnis < 5) {
        document.getElementById("ausgabe").style.color = "crimson";
    } else {
        if (ergebnis < 11) {
            document.getElementById("ausgabe").style.color = "#D08C18";
        } else {
            document.getElementById("ausgabe").style.color = "green";
        }
    }
    //Trennung der Variablen voneinander durch "||"
    if (ergebnis < 0 || ergebnis > 15)  {
        document.getElementById("ausgabe").innerHTML ="Dies kann nicht dein Durchschnitt sein, da der Wert über 15,0 ist!"
    }


        if (ergebnis < 5) {
            document.getElementById("test").innerHTML = "man bist du doof!";
        } else {
            if (ergebnis < 11) {
                document.getElementById("test").innerHTML = "joa, geht aber schon noch besser, oder?"
            } else {
                document.getElementById("test").innerHTML = "auf Streber angelehnt, oder wie?"
            }
        }
    }



//isNan = ist keine Zahl -> wenn das erfüllt steht keine Note da
function eingabeUeberpruefung(punkte) {
    if (isNaN(punkte)) {
        console.log("Keine Zahl");
    } else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }

}
