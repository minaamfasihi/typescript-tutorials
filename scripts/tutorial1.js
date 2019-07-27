function greetPerson(name) {
    if (name == "Chandler") {
        var greet = "Hello Chandler";
        var a = 1;
    }
    else {
        var greet = "Hi there";
        var a = 2;
    }
    console.log(greet);
    // console.log(a) // error
}
greetPerson("Chandle");
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
employee.greet();
var colors = ['red', 'green'];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
console.log("Person is a : ", typeof Person);
//# sourceMappingURL=tutorial1.js.map