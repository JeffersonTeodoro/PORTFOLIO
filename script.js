document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menu-btn");
  const navList = document.getElementById("nav-list");

  // ====== MENU MOBILE ======
  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Fecha menu quando clica em um link
    navList.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", false);
      });
    });
  }

  // ====== SCROLL PARA SEÇÕES ======
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));
  }

  // ====== NAVBAR SCROLL ======
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ====== SMOOTH SCROLL ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});