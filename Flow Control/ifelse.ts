var x:number =10;
var y:number =20;
var z:number =30;

if(x>y && x>z){
console.log("X is greater than Y and Z");
}else if(y>x && y>z){
    console.log("Y is greater than X and Z");
}else if(z>x && z>y){
    console.log("Z is greater than X and Y");
}else{
    console.log("Numbers are equals");
}