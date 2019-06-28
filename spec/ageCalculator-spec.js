import { ageCalculator } from './../src/ageCalculator.js';

describe( 'ageCalculator', function() {

  it('should test whether the Mercury age is correct', function() {
    var userAge = new ageCalculator();
    expect(userAge.returnYear()).toEqual();
  });
});
