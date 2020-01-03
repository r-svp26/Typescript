class Passenger{
    fisrtName:string;
    lastname:string;
    flightNo:number;

    constructor(firstName:string,lastName:string,flightNo:number){
        this.fisrtName=firstName;
        this.lastname=lastName;
        this.flightNo=flightNo;

    }

    display(){
        console.log("Welcome to You!!");
        console.log(this.fisrtName+" "+this.lastname+" "+this.flightNo);
        
    }
    
}
    var passenger=new Passenger("Sachin","Tendulkar",100);
    passenger.display();
    console.log(passenger.fisrtName+" "+passenger.lastname+" "+passenger.flightNo);

    var passenger2=new Passenger("Deepika","Padukone",404);
    passenger2.display();
    console.log(passenger2.fisrtName+" "+passenger2.lastname+" "+passenger2.flightNo);

   /* for(let item in passenger){
        if(item !== "display"){
            console.log(item);
            console.log(passenger[item]);
        }
    }   */


    for(let item in passenger){
        if(passenger[item] instanceof Function){
            continue;
        }else{
            console.log(item);
            console.log(passenger[item]);
        }
    }
