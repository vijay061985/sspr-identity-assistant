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

  // ⭐ THIS WAS MISSING ⭐
  generateInsights(users, savings, netSavings, roi);
}

/* ======== AI INSIGHTS ENGINE ======== */
function generateInsights(users, savings, netSavings, roi) {
  let insights = "";

  if (savings > 50000) {
    insights += "💡 Strong Cost Savings\nYour organisation stands to save a significant amount annually.\n\n";
  } else if (savings > 10000) {
    insights += "💡 Moderate Savings\nSSPR provides measurable value.\n\n";
  } else {
    insights += "💡 Low Savings\nSavings are modest. Improve adoption or combine with MFA.\n\n";
  }

  if (roi === "Infinite") {
    insights += "🚀 Infinite ROI\nSSPR cost is $0 per user — pure benefit.\n\n";
  } else if (roi > 5) {
    insights += "🚀 High ROI\nYour investment pays back more than 5×.\n\n";
  } else if (roi > 1) {
    insights += "📈 Positive ROI\nThe solution pays for itself.\n\n";
  } else {
    insights += "⚠️ Low ROI\nReview licensing or adoption strategy.\n\n";
  }

  if (users > 5000) {
    insights += "🏢 Large Organisation\nAutomation significantly reduces helpdesk load.\n\n";
  } else if (users > 1000) {
    insights += "🏢 Mid‑Size Organisation\nSSPR streamlines operations.\n\n";
  } else {
    insights += "👥 Small Organisation\nBundle SSPR with MFA for maximum value.\n\n";
  }

  if (netSavings > 0) {
    insights += "✅ Recommendation\nProceed with SSPR rollout.";
  } else {
    insights += "⚠️ Recommendation\nRe‑evaluate licensing or adoption strategy.";
  }

  document.getElementById("aiInsights").innerHTML = insights;
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
