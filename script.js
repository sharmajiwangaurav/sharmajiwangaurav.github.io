const locations = ["Pathankot", "Wellington", "Secunderabad", "Gurugram", "Delhi"];
const typewriter = document.getElementById("typewriter");
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = locations[index];
  const text = current.substring(0, charIndex);

  typewriter.textContent = text;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
    } else {
      isDeleting = false;
      index = (index + 1) % locations.length;
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
