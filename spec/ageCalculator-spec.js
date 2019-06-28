
import { CalculateAge } from './../src/ageCalculator.js';

describe( 'CalculateAge', function() {

  it('should test whether the age of Mercury is correct', function() {
    var userAge = new CalculateAge(10);
    expect(userAge.returnResult()).toEqual((1/.24)*10);
  });
});
