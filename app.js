function calculateGrade() {
  const userName = document.getElementById("userName").value.trim();
  const obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
  const totalMarks = parseFloat(document.getElementById("totalMarks").value);

  if (!userName) {
      alert("Please enter your name.");
      return;
  }

  if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks <= 0) {
      alert("Please enter valid numbers for obtained and total marks.");
      return;
  }

  const percentage = (obtainedMarks / totalMarks) * 100;
  let grade = "";

  switch (true) {
    case (percentage >= 90):
        grade = "A+";
        break;
    case (percentage >= 80):
        grade = "A";
        break;
    case (percentage >= 70):
        grade = "B";
        break;
    case (percentage >= 60):
        grade = "C";
        break;
    case (percentage >= 50):
        grade = "D";
        break;
    default:
        grade = "F";
}


  document.getElementById("result").innerHTML = `
      <strong>${userName}</strong><br>
      Percentage: ${percentage.toFixed(2)}%<br>
      Grade: ${grade}
  `;
}
