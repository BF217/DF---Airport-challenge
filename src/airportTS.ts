import Plane from "./PlaneTS.js";

export class Airport {
  private landedPlanes: Plane[];
  private maxCapacity: number = 10;

  constructor() {
    this.landedPlanes = [];
  }

  get getMaxCapacity(): number {
    return this.maxCapacity;
  }

  set setMaxCapacity(num: number) {
    if (num === null || num < this.landedPlanes.length) {
      return;
    }
    this.maxCapacity = num;
  }

  set addPlane(plane: Plane) {
    if (plane instanceof Plane && this.atAirport(plane) === false) {
      this.landedPlanes.push(plane);
    } else {
      // console.log("Only planes can land in the landedPlanes");
      return;
    }
  }

  set removePlane(id: number) {
    const index = this.landedPlanes.findIndex((plane) => plane.getId === id);
    if (index !== -1) {
      this.landedPlanes.splice(index, 1);
    } else throw new Error("Plane not found");
  }

  atAirport(plane: Plane): boolean {
    if (this.landedPlanes.includes(plane)) {
      return true;
    } else {
      return false;
    }
  }

  isFull(): boolean {
    if (this.landedPlanes.length >= this.maxCapacity) {
      return true;
    } else {
      return false;
    }
  }
}

export default Airport;
