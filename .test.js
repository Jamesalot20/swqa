const { calculateBMI, getBMICategory } = require('./bmiCalculator');

describe('BMI Calculator', () => {
    test('calculates BMI correctly for normal weight', () => {
        expect(calculateBMI(68, 150)).toBeCloseTo(22.8, 1);
    });

    test('identifies normal weight category', () => {
        const bmi = calculateBMI(68, 150);
        expect(getBMICategory(bmi)).toBe('Normal weight');
    });

    test('calculates BMI correctly for underweight', () => {
        expect(calculateBMI(68, 100)).toBeCloseTo(15.2, 1);
    });

    test('identifies underweight category', () => {
        const bmi = calculateBMI(68, 100);
        expect(getBMICategory(bmi)).toBe('Underweight');
    });

    test('calculates BMI correctly for overweight', () => {
        expect(calculateBMI(68, 180)).toBeCloseTo(27.4, 1);
    });

    test('identifies overweight category', () => {
        const bmi = calculateBMI(68, 180);
        expect(getBMICategory(bmi)).toBe('Overweight');
    });

    test('calculates BMI correctly for obese', () => {
        expect(calculateBMI(68, 200)).toBeCloseTo(30.4, 1);
    });

    test('identifies obese category', () => {
        const bmi = calculateBMI(68, 200);
        expect(getBMICategory(bmi)).toBe('Obese');
    });

    // Testing boundary cases
    test('boundary case between underweight and normal weight', () => {
        // Assuming 18.5 is the lower boundary for normal weight
        const bmi = calculateBMI(68, 125); // Adjust height/weight to get a BMI close to 18.5
        expect(getBMICategory(bmi)).toBe('Normal weight');
    });

    test('boundary case between normal weight and overweight', () => {
        // Assuming 25 is the lower boundary for overweight
        const bmi = calculateBMI(68, 165); // Adjust height/weight to get a BMI close to 25
        expect(getBMICategory(bmi)).toBe('Overweight');
    });

    test('boundary case between overweight and obese', () => {
        // Assuming 30 is the lower boundary for obese
        const bmi = calculateBMI(68, 195); // Adjust height/weight to get a BMI close to 30
        expect(getBMICategory(bmi)).toBe('Obese');
    });
});
