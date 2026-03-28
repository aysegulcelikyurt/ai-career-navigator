
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
    let cvMatchText = `Your background in ${department || "your field"} shows potential for the ${role || "target role"} position, but your profile would become stronger with more role-specific examples, measurable results, and clearer positioning.`;

    let missingSkillsText = `You may need stronger project experience, clearer technical or analytical skills, and more evidence of practical application. Adding relevant coursework, case studies, certifications, or internship-ready projects would strengthen your profile.`;

    let companyPrepText = `Before applying to ${company || "this company"}, research its business model, values, recent developments, and workplace culture. Try to understand what kind of intern or entry-level candidate would be most valuable there.`;

    let interviewPrepText = `Prepare to answer why you chose ${company || "the company"}, why you are interested in ${role || "this role"}, what your strengths are, and how your academic background supports your goals. Use specific examples from your experience.`;

    let rejectionReasonsText = `Possible rejection reasons may include lack of role-specific tailoring, insufficient practical experience, weak communication of achievements, or stronger competition from candidates with more targeted backgrounds.`;

    let nextStepsText = `Your next step should be to improve your CV structure, add stronger project examples, tailor each application to the company, and practice answering interview questions with confidence and clarity.`;

    let sampleMessageText = `Hello, I am a ${department || "motivated"} student interested in the ${role || "position"} opportunity at ${company || "your company"}. I am eager to contribute with my academic background, willingness to learn, and strong motivation to grow in this field.`;

    if (cvFile) {
      cvMatchText = `Your uploaded CV suggests that you are taking your applications seriously. However, to increase your chances, your CV should more clearly connect your skills and experiences to the ${role || "target role"} position.`;
    }

    if (experience.length > 80) {
      missingSkillsText = `You already have a good foundation, but your experience should be presented in a more strategic way. Focus on measurable impact, relevant tools, and projects that match the expectations of ${role || "the role"}.`;
    }

    if (stage === "before-interview") {
      interviewPrepText = `Since you are at the interview stage, focus on company culture, role-specific expectations, behavioral questions, and how you present your strengths. Be ready to explain your motivation for joining ${company || "the company"} and your long-term learning goals.`;
    }

    if (stage === "after-rejection" || rejection.trim() !== "") {
      rejectionReasonsText = `Based on the rejection context, you may have been eliminated because your profile did not stand out enough against competitors, your experience may not have looked tailored enough, or your strengths may not have been communicated clearly.`;
      nextStepsText = `Compare your profile with stronger candidates in this area, identify gaps in projects, tools, communication, and confidence, and rebuild your applications with more targeted positioning.`;
    }

    if (company.toLowerCase().includes("ford")) {
      companyPrepText = `Ford Otosan is likely to value analytical thinking, problem solving, teamwork, adaptability, and interest in industrial systems. Review company values, production culture, and innovation mindset before your interview.`;
    }

    if (role.toLowerCase().includes("operations")) {
      missingSkillsText = `For operations-related roles, you may need stronger visibility in optimization, data analysis, process improvement, Excel, problem solving, and structured thinking.`;
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
