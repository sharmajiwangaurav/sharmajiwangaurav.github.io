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
const sectionLabel = document.getElementById("section-name");

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
    setTimeout(type, 130); // slower typing
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 130); // slower deleting
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 800); // pause after full name
    } else {
      isDeleting = false;
      index = (index + 1) % locations.length;
      crossfadeTo(locations[index].image);
      setTimeout(type, 800); // pause before next name
    }
  }
}

function updateTopBarLabel() {
  const sectionMap = Array.from(document.querySelectorAll("section")).map((sec) => ({
    id: sec.id,
    name: sec.dataset.name,
    el: sec
  }));

  for (let i = sectionMap.length - 1; i >= 0; i--) {
    const { el, name } = sectionMap[i];
    const rect = el.getBoundingClientRect();
    if (rect.top <= 100) {
      sectionLabel.textContent = name;
      break;
    }
  }
}

// Start everything AFTER popup is closed
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcome-popup");
  const okBtn = document.getElementById("popup-ok");

  if (okBtn) {
    okBtn.addEventListener("click", () => {
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.display = "none";

        // Now start typewriter and top bar label tracking
        crossfadeTo(locations[0].image);
        type();
        window.addEventListener("scroll", updateTopBarLabel);
      }, 600);
    });
  } else {
    console.warn("popup-ok button not found");
  }
});
