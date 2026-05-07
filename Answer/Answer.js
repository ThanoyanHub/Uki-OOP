//Q-01

class Vehicle{

    constructor(brand){
        this.brand = brand ;
    }

    describe(){
        console.log(`I am a ${this.brand}`);
        return this;
    }
}

class car extends Vehicle{
    describe(){
        console.log(`I am a ${this.brand}`);
        return this;
    }
}

let V1 = new Vehicle("BMW");
V1.describe();

let car1 = new car ("M4 Competition")
car1.describe();

//Q-02

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Student extends Person {
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }
}

let Person1 = new Student("Thanoyan",20,"A/L")
consol.log(Student.name.age.grade);

//Q-03

class Animal {
    eat(){
        console.log("eating...");
        return this;
    }
}

class Dog extends Animal {
    bark(){
        console.log("woof!");
        return this;
    }
}

let dog = new Dog();
dog.eat().bark();

//Q-04

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;

    }

    details(){
        return this;
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;

    }

    details(){
        return this;
    }
}

let Manager1 = new Manager("Vithu", 500000 ,"SE");

console.log(Manager1);

//Q-05

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  describe() {
    return `This is a ${this.color} triangle.`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, length) {
    super(color);
    this.width = width;
    this.length = length;
  }

  describe() {
    return `This is a ${this.color} rectangle.`;
  }
}

// Q-06

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interestAmount = this.balance * (this.interestRate / 100);
    this.balance += interestAmount;
  }
}


const myAccount = new SavingsAccount("Thano", 1000, 5);

console.log(`Owner: ${myAccount.owner}`);
console.log(`Balance before interest: $${myAccount.balance}`);

myAccount.applyInterest();

console.log(`Balance after interest: $${myAccount.balance}`);


// Q-07

class Animal {
  sound() {
    return "...";
  }
}

class Cat extends Animal {
  sound() {
    return "Meow";
  }
}

class Cow extends Animal {
  sound() {
    return "Mmaww";
  }
}

const animalSSound = [new Cat(), new Cow(), new Cat()];

animalSSound.forEach((animal) => {
  console.log(`The animal says: ${animal.sound()}`);
});

// Q-08
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const myCircle = new Circle(5);
const myRectangle = new Rectangle(10, 4);

console.log(`Circle Area: ${myCircle.area().toFixed(2)}`); 

console.log(`Rectangle Area: ${myRectangle.area()}`); 

// Q-09

class Employee {
  pay() {
    return "base pay";
  }
}

class FullTime extends Employee {
  constructor(salary) {
    super();
    this.salary = salary;
  }

  pay() {
    return this.salary;
  }
}

class PartTime extends Employee {
  constructor(hoursWorked, hourlyRate) {
    super();
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  pay() {
    return this.hoursWorked * this.hourlyRate;
  }
}


const staff = [
  new FullTime(5000),           
  new PartTime(20, 25),         
  new PartTime(15, 30)         
];

staff.forEach((emp, index) => {
  console.log(`Employee ${index + 1} payment: $${emp.pay()}`);
});



