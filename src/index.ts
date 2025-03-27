// Basic type annotations
let message: string = "Hello, TypeScript!";
let number: number = 42;
let isTrue: boolean = true;

// Function with type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Interface example
interface User {
    name: string;
    age: number;
}

// Using the interface
const user: User = {
    name: "John",
    age: 30,
};

console.log(message);
console.log(`${number} + 8 = ${add(number, 8)}`);
console.log(`User: ${user.name}, ${user.age} years old`);

