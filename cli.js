const readline = require('readline');
const { calculateBMI, getBMICategory } = require('./bmiCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your height in inches: ', (heightInches) => {
  rl.question('Enter your weight in pounds: ', (weightPounds) => {
    const bmi = calculateBMI(parseFloat(heightInches), parseFloat(weightPounds));
    const category = getBMICategory(bmi);
    console.log(`Your BMI is ${bmi.toFixed(2)}, which is considered ${category}.`);
    rl.close();
  });
});
