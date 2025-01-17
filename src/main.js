import "./style.css";
import { initTheme } from "./theme-manager";

// Initialize theme manager
document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const emoji = document.querySelector(".hand-emoji");

  // Animation au chargement de la page
  window.addEventListener("load", () => {
    emoji.classList.add("shake");
  });

  // Animation au survol
  emoji.addEventListener("mouseenter", () => {
    // Supprime la classe pour réinitialiser l'animation
    emoji.classList.remove("shake");
    // Force un reflow
    void emoji.offsetWidth;
    // Rajoute la classe pour relancer l'animation
    emoji.classList.add("shake");
  });
});
