var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightNo) {
        this.fisrtName = firstName;
        this.lastname = lastName;
        this.flightNo = flightNo;
    }
    Passenger.prototype.display = function () {
        console.log("Welcome to You!!");
        console.log(this.fisrtName + " " + this.lastname + " " + this.flightNo);
    };
    return Passenger;
}());
var passenger = new Passenger("Sachin", "Tendulkar", 100);
passenger.display();
console.log(passenger.fisrtName + " " + passenger.lastname + " " + passenger.flightNo);
var passenger2 = new Passenger("Deepika", "Padukone", 404);
passenger2.display();
console.log(passenger2.fisrtName + " " + passenger2.lastname + " " + passenger2.flightNo);
/* for(let item in passenger){
     if(item !== "display"){
         console.log(item);
         console.log(passenger[item]);
     }
 }   */
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
