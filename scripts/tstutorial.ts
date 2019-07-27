var x = 10;
var y = "hi"
var z = true

// below is also known as annotation
var a: number = 10; // equivalent to var a = 10;
var b: string; // value of b is string always

// a = "wer"; // error
var n2 = n1 + "10"; // string
// better to use type annotations than type inference
var info: any; // means that info can be ANY type.
info = 10; // ok
info = "str"; // ok
info = true; // ok

var information; // also of type any

enum EyeColor { Brown = 1, Black, Blue };
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor); // 1
console.log(EyeColor[myEyeColor]); // Brown

// arrays
let strArr1: string[] = ['Hello', 'world'];
let strArr2: Array<string> = ['hello', 'world']
let anyArr: any[] = ['there', 10, true]

// tuples are arrays that contain predefined type(s).

let myTuple: [string, number] = ["hi", 10]
console.log(myTuple[0]) // Hi
console.log(myTuple[1]) // 10

class tsPerson {
    public fname: string;
    public lname: string;

    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
};

// below declaration is equivalent to above declaration of class and ctor.
class Person1 {
    constructor(public fname: string, public lname: string) {

    }
}

// Type information is erased from a TS program when we compile it, we dont worry about the runtime overhead we're going to add 
// by using interfaces.

// Interfaces

interface Person {
    fname: string;
    lname: string;
    age?: number; // ? means that it is nullable. otherwise, one would have to ALWAYS provide a value for it.
}

// all the interface elements must be present in the object that is implementing it
let emp1: Person = {
    fname: "Chandler",
    lname: "Bing",
    age: 10
}

let emp2: Person = {
    fname: "Ross",
    lname: "Geller"
}

// Decorator: special declaration attached to classes, methods or properties.
// decorators evaluate to a function that will be called at run-time.

// @Component({
//     selector: 'my-app', // my-app is an element like div, span
//     template: '<h1>Munnu Mani</h1>'
// })
// export class AppComponent {

// }

