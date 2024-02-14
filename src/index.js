import { Airport } from "./airport.js";
import { Plane } from "./Plane.js";
import { Weather } from "./Weather.js";

Weather.setStormy(false);

const airport = new Airport();

const BritishAirways = new Plane();
const RyanAir = new Plane();
const EasyJet = new Plane();
const AirFrance = new Plane();
const FlyEmirates = new Plane();

airport.addPlane = RyanAir;
airport.addPlane = EasyJet;
airport.addPlane = AirFrance;

const bird = "pidgeon";

console.log("Airport management system \n--------------------------");
console.log(`Airport max capacity: ${airport.getMaxCapacity}`);
console.log(`Number of planes at airport: ${airport.landedPlanes.length}`);
console.log(`--------------------------`);
console.log(`Override max capacity to ${(airport.setMaxCapacity = 5)}`);
console.log(`Airport max capacity: ${airport.getMaxCapacity}`);
console.log(`--------------------------`);

console.log(`British Airways inbound to terminal 1`);
console.log(`is Airport full? ${airport.isFull()}`);
console.log(
  `is the plane already at the airport: ${airport.atAirport(BritishAirways)}`
);
console.log(`landing plane...`);
airport.addPlane = BritishAirways;
console.log(`--------------------------`);

console.log(`Number of planes at airport: ${airport.landedPlanes.length}`);
console.log(`--------------------------`);

console.log(`RyanAir outbound from terminal 2`);
console.log(`is the plane at the airport: ${airport.atAirport(RyanAir)}`);
console.log(`taking off...`);
airport.removePlane = RyanAir.getId;
console.log(`--------------------------`);

console.log(`Number of planes at airport: ${airport.landedPlanes.length}`);
console.log(`--------------------------`);

console.log(`set max capacity to 2`);
airport.setMaxCapacity = 2;
console.log(`Airport max capacity: ${airport.getMaxCapacity}`);
console.log(`--------------------------`);

console.log(`EasyJet inbound to terminal 3`);
console.log(`is Airport full? ${airport.isFull()}`);
console.log(
  `is the plane already at the airport: ${airport.atAirport(EasyJet)}`
);
airport.addPlane = EasyJet;
console.log(`landing cancelled.`);
console.log(`--------------------------`);

console.log(`Bird inbound to terminal 3`);
console.log(`is Airport full? ${airport.isFull()}`);
airport.addPlane = bird;
console.log(`landing cancelled.`);
console.log(`--------------------------`);

console.log(`FlyEmirates outbound from terminal 4`);
console.log(`is the plane at the airport: ${airport.atAirport(FlyEmirates)}`);
airport.removePlane = FlyEmirates.getId;
console.log(`takeoff cancelled.`);
console.log(`--------------------------`);

console.log(`set max capacity to ${(airport.setMaxCapacity = 3)}`);
console.log(`Airport max capacity: ${airport.getMaxCapacity}`);
console.log(`--------------------------`);

console.log(`FlyEmirates inbound to terminal 3`);
console.log(`is Airport full? ${airport.isFull()}`);
airport.addPlane = FlyEmirates;
console.log(`landing cancelled.`);
console.log(`--------------------------`);

console.log(`set max capacity to ${(airport.setMaxCapacity = 5)}`);
console.log(`Airport max capacity: ${airport.getMaxCapacity}`);
console.log(`--------------------------`);

Weather.setStormy(true);
console.log(`FlyEmirates inbound to terminal 3`);
console.log(`is Airport full? ${airport.isFull()}`);
console.log(
  `is the plane already at the airport: ${airport.atAirport(FlyEmirates)}`
);
airport.addPlane = FlyEmirates;
console.log(`landing cancelled.`);
console.log(`--------------------------`);

console.log(`EasyJet outbound from terminal 3`);
console.log(`is the plane at the airport: ${airport.atAirport(EasyJet)}`);
airport.removePlane = EasyJet.getId;
console.log(`takeoff cancelled.`);
console.log(`--------------------------`);
