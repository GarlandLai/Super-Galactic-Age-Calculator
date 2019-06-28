
import { CalculateAge } from './../src/ageCalculator.js';

describe( 'CalculateAge', function() {

  it('should test whether the age of Mercury is correct', function() {
    var userAge = new CalculateAge(10);
    expect(userAge.returnMercury()).toEqual((1/.24)*10);
  });
  it('should test whether the age of Venus is correct', function() {
    var userAge = new CalculateAge(10);
    expect(userAge.returnVenus()).toEqual((1/.62)*10);
  });
  it('should test whether the age of Mars is correct', function() {
    var userAge = new CalculateAge(10);
    expect(userAge.returnMars()).toEqual((1/1.88)*10);
  });
  it('should test whether the age of Jupiter is correct', function() {
    var userAge = new CalculateAge(10);
    expect(userAge.returnJupiter()).toEqual((1/11.86)*10);
  });

  it('should calculate how many years left to live on earth', function() {
    var userInput = new CalculateAge(10, 80);
    expect(userInput.calculateYears()).toEqual(70);
  });
  it('should calculate how many earth years you passed your life expectancy', function() {
    var userInput = new CalculateAge(80, 70);
    expect(userInput.calculateYears()).toEqual(-10);
  });

  it('should calculate how many Mercury years you are expected to have left', function() {
    var user = new CalculateAge(10, 80);
    expect(user.mercuryExpect()).toEqual(16.8);
  });
});
