# Domain Models and Test Plan

-Kanban board used to track progress : https://trello.com/invite/b/EFWyuwHK/ATTIf620fc7c8c19211f0b2e601520c91a5859461FB9/airport-challenge

# User story 1

As an airport admin, I would like a representation of the airport in software that defines the maximum capacity for planes, so that I can manage airport capacity effectively.

# Domain Model

| Object  | Properties            | Messages         | Output  |
| ------- | --------------------- | ---------------- | ------- |
| Airport | airport@Array<@plane> |                  |         |
|         | maxCapacity @Number   | getMaxCapacity() | @Number |

# Test cases

1. getMaxCapacity() should return the actual value assigned to maxCapacity.
2. maxCapacity should not be able to be changed directly without using the getter method.
3. maxCapacity should not be able to be assigned as null.

# User story 2

As an Airport Admin, I would like the ability to override the maximum capacity of planes, so that I can adjust to changes in demand.

# Domain Model

| Object  | Properties          | Messages             | Output |
| ------- | ------------------- | -------------------- | ------ |
| Airport | maxCapacity @Number | setCapacity(@Number) | @void  |

# Test Cases

1. SetCapacity() should be able to override the value of maxCapacity.
2. setCapacity() should not be able to assign maxCapacity as null.

# User story 3

As an Air Traffic Controller, I would like to instruct a plane to land at the airport, so that I can manage traffic effectively.

# Domain Model

| Object  | Properties            | Messages         | Output |
| ------- | --------------------- | ---------------- | ------ |
| Airport | airport@Array<@Plane> | addPlane(@Plane) | @void  |
| Plane   |                       |                  |        |

# Test Cases

1. addPlane() should add a plane object to the array.
2. addPlane() should not accept any other data types than a plane object into the array.

# User Story 4

As an Air Traffic Controller, I would like to check if a plane is already at the airport before I instruct it to land, so that I can avoid communication errors.

# Domain Model

| Object  | Properties            | Messages         | Output   |
| ------- | --------------------- | ---------------- | -------- |
| Airport | airport@Array<@Plane> | addPlane(@Plane) | @void    |
|         |                       | -atAirport()     | @Boolean |

# Test Cases

1. atAirport should only return true if plane is present inside of airport array.
2. addPlane should not work if isAtAirport = true.

# User Story 5

As an Air Traffic Controller, I would like to be able to instruct a plane to take off, so that I can manage air traffic.

# Domain Model

| Object  | Properties                 | Messages      | Output  |
| ------- | -------------------------- | ------------- | ------- |
| Airport | landedPlanes@Array<@Plane> | removePlane() | @void   |
| Plane   | id @Number                 | getId()       | @Number |

# Test Cases

1. removePlane should remove an entry from the array.
2. after removePlane is called, atAirport should return false.

# User Story 6

As an Air Traffic Controller, I would like to know if the airport is full before I instruct a plane to land, so that I can manage traffic safely.

# Domain Model

| Object  | Properties                 | Messages   | Output   |
| ------- | -------------------------- | ---------- | -------- |
| Airport | landedPlanes@Array<@Plane> | isFull()   | @Boolean |
|         |                            | addPlane() | @void    |

# Test Cases

1. isFull() should only return true if maxCapacity is the same number as the amount of entries in the array.
2. check if isFull() returns true if an error occurs and the amount of objects in the array exceeds the number defined by maxCapacity.

# User Story 7

As an Air Traffic Controller, I would like to check if a plane is at the airport before I instruct it to take off, to avoid communication errors.

# Domain Model

| Object  | Properties                 | Messages               | Output   |
| ------- | -------------------------- | ---------------------- | -------- |
| Airport | landedPlanes@Array<@Plane> | removePlane(@plane.id) | @void    |
|         |                            | atAirport()            | @Boolean |
| Plane   | id @Number                 | getId()                | @Number  |

# Test Cases

1. removePlane() should only work if plane is inside the array, so check if the amount of entries in the array reduces.
2. removePlane() should throw an error if plane id does not match any entries.
3. atAirport should return false after plane has been removed.

# Additional Requirements - With help from generative A.I.

# User Story 8

As an Air Traffic Controller, I must not be able to instruct planed to land if the weather is stormy, for health and safety reasons.

# Domain Model

| Object  | Properties | Messages          | Output   |
| ------- | ---------- | ----------------- | -------- |
| Weather |            | static isStormy() | @Boolean |
| Airport |            | addPlane()        | @Void    |

AI:

- Asked "should checking the weather belong to the Airport class or Plane class adhering to SOLID principles"

GPT Answer summarised:

1. Create an abstract weatherService class with isStormy as a boolean to follow Dependency Inversion principle;
2. implement it inside of Airport class constructor so that airport doesn't depend on the concrete class.
3. Add weather checks to addPlane().

Comments:
-By following AI, I feel this took longer than necessary, as in the end I made isStormy() a static method instead of creating an object and instantiating it within my airport class constructor. Also couldn't get tests to pass following the AI method.

# Test Cases

1. addPlane() should not work if weather is stormy.
2. AI: addPlane() should not remove a plane from the landedPlanes array if weather changes to stormy after plan is added.
3. AI: addPlane() should not affect any planes inside the array if weather is stormy.

# User Story 9

As an Air Traffic Controller, I must not be able to instruct planes to takeoff if the weather is stormy, for health and safety reasons.

# Domain Model

| Object  | Properties | Messages          | Output   |
| ------- | ---------- | ----------------- | -------- |
| Weather |            | static isStormy() | @Boolean |
| Airport |            | removePlane()     | @void    |

# Test Cases

1. removePlane() should not work if Weather.isStormy() returns true.
2. AI: if removePlane() is called while the weather is stormy, then called again on the same plane when it is not, the plane should be removed.
