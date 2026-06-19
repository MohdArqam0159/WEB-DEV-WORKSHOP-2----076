function calculateResult() {
    let count = parseInt(document.getElementById("subjectCount").value);

    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number of subjects");
        return;
    }

    let total = 0;

    // Loop to take marks
    for (let i = 1; i <= count; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid marks! Please enter between 0 and 100");
            return;
        }

        total += marks;
    }

    let average = total / count;
    let grade = "";
    let resultStatus = "";

    // Conditions for grade
    if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Pass/Fail
    if (average >= 40) {
        resultStatus = "Pass";
    } else {
        resultStatus = "Fail";
    }

    // Display result
    document.getElementById("result").innerHTML =
        `<h3>Total Marks: ${total}</h3>
         <h3>Average Marks: ${average.toFixed(2)}</h3>
         <h3>Grade: ${grade}</h3>
         <h3>Result: ${resultStatus}</h3>`;
}