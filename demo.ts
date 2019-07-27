console.log('Hello world');
console.log('Hey there');
console.log('Changes')

let emp = ["Chandler", "Bing", "Male"]
let [fname, lname, gender] = emp // fname: Chandler etc.
// similarly: let [, , gender] will only hold the gender
// using rest operator: let [fname, ...elements] = emp // fname = "Chandler", elements = ["Bing", "Male"]
console.log(fname);
console.log(lname);
console.log(gender);

let newEmp = ["Chandler", "Bing"]
// let [firstName, lastName, g] = newEmp // gender will be undefined

let boy = {
    firstName: "Marcelo",
    lastName: "Viera",
    g: "male"
}

// let { fname, lname, gender } = boy // to destructure an object, you need curly braces
// let { fname: f, lname: l, gender: g } // now you can only use f, l and g.
