// AURELIA - INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE MENU */

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* SMOOTH SCROLL */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* EVENT BUTTONS */

  document.querySelectorAll(".event-card .btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".event-card");
      const eventName = card?.querySelector("h3")?.textContent || "Selected Event";

      localStorage.setItem("selectedEvent", eventName);

      // If booking page exists, open it
      if (button.dataset.page) {
        window.location.href = button.dataset.page;
      } else {
        alert(`${eventName} selected!`);
      }
    });
  });

  /* SCROLL HEADER EFFECT */

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  /* REVEAL ANIMATION */

  const revealElements = document.querySelectorAll(
    ".event-card, .feature, .stat"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });

});
