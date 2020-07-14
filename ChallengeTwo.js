{
    init: function(elevators, floors) {
        console.log('floors',floors);
        console.log('elevators', elevators);
        var elevator = elevators[0]; // Let's use the first elevator
        
        elevator.on("floor_button_pressed", function(floorNum) {
            console.log('going to floor', floorNum);
            elevator.goToFloor(floorNum);
        } );
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            for(let index = 0;index < floors.length; index++ ) {
                elevator.goToFloor(index);
            }
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}