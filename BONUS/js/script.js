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



const mainImage = document.querySelector('.active-img-container img');
const thumbnails = document.querySelectorAll('.thumbnail');
let upArrowEl = document.getElementById("up-arrow");
let downArrowEl = document.getElementById("down-arrow");

let isClick = 0;

// mostra l'immagine iniziale
showImage();

// rendi opaca l'immagine che si sta cliccando
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    isClick = index;
    showImage();
  });
});

// rendo dinamica la freccia UP in modo tale da switchare immagine
upArrowEl.addEventListener('click', () => {

    // aumentare il valore dell'index di un'unità
    isClick--;

    // loop infinito per far tornare all'ultima immagine
    if (isClick < 0) {
    
        isClick = thumbnails.length - 1;
    
    }
    
    showImage();

});

// rendo dinamica la freccia DOWN in modo tale da switchare immagine
downArrowEl.addEventListener('click', () => {

    // aumentare il valore dell'index di un'unità
    isClick++;

    // loop infinito per far tornare all'ultima immagine
    if (isClick > thumbnails.length - 1) {

        isClick = 0;

    }

    showImage();

});

// Mostra l'immagine corrente
function showImage() {
  mainImage.src = thumbnails[isClick].src;
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });
  thumbnails[isClick].classList.add('active');
}