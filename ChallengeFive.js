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

        elevators.forEach((elevator, index) => {
            //Find if button is pressed
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

            //Split the four elevators E1 = 0, E2 = 2, E3 = 3, E4 = 5
            elevator.on("idle", function() {
                if(index === 0){
                    elevator.goToFloor(0);
                } else if(index === 1) {
                    elevator.goToFloor(2);
                } else if(index === 2) {
                    elevator.goToFloor(3);
                } else if(index === 3) {
                    elevator.goToFloor(5);
                }
                
            });            
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}