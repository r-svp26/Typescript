function greet(name:string):string {
 return "Hello "+name;
}

function add(num1:number,num2:number):number{
    return num1+num2;
}

/*function display(id:number,name:string,role:string="Normal"){
    console.log("Id: ",id);
    console.log("Name: ",name);
   // if(role!=undefined){
        console.log("Role: ",role);
   // }
}  */



function calculator(func:any):any{
    func(10,20);
}

//console.log(greet("Ritesh"));
//console.log("Sum is: "+add(10,20));
//console.log(1,"Khusi Yadav","Admin");

console.log(add);