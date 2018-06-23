function Car(options) {

    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck(options) {

    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function TruckFactory() {}

function VehicleFactory() {}
TruckFactory.prototype = new VehicleFactory();
VehicleFactory.prototype.createVehicle = function(options) {

    switch (options.vehicleType) {
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
            //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }

    return new this.vehicleClass(options);

};

TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
    state: "omg..so bad.",
    color: "pink",
    wheelSize: "so big"
});

// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log(myBigTruck instanceof Truck);

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log(myBigTruck);