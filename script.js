const locations = [
  { name: "Ha", image: "ha.jpg" },
  { name: "Pathankot", image: "pathankot.jpg" },
  { name: "Wellington", image: "wellington.jpg" },
  { name: "Secunderabad", image: "secunderabad.jpg" },
  { name: "Gurugram", image: "gurugram.jpg" },
  { name: "Delhi", image: "delhi.jpg" }
];

const typewriter = document.getElementById("typewriter");
const hero = document.getElementById("hero-section");

let index = 0;
let charIndex = 0;
let isDeleting = false;

function updateBackground(imageName) {
  if (hero) {
    hero.style.backgroundImage = `url('images/${imageName}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }
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
      updateBackground(locations[index].image);
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateBackground(locations[0].image);
  type();
});
