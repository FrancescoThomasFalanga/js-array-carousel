/*
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.
*/

/*
- preparare un array di path di immagini
- preparare gli elementi in js corrispondenti agli elementi HTML
- memorizzare una variabile di indice
-> alla pressione del pulsante "destra"
    Aumentare il valore dell'indice di un'unità
    Mostrare l'immagine alla posizione dell'array relativa al valore dell'indice -1
    Aggiungi la classe active al cerchio relativo alla posizione dell'indice
-> alla pressione del pulsante "sinistra"
    Diminuire il valore dell'indice di un'unità
    Mostrare l'immagine alla posizione dell'array relativa al valore dell'indice -1
    Aggiungi la classe active al cerchio relativo alla posizione dell'indice
*/

// preparo un array di immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// preparo gli elementi in js corrispondenti agli elementi html
let upArrowEl = document.getElementById("up-arrow");
let downArrowEl = document.getElementById("down-arrow");
let activeImgEl = document.getElementById("active-img");


// memorizzo una variabile di indice = 0
let isClick = 0;


// inizio inserendo dentro il parametro src il valore della prima immagine dall'array
activeImgEl.src = images[isClick];


// rendo dinamica la freccia UP in modo tale da switchare immagine
upArrowEl.addEventListener("click", function() {

    // loop infinito per far tornare alla prima immagine
    if (isClick == 0) {
    
        isClick = 5;
    
    }
    
    // aumentare il valore dell'index di un'unità
    isClick--;
    
    // Mostrare l'immagine alla posizione dell'array relativa al valore dell'indice -1
    activeImgEl.src = images[isClick];
    
    
});



// rendo dinamica la freccia DOWN in modo tale da switchare immagine
downArrowEl.addEventListener("click", function() {
    
    // loop infinito per far tornare all'ultima immagine
    if (isClick == 4) {
    
        isClick = -1;
    
    }
    
    // aumentare il valore dell'isClick di un'unità
    isClick++;
    
    // Mostrare l'immagine alla posizione dell'array relativa al valore dell'indice -1
    activeImgEl.src = images[isClick];


});

