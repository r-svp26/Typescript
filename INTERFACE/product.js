var product1 = {
    id: 123,
    name: "IPhone",
    description: "Its Awesome",
    price: 1000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
var product2 = {
    id: 101,
    name: "MI",
    description: "Good Looking with awesome features",
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log(product1);
console.log(product2);
