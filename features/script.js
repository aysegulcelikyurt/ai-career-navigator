function analyzeCareerMentor() {
  const department = document.getElementById("department").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;

  const loadingBox = document.getElementById("loadingBox");
  const resultsSection = document.getElementById("resultsSection");

  loadingBox.classList.remove("hidden");
  resultsSection.classList.add("hidden");

  setTimeout(() => {

    document.getElementById("cvMatch").innerText =
      `Your background in ${department} shows potential for ${role}, but you need stronger positioning and clearer impact.`;

    document.getElementById("missingSkills").innerText =
      `You need more project-based experience, stronger data analysis skills, and clearer real-world examples.`;

    document.getElementById("companyPrep").innerText =
      `${company} expects analytical thinking, problem solving, and adaptability. Research their operations and values.`;

    document.getElementById("interviewPrep").innerText =
      `Be ready to explain why ${company}, why ${role}, and how your background supports this role.`;

    document.getElementById("rejectionReasons").innerText =
      `Your CV might not be tailored enough or you may not stand out compared to other candidates.`;

    document.getElementById("nextSteps").innerText =
      `Improve your CV, add strong projects, and tailor each application specifically.`;

    document.getElementById("sampleMessage").innerText =
      `Hello, I am a ${department} student interested in ${role} at ${company}. I am eager to contribute and learn.`;

    loadingBox.classList.add("hidden");
    resultsSection.classList.remove("hidden");

  }, 1200);
}
