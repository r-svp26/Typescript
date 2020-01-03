interface StudentName{
    [index:number]:string;
}

var studentName:StudentName = ["Rama","Shyama"];
console.log(studentName);


interface StudentScore{
    [index:string]:number;
}

var studentScore:StudentScore ={};

studentScore["John"]=100;
studentScore["Rama"]=90;

for(var item in studentScore){
    console.log(studentScore[item]);
}