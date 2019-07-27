export function greet(message) {
    console.log(message);
};

export class GreetMessage {
    constructor() {
        console.log('constructor')
    }

    greet() {
        console.log('Greet function')
    }
};

