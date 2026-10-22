
document.addEventListener("DOMContentLoaded", () => {
  // Päivitä footerin vuosiluku automaattisesti
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Ostopainike — väliaikainen demo, ei veloita maksua
  const purchaseButton = document.getElementById("purchase-button");

  if (purchaseButton) {
    purchaseButton.addEventListener("click", () => {
      alert(
        "Kiitos kiinnostuksestasi AMIRSZN-treeniohjelmaan!\n\n" +
        "Hinta: 19,99 €\n\n" +
        "Verkkomaksaminen ei ole vielä käytössä. Palaa pian!"
      );
    });
  }

  // Vieritä sivun sisäisiin linkkeihin sulavasti
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Näytä konsolissa vahvistus kehitystyötä varten
  console.log("AMIRSZN website loaded successfully.");
});
