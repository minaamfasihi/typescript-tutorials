// import { fname } from './moduleB.js'
console.log('Module A log 1') // module B loaded will be printed first because the module import is always hoisted
import { fname as f } from './moduleB.js' // import fname as alias 'f', now you can only use f and not fname
console.log('Module A log 2')
console.log("ModuleA: ", f);
// imports are read-only, but if you import an object, then its fields can be modified
// if you export something as default, then it can be imported in another module without using {}
// default exports can also be aliased like so: import { default as f } from './moduleB.js'
// in above, default keyword means the default export from moduleB.
// also, you can import default exports using any name like so: import firstName from './B.js' where in B.js, the default export
// name is 'fname'
import { greet, GreetMessage } from './moduleC.js';
greet("hello");

let gm = new GreetMessage();
console.log(gm.greet())