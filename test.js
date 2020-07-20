{
    init: function(elevators, floors) {
        let queFloors = () => {
            floors.forEach(floor => {
                floor.on("up_button_pressed"  || "down_button_pressed", function() {
                    var elevator = elevators[0];
                    
                    if(floor.buttonStates.up === 'activated' && (elevator.loadFactor() === 0.0)){
                        console.log('going up to floor level', floor.level);
                        elevator.goToFloor(floor.level, true);
                        elevator.on("floor_button_pressed", function(floorNum) {
                            console.log('going to floor', floorNum);
                            elevator.goToFloor(floorNum);
                        }); 
                    } else if(floor.buttonStates.down === 'activated' && (elevator.loadFactor() === 0.0)) {
                        console.log('going down to floor level', floor.level);
                        elevator.goToFloor(floor.level, true);
                        elevator.on("floor_button_pressed", function(floorNum) {
                            console.log('going to floor', floorNum);
                            elevator.goToFloor(floorNum);
                        }); 
                    } else {
                        elevator.goToFloor(0, true);
                        elevator.on("floor_button_pressed", function(floorNum) {
                            console.log('going to floor', floorNum);
                            elevator.goToFloor(floorNum);
                        });
                    }
                }); 
            });
        }
        
        elevators.forEach((elevator, index) => {
            //Find if the elevator is idle
            elevator.on("idle", function() {
                queFloors();
            });          
        });
        
    },
        update: function(dt, elevators, floors) {
        }
}