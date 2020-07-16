{
    init: function(elevators, floors) {
        elevators.forEach((elevator, index) => {
            //Find if button is pressed on a floor
            floors.forEach(floor => {
                floor.on("up_button_pressed" || "down_button_pressed", function(floorNum) {
                    //if elevator is idle send them to a floor where the button is pressed
                    elevator.on("idle", function() {
                        if(index === 0){
                            elevator.goToFloor(floorNum.level);
                        } else if(index === 1) {
                            elevator.goToFloor(floorNum.level);
                        } else if(index === 2) {
                            elevator.goToFloor(floorNum.level);
                        } else if(index === 3) {
                            elevator.goToFloor(floorNum.level);
                        } 
                    });
                    
                    elevator.on("floor_button_pressed", function(floorNum) {
                        console.log('going to floor', floorNum);
                        elevator.goToFloor(floorNum);
                    });
                });
            });               
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}