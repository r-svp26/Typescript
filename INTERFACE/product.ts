interface Product{
    id:number;
    name:string;
    description:string;
    price?:number;
    display():void;
}

var product1:Product={
    id:123,
    name:"IPhone",
    description:"Its Awesome",
    price:1000,
    display():void{
        console.log(this.id+" "+this.name);
    }
}

var product2:Product={
    id:101,
    name:"MI",
    description:"Good Looking with awesome features",
    display():void{
        console.log(this.id+" "+this.name);
    }
}

console.log(product1);
console.log(product2);