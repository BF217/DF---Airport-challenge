export class Plane {
  #id;
  static lastId = 0;

  constructor() {
    Plane.lastId++;
    this.#id = Plane.lastId;
  }

  get getId() {
    return this.#id;
  }
}

export default Plane;
