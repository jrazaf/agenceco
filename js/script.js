const links = document.querySelectorAll("nav li");


// gestion menu hamburger

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// appel du menu au click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Défilement fluide jusqu'à la section cible
          targetElement.scrollIntoView({ block: 'start' });
      }
  });
});
