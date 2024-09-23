function calculateAge() {
    var day = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    if (day === "" || month === "" || year === "") {
        document.getElementById('age').innerText = "Please enter a valid date!";
        return;
    }

    var today = new Date();
    var birthDate = new Date(year, month - 1, day); // month - 1 because month is zero-indexed in JS
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 0) {
        document.getElementById('age').innerText = "You are " + age + " years old.";
    } else {
        document.getElementById('age').innerText = "Invalid date!";
    }
}
