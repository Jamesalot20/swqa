const express = require('express');
const bmiCalculator = require('./bmiCalculator.js');
const bmiCategory = require('./bmiCalculator.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.post('/calculate', (req, res) => {

    const weightInPounds = parseFloat(req.body.weightInPounds);
    const heightInInches = parseFloat(req.body.heightInInches);

    const bmi = calculateBMI(weightInPounds, heightInInches);
    const bmiCategory = categorizeBMI(bmi);

    res.send(`Your BMI is: ${bmi.toFixed(2)}. Your BMI category is: ${bmiCategory}.`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
