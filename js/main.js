/**
 * 
 * 
 * 
 * Calcolo del prezzo del biglietto del treno con form
 * 
 * 
 * 
 */

//  Definizione Variabili per riconoscimento Eventi

var btnGenera = document.getElementById('generate');
var btnAnnulla = document.getElementById('reset');

//  1. Prima Azione: Generare un biglietto.
btnGenera.addEventListener('click', function() {

    
    // Specifiche costo biglietto
    var prezzoUnit = 0.21;
    var offerta = 'Nessuna scontistica applicabile per questa fascia di età';


    // Raccolta Dati
    var nome = document.getElementById('nome').value;
    var kmtot = document.getElementById('km').value;
    var eta = document.getElementById('fascia-eta').value;

    // Calcolo Costo
    var prezzoTot = prezzoUnit * kmtot;

    // Calcolo scontistica

    if (eta == 'minorenne') {
        prezzoTot = prezzoTot * 0.8;
        offerta = 'Sconto del 20% applicato';
    } else if (eta == 'over65') {
        prezzoTot = prezzoTot * 0.6;
        offerta = 'Sconto del 40% applicato';
    }

    // Controllo su decimali
    prezzoTot = prezzoTot.toFixed(2) + '€';

    // Generazione casuale Vagone & Codice
    var vagone = Math.floor( Math.random() * 10 ) + 1;
    var codice = Math.floor( Math.random() * 1000 ) + 9000;


    // Stampa degli Output
    document.getElementById('passeggero').innerHTML = nome;
    document.getElementById('sconto').innerHTML = offerta;
    document.getElementById('vagone').innerHTML = vagone;
    document.getElementById('codice').innerHTML = codice;
    document.getElementById('prezzo').innerHTML = prezzoTot;

    // Visualizzazione della parte di output

    document.getElementById('print').className = 'show';
}
);

//  2. Seconda Azione: Azzerare tutti i campi.

btnAnnulla.addEventListener('click', function() {

    
    // Pulizia Form
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';

    // Pulizia Biglietto
    
    document.getElementById('passeggero').innerHTML = '';
    document.getElementById('sconto').innerHTML = '';
    document.getElementById('vagone').innerHTML = '';
    document.getElementById('codice').innerHTML = '';
    document.getElementById('prezzo').innerHTML = '';

    // Visualizzazione della parte di output

    document.getElementById('print').className = 'hidden';
}
);