//ini javascirpt
function calculateBMI() {
    const beratBadan = document.getElementById("berat-badan").value;
    const tinggiBadan = document.getElementById("tinggi-badan").value;
    const usia = document.getElementById("usia").value;

    if (beratBadan > 0 && tinggiBadan > 0 && usia > 0) {
        const bmi =beratBadan / ((tinggiBadan / 100) ** 2);
        const bmiValue = bmi.toFixed(1);
        document.getElementById("bmiValue").innerText = `BMI: ${bmiValue}`;

        let description;
        if (bmi < 18.5) {
            description = "Berat badan anda kurang";
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            description = "Berat badan anda Normal";
        } else if (bmi >= 23 && bmi <= 24.9) {
            description = "Berat badan anda berlebih";
        } else {
            description = "Anda obesitas";
        }

        document.getElementById("bmiDescription").innerText = `Kategori: ${description}`;
    } else {
        alert("Please fill in all fields");
    }
}
