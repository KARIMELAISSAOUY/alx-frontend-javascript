export default class Car {
// eslint-disable
  constructor(brand, motor, color) {
    this._brand = brand;
	this._color = color;
    this._motor = motor;
    
  }
  //method 
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }

  static get [Symbol.species]() {
    return this;
  }
}
