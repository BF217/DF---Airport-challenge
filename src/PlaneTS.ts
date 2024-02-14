class Plane {
  static lastId: number = 0;
  private id: number;

  constructor() {
    Plane.lastId++;
    this.id = Plane.lastId;
  }

  get getId(): number {
    return this.id;
  }
}

export default Plane;
