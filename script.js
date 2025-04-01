const locations = [
  { name: "Ha", image: "ha.jpg" },
  { name: "Pathankot", image: "pathankot.jpg" },
  { name: "Wellington", image: "wellington.jpg" },
  { name: "Secunderabad", image: "secunderabad.jpg" },
  { name: "Gurugram", image: "gurugram.jpg" },
  { name: "Delhi", image: "delhi.jpg" }
];

const typewriter = document.getElementById("typewriter");
const bg1 = document.getElementById("hero-bg-1");
const bg2 = document.getElementById("hero-bg-2");

let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentBg = 1;

function crossfadeTo(imageUrl) {
  const incoming = currentBg === 1 ? bg2 : bg1;
  const outgoing = currentBg === 1 ? bg1 : bg2;

  incoming.style.backgroundImage = `url('images/${imageUrl}')`;
  incoming.classList.add("visible");
  outgoing.classList.remove("visible");

  currentBg = currentBg === 1 ? 2 : 1;
}

function type() {
  const current = locations[index];
  const text = current.name.substring(0, charIndex);
  typewriter.textContent = text;

  if (!isDeleting && charIndex < current.name.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      isDeleting = false;
      index = (index + 1) % locations.length;
      crossfadeTo(locations[index].image);
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crossfadeTo(locations[0].image);
  type();
});
