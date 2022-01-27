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

    n1 = parseInt(document.getElementById("tfNote1").value)
    n2 = parseInt(document.getElementById("tfnote2").value)
    n3 = parseInt(document.getElementById("tfnote3").value)
    n4 = parseInt(document.getElementById("tfnote4").value)
    n5 = parseInt(document.getElementById("tfnote5").value)

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5 + ";")

    eingabeUebrpruefung(n1);
    eingabeUebrpruefung(n2);
    eingabeUebrpruefung(n3);
    eingabeUebrpruefung(n4);
    eingabeUebrpruefung(n5);

    ergebnis=summe/anzahlNoten;

    document.getElementById("ausgabe").innerHTML = ergebnis;

    if (ergebnis<5){
        document.getElementById("ausgabe").style.color = "crimson";
    } else {
        if (ergebnis<11){
            document.getElementById("ausgabe").style.color = "#D08C18";
        } else {
            document.getElementById("ausgabe").style.color = "green";
        }
    }


}

function eingabeUebrpruefung(punkte) {
    if (isNaN(punkte)){
        console.log("Keine Zahl");
    }else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }

}