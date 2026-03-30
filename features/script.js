window.onload = function () {
    const loadingBox = document.getElementById("loadingBox");
    const resultBox = document.getElementById("resultBox");
    const errorBox = document.getElementById("errorBox");
  
    if (loadingBox) {
      loadingBox.classList.add("hidden");
    }
  
    if (resultBox) {
      resultBox.innerHTML = "";
    }
  
    if (errorBox) {
      errorBox.classList.add("hidden");
      errorBox.textContent = "";
    }
  };
  
  const form = document.getElementById("careerForm");
  const resultBox = document.getElementById("resultBox");
  const loadingBox = document.getElementById("loadingBox");
  const errorBox = document.getElementById("errorBox");
  const submitBtn = document.querySelector(".submit-btn");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    loadingBox.classList.remove("hidden");
    errorBox.classList.add("hidden");
    errorBox.textContent = "";
    resultBox.innerHTML = "";
    submitBtn.disabled = true;
    submitBtn.textContent = "Analyzing...";
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://aygulse-ai-career-backend.hf.space/analyze", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Analysis failed.");
      }
  
      renderAnalysis(data.analysis);
    } catch (error) {
      console.error(error);
      errorBox.textContent = error.message || "Something went wrong.";
      errorBox.classList.remove("hidden");
    } finally {
      loadingBox.classList.add("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Analyze My Career Path";
    }
  });
  
  function renderAnalysis(analysis) {
    if (!analysis) {
      resultBox.innerHTML = "<p>No analysis returned.</p>";
      return;
    }
  
    const score = analysis.score ?? 0;
    const headline = analysis.headline ?? "";
    const verdict = analysis.verdict ?? "";
    const strengths = Array.isArray(analysis.strengths) ? analysis.strengths : [];
    const gaps = Array.isArray(analysis.gaps) ? analysis.gaps : [];
    const roadmap = Array.isArray(analysis.roadmap_30_day) ? analysis.roadmap_30_day : [];
  
    resultBox.innerHTML = `
      <div class="score-card">
        <div class="score-label">Competitiveness Score</div>
        <div class="score-value">${score}/100</div>
        <div class="headline-box">${escapeHtml(headline)}</div>
      </div>
  
      <div class="info-card">
        <h3>🧠 Verdict</h3>
        <p>${escapeHtml(verdict)}</p>
      </div>
  
      <div class="info-card">
        <h3>💪 Strengths</h3>
        ${renderList(strengths)}
      </div>
  
      <div class="info-card">
        <h3>⚠️ Gaps</h3>
        ${renderList(gaps)}
      </div>
  
      <div class="info-card">
        <h3>📅 30-Day Plan</h3>
        ${renderRoadmap(roadmap)}
      </div>
    `;
  }
  
  function renderList(items) {
    if (!items.length) {
      return "<p>No items available.</p>";
    }
  
    return `
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }
  
  function renderRoadmap(weeks) {
    if (!weeks.length) {
      return "<p>No roadmap available.</p>";
    }
  
    return weeks
      .map((week) => {
        const weekTitle = week.week || "Week";
        const focus = week.focus || "";
        const actions = Array.isArray(week.actions) ? week.actions : [];
  
        return `
          <div class="week-card">
            <h4>${escapeHtml(weekTitle)}</h4>
            <div class="week-focus">${escapeHtml(focus)}</div>
            ${renderList(actions)}
          </div>
        `;
      })
      .join("");
  }
  
  function escapeHtml(text) {
    if (text === null || text === undefined) return "";
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }