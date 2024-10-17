export function Employee(name, age){
        this.name = name;
        this.age = age;
        this.print = function(){
            console.log(`name: ${this.name}, age: ${this.age}`);
        }
}

export let maxAge = 100;

export class Book{
    title;
    author;
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}