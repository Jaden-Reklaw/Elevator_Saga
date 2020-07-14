{
    init: function(elevators, floors) {
        /*
            floors is an array of objects
            object attributes include: buttonStates{up, down}, elevatorAvailable(), floorNum()
            getSpawnPosY(), level, off(), on(), one(), pressDownButton(), pressUpButton(), trigger(), yPosition()

            elevators is an array of objects
            object attributes include: checkDestinationQueue(), currentFloor(), destinationDirection(), destinationQueue(),
            getFirstPressedFloor(), getPressedFloors(), goToFloor(), goingDownIndicator(), goingUpIndicator(), loadFactor(), maxPassengerCount(),
            off(), on() one(), stop(), trigger()
        */
        console.log('floors',floors);
        console.log('elevators', elevators);
        //Get the individual elavators ready to move
        elevators.forEach(elevator => {
            //Find if floor button is pressed then go there
            floors.forEach(floor => {
                floor.on("up_button_pressed" || "down_button_pressed", function(floorNum) {
                    // Maybe tell an elevator to go to this floor?
                    console.log('person waiting at floor', floorNum.level);
                    elevator.goToFloor(floorNum.level);
                    elevator.on("floor_button_pressed", function(floorNum) {
                        console.log('going to floor', floorNum);
                        elevator.goToFloor(floorNum);
                    });
                });
            });
            
            // Whenever the elevator is idle go to the middle floor
            elevator.on("idle", function() {
                elevator.goToFloor(floors.length/2);
            });            
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}