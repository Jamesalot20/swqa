function calculateBMI(weightInPounds, heightInInches) {
    const heightInMeters = heightInInches * 0.0254;
    const weightInKilograms = weightInPounds * 0.453592;
    const bmi = weightInKilograms / (heightInMeters * heightInMeters);
    return bmi;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    else if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    else return 'Obese';
}
module.exports = { calculateBMI, getBMICategory };
