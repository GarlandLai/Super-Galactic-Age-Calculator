import { CalculateAge } from './../src/ageCalculator.js';
describe( 'CalculateAge', function() {
  it('should test whether the age of Mercury is correct', function() {
    const userAge = new CalculateAge(10);
    expect(userAge.returnMercury()).toEqual((1/.24)*10);
  });
  it('should test whether the age of Venus is correct', function() {
    const userAge = new CalculateAge(10);
    expect(userAge.returnVenus()).toEqual((1/.62)*10);
  });
  it('should test whether the age of Mars is correct', function() {
    const userAge = new CalculateAge(10);
    expect(userAge.returnMars()).toEqual((1/1.88)*10);
  });
  it('should test whether the age of Jupiter is correct', function() {
    const userAge = new CalculateAge(10);
    expect(userAge.returnJupiter()).toEqual((1/11.86)*10);
  });
  it('should calculate how many years left to live on earth', function() {
    const userInput = new CalculateAge(10, 80);
    expect(userInput.calculateYears()).toEqual(70);
  });
  it('should calculate how many earth years you passed your life expectancy', function() {
    const userInput = new CalculateAge(80, 70);
    expect(userInput.calculateYears()).toEqual(-10);
  });
  it('should calculate how many Mercury years you are expected to have left', function() {
    const user = new CalculateAge(10, 80);
    expect(parseFloat(user.mercuryExpect().toFixed(1))).toEqual(291.7);
  });
  it('should calculate how many Venus years you are expected to have left', function() {
    const user = new CalculateAge(10, 80);
    expect(parseFloat(user.venusExpect().toFixed(1))).toEqual(112.9);
  });
  it('should calculate how many Mars years you are expected to have left', function() {
    const user = new CalculateAge(10, 80);
    expect(parseFloat(user.marsExpect().toFixed(1))).toEqual(37.2);
  });
  it('should calculate how many Jupiter years you are expected to have left', function() {
    const user = new CalculateAge(10, 80);
    expect(parseFloat(user.jupiterExpect().toFixed(1))).toEqual(5.9);
  });
});
