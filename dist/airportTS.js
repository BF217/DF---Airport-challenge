import Plane from "./PlaneTS.js";
export class Airport {
    constructor() {
        this.maxCapacity = 10;
        this.landedPlanes = [];
    }
    get getMaxCapacity() {
        return this.maxCapacity;
    }
    set setMaxCapacity(num) {
        if (num === null || num < this.landedPlanes.length) {
            return;
        }
        this.maxCapacity = num;
    }
    set addPlane(plane) {
        if (plane instanceof Plane && this.atAirport(plane) === false) {
            this.landedPlanes.push(plane);
        }
        else {
            // console.log("Only planes can land in the landedPlanes");
            return;
        }
    }
    set removePlane(id) {
        const index = this.landedPlanes.findIndex((plane) => plane.getId === id);
        if (index !== -1) {
            this.landedPlanes.splice(index, 1);
        }
        else
            throw new Error("Plane not found");
    }
    atAirport(plane) {
        if (this.landedPlanes.includes(plane)) {
            return true;
        }
        else {
            return false;
        }
    }
    isFull() {
        if (this.landedPlanes.length >= this.maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default Airport;
