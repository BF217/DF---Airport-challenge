class Plane {
    constructor() {
        Plane.lastId++;
        this.id = Plane.lastId;
    }
    get getId() {
        return this.id;
    }
}
Plane.lastId = 0;
export default Plane;
