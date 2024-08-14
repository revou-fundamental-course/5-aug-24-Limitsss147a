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
            description2 = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            description = "Berat badan anda Normal";
            description2 = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
        } else if (bmi >= 23 && bmi <= 24.9) {
            description = "Berat badan anda berlebih";
            description2 = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
        } else {
            description = "Anda obesitas";
            description2 = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
        }

        document.getElementById("bmiDescription").innerText = `${description}`;
        document.getElementById("bmiDescription2").innerText = `${description2}`;
    } else {
        alert("Please fill in all fields");
    }
}
