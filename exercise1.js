// Create a Car class with private properties for make, model, and year.
// Include a method getCarInfo() that returns the car info as a string.
// Add a method setYear(newYear) that updates the year only if newYear >= the current year.

class Car {
  // YOUR CODE HERE
  #make;
  #model;
  #year;

  constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
  }

  getYear() { 
    return this.#year; 
  }

  getCarInfo() {
    return(`The car's profile is: ${this.#make}, ${this.#model}, ${this.#year}`);
  }

  //Method New Year
  setYear(newYear) {

    if(newYear >= this.#year) {
      this.#year = newYear;
      console.log(`The year has been updated to ${newYear}.`);
    } else {
      console.log(`The new year couldn't be updated (${this.#year}).`);
    }
}
}

// TEST CASE / DRIVER CODE
const car1 = new Car("Toyota", "Corolla", 2010);
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2010"

car1.setYear(2015); // Should update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"

car1.setYear(2005); // Should not update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"