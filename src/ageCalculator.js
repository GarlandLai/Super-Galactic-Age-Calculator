
export class CalculateAge {
  constructor(age, life) {
    this.age = age;
    this.life = life;
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
  calculateYears() {
    const userInput = new Date(this.life);
    const userAge = new Date(this.age);
    return userInput - userAge
  }

  mercuryExpect () {
    const userInput = new Date(this.life);
    const userAge = new Date(this.age);
    return (userInput/(1/.24)) - (userAge/(1/.24))
  }

  venusExpect () {
    const userInput = new Date(this.life);
    const userAge = new Date(this.age);
    return (userInput/(1/.62)) - (userAge/(1/.62))
  }

  marsExpect () {
    const userInput = new Date(this.life);
    const userAge = new Date(this.age);
    return (userInput/(1/1.88)) - (userAge/(1/1.88))
  }

  jupiterExpect () {
    const userInput = new Date(this.life);
    const userAge = new Date(this.age);
    return (userInput/(1/11.86)) - (userAge/(1/11.86))
  }
}
