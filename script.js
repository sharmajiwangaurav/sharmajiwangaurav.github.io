const locations = [
  { name: "Ha", id: "bg-0" },
  { name: "Pathankot", id: "bg-1" },
  { name: "Wellington", id: "bg-2" },
  { name: "Secunderabad", id: "bg-3" },
  { name: "Gurugram", id: "bg-4" },
  { name: "Delhi", id: "bg-5" }
];


const typewriter = document.getElementById("typewriter");
let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentSpanId = null;

function updateBackground(newId) {
  if (currentSpanId) {
    document.getElementById(currentSpanId).classList.remove("active");
  }
  document.getElementById(newId).classList.add("active");
  currentSpanId = newId;
}

function type() {
  const location = locations[index];
  const text = location.name.substring(0, charIndex);

  typewriter.textContent = text;

  if (!isDeleting && charIndex < location.name.length) {
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
      updateBackground(locations[index].id);
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateBackground(locations[index].id);
  type();
});
