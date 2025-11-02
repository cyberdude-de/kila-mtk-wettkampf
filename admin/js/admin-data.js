// Beispiel: Holt Daten aus veröffentlichtem Google Sheet als JSON
fetch("DEINE_JSON_FEED_URL")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#teamTable tbody");
    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.verein}</td><td>${row.teamname}</td><td>${row.altersklasse}</td><td>${row.kinderzahl}</td><td>${row.kontaktperson}</td>`;
      tbody.appendChild(tr);
    });
  });
