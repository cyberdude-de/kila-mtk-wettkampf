document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const webhookURL = "DEINE_WEBHOOK_URL"; // Ersetze mit deiner Google Apps Script URL

    try {
      await fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      alert("Daten erfolgreich übermittelt!");
      form.reset();
    } catch (err) {
      alert("Fehler beim Senden: " + err.message);
    }
  });
});
