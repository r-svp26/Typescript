var studentName = ["Rama", "Shyama"];
console.log(studentName);
var studentScore = {};
studentScore["John"] = 100;
studentScore["Rama"] = 90;
for (var item in studentScore) {
    console.log(studentScore[item]);
}
