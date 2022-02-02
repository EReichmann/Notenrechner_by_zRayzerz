//Variable werden definiert

let n1;
let n2;
let n3;
let n4;
let n5;
let summe = 0;
let anzahlNoten = 0
let ergebnis;

function tfAuslesen() {

    anzahlNoten = 0
    summe = 0
//Notenpunkte werden aus den Feldern ausgelesen und den Variablen zugeordnet
    n1 = parseInt(document.getElementById("tfNote1").value)
    n2 = parseInt(document.getElementById("tfnote2").value)
    n3 = parseInt(document.getElementById("tfnote3").value)
    n4 = parseInt(document.getElementById("tfnote4").value)
    n5 = parseInt(document.getElementById("tfnote5").value)

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5 + ";")
//Eingabe soll geprüft werden -> Funktion aber erst später definiert
    eingabeUebrpruefung(n1);
    eingabeUebrpruefung(n2);
    eingabeUebrpruefung(n3);
    eingabeUebrpruefung(n4);
    eingabeUebrpruefung(n5);

    ergebnis=summe/anzahlNoten;

//Ausgabe wird als Erbgebnis definiert

    document.getElementById("ausgabe").innerHTML = ergebnis;

    //Färbung der Ergebnisse

    if (ergebnis<5){
        document.getElementById("ausgabe").style.color = "crimson";
    } else {
        if (ergebnis<11){
            document.getElementById("ausgabe").style.color = "#D08C18";
        } else {
            document.getElementById("ausgabe").style.color = "green";
        }
    }


//    document.getElementById("Test").innerHTML

//    if (ergebnis<5){
//        document.getElementById("Test").innerHTML
//    }

}
//isNan = ist keine Zahl -> wenn das erfüllt steht keine Note da
function eingabeUebrpruefung(punkte) {
    if (isNaN(punkte)){
        console.log("Keine Zahl");
    }else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }

}