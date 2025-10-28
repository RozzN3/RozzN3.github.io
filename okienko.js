const popup = document.getElementById("okienko");
const yesBtn = document.getElementById("tak");
const noBtn = document.getElementById("nie");

let yesSize = 1;

// Pokaż okienko po załadowaniu
window.addEventListener("load", () => {
  popup.style.display = "flex";
});

// Losowe przemieszczanie "Nie"
function moveNoButton() {
  noBtn.style.position = "absolute";
  const maxX = window.innerWidth - 500;
  const maxY = window.innerHeight - 500;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Kliknięcie "Nie"
noBtn.addEventListener("click", () => {
  moveNoButton();
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  if (yesSize >= 2.5) {
    noBtn.style.display = "none";
  }
});

// Kliknięcie "Tak" — znika okienko
yesBtn.addEventListener("click", () => {
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
});
