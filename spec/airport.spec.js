import { Airport } from "../src/airport.js";
import { Plane } from "../src/Plane.js";
import { Weather } from "../src/Weather.js";

// User story 1

xdescribe("airport maxCapacity checks", () => {
  // xdescribe used to skip tests that are no longer necessary due to changes in code
  let testAirport;
  let testPlane;
  let testPlane2;

  beforeEach(() => {
    testAirport = new Airport();
    testPlane = new Plane();
    testPlane2 = new Plane();
  });

  it("should return the correct value of maxCapacity", () => {
    expect(testAirport.getMaxCapacity).toEqual(10);
  });

  it("maxCapacity should not be able to be directly changed without get method", () => {
    testAirport.maxCapacity = 20;
    expect(testAirport.getMaxCapacity).toEqual(10);
  });

  it("maxCapacity should not be null", () => {
    expect(testAirport.getMaxCapacity).not.toBeNull();
  });

  // User story 2

  it("setCapacity() should be able to override the default maxCapacity", () => {
    testAirport.setMaxCapacity = 20;
    expect(testAirport.getMaxCapacity).toEqual(20);
  });

  it("setCapacity should not be able to be assigned as null", () => {
    testAirport.setMaxCapacity = null;
    expect(testAirport.getMaxCapacity).toEqual(10);
  });

  it("setMaxCapacity should not be able to assign a value less than the amount of planes in the array", () => {
    testAirport.addPlane = testPlane;
    testAirport.addPlane = testPlane2;
    testAirport.setMaxCapacity = 1;
    expect(testAirport.getMaxCapacity).toEqual(10);
  });
});

// User story 3

xdescribe("airport takeoff/landing checks", () => {
  let testAirport;
  let testPlane;
  let testPlane2;

  beforeEach(() => {
    testAirport = new Airport();
    testPlane = new Plane();
    testPlane2 = new Plane();
  });

  it("addPlane should add a plane to the airport array", () => {
    testAirport.addPlane = testPlane;
    expect(testAirport.landedPlanes).toContain(testPlane);
  });

  it("addPlane should not accept any other data types other than Plane", () => {
    testAirport.addPlane = 10;
    expect(testAirport.landedPlanes).not.toContain(10);
  });

  // User story 4

  it("AtAirport should return true if the plane is in the airport array", () => {
    testAirport.addPlane = testPlane;
    expect(testAirport.atAirport(testPlane)).toEqual(true);
  });

  it("AddPlane should not add a plane is atAirport returns true", () => {
    testAirport.addPlane = testPlane;
    testAirport.addPlane = testPlane;
    expect(testAirport.landedPlanes).toEqual([testPlane]);
  });

  // User story 5

  it("removePlane should remove a plane from the airport array", () => {
    testAirport.addPlane = testPlane;
    testAirport.removePlane = testPlane.getId;
    expect(testAirport.landedPlanes).not.toContain(testPlane);
  });

  it("atAirport should return false after removePlane is called", () => {
    testAirport.addPlane = testPlane;
    testAirport.removePlane = testPlane.getId;
    expect(testAirport.atAirport(testPlane)).toEqual(false);
  });

  // User story 6

  it("isFull() should only return true if maxCapacity is the same number as the amount of entries in the array.", () => {
    testAirport.setMaxCapacity = 1;
    testAirport.addPlane = testPlane;
    expect(testAirport.isFull()).toEqual(true);
  });

  xit("isFull() should return true if the amount of entries in the array exceeds the maxCapacity", () => {
    // test no longer necessary as setMaxCapacity will not allow a value less than the amount of planes in the array anymore.
    testAirport.addPlane = testPlane;
    testAirport.addPlane = testPlane2;
    testAirport.setMaxCapacity = 1;
    expect(testAirport.isFull()).toEqual(true);
  });

  //User story 7

  xit("landedPlanes array should not reduce in size after removePlane() is called on a plane that isn't there", () => {
    // test no longer necessary as removePlane will throw an error if the plane is not found.
    testAirport.addPlane = testPlane;
    testAirport.removePlane = testPlane2.getId;
    expect(testAirport.landedPlanes.length).toEqual(1);
  });

  it("removePlane() should throw an error if plane.id does not match any of the planes in the array", () => {
    testAirport.addPlane = testPlane;
    expect(() => {
      testAirport.removePlane = 2;
    }).toThrow();
  });

  it("atAirport() should return false on plane after removePlane() is called", () => {
    testAirport.addPlane = testPlane;
    testAirport.removePlane = testPlane.getId;
    expect(testAirport.atAirport(testPlane)).toEqual(false);
  });
});

describe("Weather checks", () => {
  let testAirport;
  let testPlane;
  let testPlane2;

  beforeEach(() => {
    testAirport = new Airport();
    testPlane = new Plane();
    testPlane2 = new Plane();
  });

  // User story 8

  it("addPlane should not add a plane if the weather is stormy", () => {
    spyOn(Weather, "isStormy").and.returnValue(true); // suggested by AI to use spyOn to test random weather
    testAirport.addPlane = testPlane;
    expect(testAirport.landedPlanes).not.toContain(testPlane);
  });

  it("addPlane() should not remove a plane from the landedPlanes array if weather changes to stormy after plan is added", () => {
    spyOn(Weather, "isStormy").and.returnValue(false);
    testAirport.addPlane = testPlane;
    Weather.isStormy.and.returnValue(true);
    expect(testAirport.landedPlanes).toContain(testPlane);
  });

  it("addPlane() should not affect any planes inside the array if weather is stormy", () => {
    spyOn(Weather, "isStormy").and.returnValue(false);
    testAirport.addPlane = testPlane;
    testAirport.addPlane = testPlane2;
    Weather.isStormy.and.returnValue(true);
    expect(testAirport.landedPlanes.length).toEqual(2);
  });

  // User story 9

  it("removePlane() should not remove a plane from the landedPlanes array if weather is stormy", () => {
    spyOn(Weather, "isStormy").and.returnValue(false);
    testAirport.addPlane = testPlane;
    Weather.isStormy.and.returnValue(true);
    testAirport.removePlane = testPlane.getId;
    expect(testAirport.landedPlanes).toContain(testPlane);
  });

  it("if removePlane() is called while the weather is stormy, then called again on the same plane when it is not, the plane should be removed.", () => {
    spyOn(Weather, "isStormy").and.returnValue(true);
    testAirport.addPlane = testPlane;
    Weather.isStormy.and.returnValue(false);
    testAirport.removePlane = testPlane.getId;
    expect(testAirport.landedPlanes).not.toContain(testPlane);
  });
});
