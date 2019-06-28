
export class CalculateAge {
  constructor(age) {
    this.age = age;
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
}
