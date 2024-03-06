const { calculateBMI, getBMICategory } = require('./bmiCalculator');

describe('BMI Calculator', () => {
    test('calculates BMI correctly', () => {
        expect(calculateBMI(68, 150)).toBeCloseTo(22.8, 1);
    });

    test('identifies normal weight', () => {
        const bmi = calculateBMI(68, 150);
        expect(getBMICategory(bmi)).toBe('Normal weight');
    });

    // Add more tests for other categories and boundary cases
});
