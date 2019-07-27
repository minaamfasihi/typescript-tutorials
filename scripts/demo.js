console.log('Hello world');
console.log('Hey there');
console.log('Changes');
var emp = ["Chandler", "Bing", "Male"];
var fname = emp[0], lname = emp[1], gender = emp[2]; // fname: Chandler etc.
// similarly: let [, , gender] will only hold the gender
// using rest operator: let [fname, ...elements] = emp // fname = "Chandler", elements = ["Bing", "Male"]
console.log(fname);
console.log(lname);
console.log(gender);
var newEmp = ["Chandler", "Bing"];
// let [firstName, lastName, g] = newEmp // gender will be undefined
var boy = {
    firstName: "Marcelo",
    lastName: "Viera",
    g: "male"
};
// let { fname, lname, gender } = boy // to destructure an object, you need curly braces
// let { fname: f, lname: l, gender: g } // now you can only use f, l and g.
//# sourceMappingURL=demo.js.map