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

}

console.log("Person is a : ", typeof Person);
