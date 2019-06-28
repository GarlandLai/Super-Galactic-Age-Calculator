
export class CalculateAge {
  constructor(age) {
    this.age = age;
    this.questions = questions;
  }
  returnMercury() {
    const mercuryYears = (1/.24);
    const userAge = new Date(this.age);
    return mercuryYears * userAge
  }
  returnVenus() {
    const venusYears = (1/.62);
    const userAge = new Date(this.age);
    return venusYears * userAge
  }
  returnMars() {
    const marsYears = (1/1.88);
    const userAge = new Date(this.age);
    return marsYears * userAge
  }
  returnJupiter() {
    const jupiterYears = (1/11.86);
    const userAge = new Date(this.age);
    return jupiterYears * userAge
  }
  calculateLifeExpectancy() {
    const normalAge = 80;
    if (questionChecked = 0) {
      return 80
    } else if (questionChecked === 5) {
      return 80 - 25
    } else if (questionChecked === 4) {
      return 80 - 20
    } else if (questionChecked === 3) {
      return 80 - 15
    } else if (questionChecked === 2) {
      return 80 - 10
    } else if (questionChecked === 1) {
      return 80 - 5
    }
  }
}
