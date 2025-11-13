// Pobieranie elementow z plyku
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const left = document.querySelector('.arrow.left');
const right = document.querySelector('.arrow.right');
const dotsContainer = document.querySelector('.dots');

// Zmienna przechowująca aktualny numer zdjęcia
let index = 0;

// kropki pod sliderem (tyle, ile jest zdjęć)
images.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i)); // kliknięcie w kropkę pokazuje odpowiedni slajd
  dotsContainer.appendChild(dot);
});

// Pobieranie wszystkiech kropk
const dots = document.querySelectorAll('.dot');

/** Funkcja zmieniająca slajd - @param {number} i - numer slajdu
 */
function showSlide(i) {
  index = (i + images.length) % images.length; // zapętlenie (gdy wyjdzie poza zakres)
  const slideWidth = document.querySelector('.slider').offsetWidth; // dynamiczna szerokość
  slides.style.transform = `translateX(-${index * slideWidth}px)`; // przesunięcie o szerokość slidera
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// kliknięće strzałek
left.addEventListener('click', () => showSlide(index - 1));
right.addEventListener('click', () => showSlide(index + 1));
