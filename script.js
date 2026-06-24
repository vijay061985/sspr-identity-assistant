/* ======== ROI CALCULATION ======== */
function runROI() {
  const users = Number(document.getElementById("users").value);
  const cost = Number(document.getElementById("cost").value);
  const resets = Number(document.getElementById("resets").value);
  const reduction = Number(document.getElementById("reduction").value) / 100;
  const ssprCost = Number(document.getElementById("ssprCost").value);

  const tickets = users * resets;
  const costBefore = tickets * cost;
  const ticketsSaved = tickets * reduction;
  const savings = ticketsSaved * cost;
  const totalCost = users * ssprCost;
  const netSavings = savings - totalCost;
  const roi = totalCost === 0 ? "Infinite" : (netSavings / totalCost).toFixed(2);

  document.getElementById("output").textContent = `
Tickets per Year: ${tickets}
Cost Before SSPR: $${costBefore}
Tickets Eliminated: ${ticketsSaved}
Annual Savings: $${savings}
SSPR Cost: $${totalCost}
Net Savings: $${netSavings}
ROI: ${roi}
  `;
}

/* ======== DARK MODE TOGGLE ======== */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
