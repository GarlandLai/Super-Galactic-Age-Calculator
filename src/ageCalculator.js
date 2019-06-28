
export class CalculateAge {
  constructor(age) {
    this.age = age;
  }
  returnResult() {
    const mercuryYears = (1/.24);
    const userAge = new Date(this.age);
    return mercuryYears * userAge
  }
}
