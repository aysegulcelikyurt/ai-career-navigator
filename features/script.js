function analyze() {
  const dept = document.getElementById("department").value;
  const pos = document.getElementById("position").value;
  const exp = document.getElementById("experience").value;

  const result = document.getElementById("result");

  let output = `
    <h3>Analysis Result</h3>
    <p><strong>Strong Sides:</strong> You are motivated and have a clear career goal.</p>
    <p><strong>Missing Areas:</strong> You may need more practical experience and projects.</p>
    <p><strong>Possible Rejection Reasons:</strong> Your CV might not be tailored to the position.</p>
    <p><strong>Suggestions:</strong> Improve your CV, add projects, and apply strategically.</p>
    <p><strong>Sample Message:</strong> Hello, I am a ${dept} student interested in ${pos}. I would love to contribute and learn.</p>
  `;

  if (exp.length > 50) {
    output += `<p><strong>Extra Insight:</strong> Your experience is a good start, but it can be structured better.</p>`;
  }

  result.innerHTML = output;
}
