const topBar = document.getElementById("top-bar");
const hint = document.getElementById("top-hint");

let lastScroll = window.pageYOffset;
let mouseAtTop = false;
let openedByScroll = false;

// --- Souris ---
document.addEventListener("mousemove", (e) => {
  mouseAtTop = e.clientY <= 50;

  if (mouseAtTop && !openedByScroll) {
    topBar.style.top = "0";
    hint.style.opacity = "0";
  } else if (!mouseAtTop && !openedByScroll && window.pageYOffset >= lastScroll) {
    topBar.style.top = "-50px";
    hint.style.opacity = "1";
  }
});

// --- Scroll ---
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll < lastScroll) {
    // Scroll vers le haut → ouvrir et verrouiller
    topBar.style.top = "0";
    hint.style.opacity = "0";
    openedByScroll = true;
  } else if (currentScroll > lastScroll) {
    // Scroll vers le bas → fermer et déverrouiller
    topBar.style.top = "-50px";
    hint.style.opacity = "1";
    openedByScroll = false;
  }

  lastScroll = currentScroll;
});

// --- Sortie fenêtre ---
window.addEventListener("mouseout", (e) => {
  if (!e.relatedTarget && !e.toElement) {
    topBar.style.top = "-50px";
    hint.style.opacity = "1";
    openedByScroll = false;
  }
});
