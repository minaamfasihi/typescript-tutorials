function greetPerson(name) {
    if (name == "Chandler") {
        var greet = "Hello Chandler"
        let a = 1
    } else {
        var greet = "Hi there"
        let a = 2
    }
    console.log(greet)
    // console.log(a) // error
}

greetPerson("Chandle");

var employee = {
    id: 1,
    greet: function() {
        setTimeout(() => {
            console.log(this.id)
        }, 1000)
    }
}

employee.greet();

let colors = ['red', 'green']
for (let color of colors) {
    console.log(color);
    
}

class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name + " Ctor")
    }

    greet() {

    }

    static staticMethod() {
        console.log("Static method");
    }

    getId() {
        return 10;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name)
    }

    getId() {
        // return 50; // 50 when called from child
        return super.getId(); // 10 when called from child
    }
}

let p = new Person("Chandler");
console.log("Person is a : ", typeof Person);
console.log(p.greet === Person.prototype.greet); // true. greet is just a function on the prototype of Person
console.log(Person.staticMethod());
let e = new Employee();
console.log(e.getId());

//Sets in JS
let mySet = Object.create(null)
mySet.id = true;
if (mySet.id) { // false if mySet.id = 0. got confusing whether we were checking if value exists or if it is non-zero
    console.log("id exists")
}

// ES6
let myMap = Object.create(null)
myMap.name = "Chandler"
let val = myMap.name
console.log(val)
myMap[100] = "hundred" // number 100 got co-erced into string
console.log(myMap["100"])

let ob1 = {};
let ob2 = {};
myMap[ob1] = "val ob1"
console.log(myMap[ob1]) // "val ob1"
console.log(myMap[ob2]) // "val ob1". why?
// because ob1.toString() and ob2.toString() both return "[object Object]" and thus they are the same string value.

let mySet = new Set();
mySet.add("1")
mySet.add(2)
mySet.add(2) // ignored
mySet.add(ob1)
mySet.add(ob2) // added because two objects are different, not converted to strings
console.log("set size: ", mySet.size)

let newSet = new Set([1, 2, 3, 4, 4, 3]);
let chainSet = new Set().add("hellow").add("world")
console.log("chainset size: ", chainSet.size)
console.log("newset has: ", newSet.has(1))
console.log(newSet.delete(4)) // if value is present, returns true, false otherwise.

// WeakSets
// Example
let myStrongSet = new Set();
let key = {};
myStrongSet.add(key);
console.log("strong set size: ", myStrongSet.size); // 1
key = null;
console.log("strong set size: ", myStrongSet.size); // 1. WHY? because myStrongSet still has the reference of empty object
// that key pointed to even though key is now null.
// key = [...myStrongSet][0]; // gets the old reference back which was an empty object

// To resolve above situation and to ensure garbage collection, we use weaksets.
// weaksets can only have reference types.
let wset = new WeakSet();
let wkey = {};
wset.add(wkey)
console.log("weak set has: ", wset.has(wkey))
wkey = null // now we cannot verify whether wset has this object or not but we must trust the JS engine. 
console.log("weak set size: ", wset.size)

// Map
let myMap = new Map();
myMap.set("fname", "Chandler");
myMap.set("age", 12);
console.log("map fname: ", myMap.get("fname"))
let mob1 = {};
let mob2 = {};
myMap.set(ob1, 10)
myMap.set(ob2, 20)
console.log("myMap mob1: ", myMap.get(ob1))
console.log(myMap.size)
console.log(myMap.has("fname")) // true
myMap.delete("fname")
console.log(myMap.has("fname")) // false
myMap.clear() // clears all the elements, size is 0

let arrMap = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);

for (let key of arrMap.keys()) {
    console.log("key:", key)
}

/* below code requires additional setup to run in typescript. 
 let myMap = new Map([
   ["fname", "Chandler"],
   ["lname", "Bing"]
 ]);

for (let value of myMap.values()) {
  console.log(value);
}

for (let key of myMap.keys()) {
  console.log(key)
}

// for (let [key, val] of myMap.entries()) // equivalent to code below
for (let entry of myMap.entries()) {
  console.log(`${entry[0]} -> ${entry[1]}`)
}
*/

var numbers = [2, 4, 6, 8]
numbers.forEach(arrayFunction);
function arrayFunction(element, index, array) {
    console.log("arr[" + index + "] = " + element)
}

let goodMap = new Map([["fname", "Chandler"], ["lname", "Bing"]])
goodMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key + " " + value)
}

// same as above works with sets

// WeakMaps
// Keys can only be objects and they are weak

let mwMap = new WeakMap(); // as such no practical use of weakmaps yet
let mwob1 = {};
mwMap.set(mwob1, "hello world")
console.log(mwMap.get(mwob1))
mwob1 = null // cant verify

let s = Symbol("first symbol");
console.log(typeof s) // symbol
console.log("Sym tostring: ", s.toString()) // Symbol("First Symbol")
let s2 = Symbol();
let s3 = Symbol();
console.log(s2 === s3) // false. symbol always creates a unique id.

// there is a built-in registry for symbols. when we use Symbol.for() then it checks whether a symbol with the same name
// exists in the registry or not. if it does, it returns a reference to that, otherwise creates a new symbol.
let s4 = Symbol.for('RegSymbol')
let s5 = Symbol.for('RegSymbol')
console.log("s4 and s5", s4 === s5)
console.log(Symbol.keyFor(s4))

let foo = Symbol()
// foo property is always going to be unique so we wont have to worry about duplicates
let personob = {
    [foo]: "Chandler"
};
console.log(Object.getOwnPropertyNames(personob)) // []. symbol wont show up
console.log(Object.getOwnPropertySymbols(personob)) // now Symbol will show up

// Symbol iterator
// for .. of loop can only work with objects that have a special method called the 'iterator' method
// how do we check? if the object has a method defined for the key: symbol.iterator

let str = "hello";
let arr = [1, 2, 3]
let num = 5;
let obj = { name: "Chandler" }
// we check if there is a method at the key [Symbol.iterator] on the objects. If they have a function at that key, then they
// can be used with for ... of loop.
console.log("For string: " + typeof str[Symbol.iterator])
console.log("For array: " + typeof arr[Symbol.iterator])
console.log("For num: " + typeof num[Symbol.iterator])
console.log("For obj: " + typeof obj[Symbol.iterator])

// Iterables and Iterators
// Iterable: an object that implements a method whose key is Symbol.iterator

/*
Iterable {
    [Symbol.Iterator]() : Iterator // returns an Iterator
} 

Iterator {
    next(): IResultObj // Iterator has a method called next() that returns object
}

IResultObj {
    value: any data type,
    done: bool // indicating whether it's the last element or not
}
*/

let iterable = [1, 2, 3]
function createIterator(array) {
    let count = 0;
    return {
        next: function() {
            return count < array.length ?
            { value: array[count++], done: false } :
            { value: undefined, done: true}
        }
    }
}

let myIterator = createIterator(iterable);
