{
    init: function(elevators, floors) {

        elevators.forEach((elevator, index) => {
            //Find if the elevator is idle
            elevator.on("idle", function() {
                for(floor of floors) {
                    console.log('floor is', floor);
                    console.log('up is active', floor.buttonStates.up === 'activated', floor.level);
                    console.log('down is active', floor.buttonStates.down === 'activated', floor.level);
                    if(floor.buttonStates.up === 'activated' || floor.buttonStates.down === 'activated'){
                        elevator.goToFloor(floor.level);
                    }
                }
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                console.log('going to floor', floorNum);

                elevator.goToFloor(floorNum);
            });               
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}