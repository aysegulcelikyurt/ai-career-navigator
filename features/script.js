
function analyzeCareerMentor() {
  const department = document.getElementById("department").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const stage = document.getElementById("stage").value;
  const experience = document.getElementById("experience").value;
  const rejection = document.getElementById("rejection").value;
  const cvFile = document.getElementById("cvFile").files[0];

  const loadingBox = document.getElementById("loadingBox");
  const resultsSection = document.getElementById("resultsSection");

  loadingBox.classList.remove("hidden");
  resultsSection.classList.add("hidden");

  setTimeout(() => {
    let cvMatchText = `Your background in ${department || "your field"} shows potential for the ${role || "target role"} role, but your profile would be stronger with clearer achievements and better alignment with the position.`;

    let missingSkillsText = `You may need stronger project experience, clearer role-specific skills, and more practical examples that show impact.`;

    let companyPrepText = `Before applying to ${company || "this company"}, research its values, industry position, work culture, and recent developments.`;

    let interviewPrepText = `Be ready to explain why you want ${role || "this role"}, why you chose ${company || "this company"}, and how your background makes you a strong candidate.`;

    let rejectionReasonsText = `Possible rejection reasons may include insufficient tailoring, weak CV positioning, lack of practical experience, or stronger competition from other candidates.`;

    let nextStepsText = `Strengthen your CV, tailor your applications, add measurable project experience, and practice answering interview questions with confidence.`;

    let sampleMessageText = `Hello, I am a ${department || "motivated"} student interested in the ${role || "position"} opportunity at ${company || "your company"}. I am eager to contribute, learn, and grow in this field.`;

    if (cvFile) {
      cvMatchText = `Your uploaded CV shows that you are serious about your applications. To improve your chances, it should clearly connect your skills and experience to ${role || "the target role"}.`;
    }

    if (experience.length > 80) {
      missingSkillsText = `You already have a good foundation, but your experience should be communicated more strategically with stronger structure, role relevance, and measurable impact.`;
    }

    if (stage === "before-interview") {
      interviewPrepText = `Since you are at the interview stage, focus on behavioral questions, motivation, company knowledge, and examples that show problem solving, teamwork, and learning ability.`;
    }

    if (stage === "after-rejection" || rejection.trim() !== "") {
      rejectionReasonsText = `Based on your rejection context, your profile may not have stood out enough, your skills may not have matched the role clearly, or your strengths may not have been communicated effectively.`;
      nextStepsText = `Review the job expectations, compare your background with stronger candidates, improve your CV positioning, and build more targeted experience for future applications.`;
    }

    if (company.toLowerCase().includes("ford")) {
      companyPrepText = `Ford Otosan is likely to value structured thinking, teamwork, adaptability, analytical ability, and interest in real operational systems. Research the company culture, production environment, and innovation mindset before the interview.`;
    }

    if (role.toLowerCase().includes("operations")) {
      missingSkillsText = `For operations-focused roles, stronger evidence in process improvement, Excel, analytics, optimization, and structured problem solving would make your profile more competitive.`;
    }

    document.getElementById("cvMatch").innerText = cvMatchText;
    document.getElementById("missingSkills").innerText = missingSkillsText;
    document.getElementById("companyPrep").innerText = companyPrepText;
    document.getElementById("interviewPrep").innerText = interviewPrepText;
    document.getElementById("rejectionReasons").innerText = rejectionReasonsText;
    document.getElementById("nextSteps").innerText = nextStepsText;
    document.getElementById("sampleMessage").innerText = sampleMessageText;

    loadingBox.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  }, 1200);
}

window.onload = function () {
  const loadingBox = document.getElementById("loadingBox");
  const resultsSection = document.getElementById("resultsSection");

  if (loadingBox) {
    loadingBox.classList.add("hidden");
  }

  if (resultsSection) {
    resultsSection.classList.add("hidden");
  }
};
