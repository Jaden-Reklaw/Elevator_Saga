{
    init: function(elevators, floors) {

        //Loop through each elevator
        elevators.forEach((elevator, index) => {
            //Find if the elevator is idle
            elevator.on("idle", function() {
                //if the elevator is idle then loop through the floors 
                //to find out which buttons were pressed on each floor
                for(floor of floors) {
                    //Check if the up or down button is activated and that there are no people since
                    //it will loop through the floors
                    if(floor.buttonStates.up === 'activated' || floor.buttonStates.down === 'activated' && elevator.loadFactor() === 0){
                        //go to the floor that has a person waiting
                        elevator.goToFloor(floor.level);
                        //go to the floor that the person pressed in the elevator to go to
                        elevator.on("floor_button_pressed", function(floorNum) {
                            elevator.goToFloor(floorNum);
                        }); 
                    } 
                }
            });

            //What to do if the elevator is not idle
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);
            });               
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}