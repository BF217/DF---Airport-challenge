import Plane from "./Plane.js";
import Weather from "./Weather.js";

export class Airport {
  #landedPlanes;
  #maxCapacity = 10;

  constructor() {
    this.landedPlanes = [];
  }

  get getMaxCapacity() {
    return this.#maxCapacity;
  }

  set setMaxCapacity(num) {
    if (num === null || num < this.landedPlanes.length) {
      console.log(
        "Max capacity cannot be less than the amount of planes in the airport"
      ); // originally threw an error but changed to console.log to demonstrate error handled in console application without terminating the program.
    } else this.#maxCapacity = num;
  }

  set addPlane(plane) {
    if (
      plane instanceof Plane &&
      this.atAirport(plane) === false &&
      !this.isFull() &&
      Weather.isStormy() === false
    ) {
      this.landedPlanes.push(plane);
    } else if (!(plane instanceof Plane)) {
      console.log("Only planes can be added to the airport"); // Originally not included in unit tests as I did not know how to test an error being thrown without cluttering the console output  // Now a console.log for same reasons as above
    } else if (this.atAirport(plane) === true) {
      console.log("Plane is already at the airport");
    } else if (this.isFull() === true) {
      console.log("Airport is full"); // added during development to show what happens if airport is full.
    } else {
      console.log("Plane cannot land due to stormy weather");
    }
  }

  set removePlane(id) {
    const index = this.landedPlanes.findIndex((plane) => plane.getId === id);
    if (Weather.isStormy() === true) {
      console.log("Plane cannot take off due to stormy weather");
    } else if (index !== -1) {
      this.landedPlanes.splice(index, 1);
    } else console.log("Plane not found");
  }

  atAirport(plane) {
    if (this.landedPlanes.includes(plane)) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (this.landedPlanes.length >= this.#maxCapacity) {
      return true;
    } else {
      return false;
    }
  }
}

export default Airport;
