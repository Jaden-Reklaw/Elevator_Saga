# Factors that would dictate movement of the elevators

/*
    floors is an array of objects
    object attributes include: buttonStates{up, down}, elevatorAvailable(), floorNum()
    getSpawnPosY(), level, off(), on(), one(), pressDownButton(), pressUpButton(), trigger(), yPosition()

    elevators is an array of objects
    object attributes include: checkDestinationQueue(), currentFloor(), destinationDirection(), destinationQueue(),
    getFirstPressedFloor(), getPressedFloors(), goToFloor(), goingDownIndicator(), goingUpIndicator(), loadFactor(), maxPassengerCount(),
    off(), on() one(), stop(), trigger()
*/

- is the elevator empty(yes/no) if yes go to closest persons
- how do you find the closest elevator to that person
- are there more people on the elevator going down or up
- if there are more people going up organize the array into the ascending or descending order and go to each one of the stops