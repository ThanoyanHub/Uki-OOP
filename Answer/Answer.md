# OOP Exercises — Inheritance, Polymorphism, Encapsulation

---

## Inheritance

### Basic

**Q1.**
Create a class `Vehicle` with a property `brand` and a method `describe()` that returns `"I am a [brand]"`.
Create a child class `Car` that extends `Vehicle` and adds a property `doors`.
Create a `Car` object and call `describe()`.

```js
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

```

---

**Q2.**
Create a class `Person` with properties `name` and `age`.
Create a child class `Student` that extends `Person` and adds a property `grade`.
Print the student's name, age, and grade.

```js
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

```

---

**Q3.**
Create a class `Animal` with a method `eat()` that returns `"eating..."`.
Create a child class `Dog` that extends `Animal` and adds a method `bark()` that returns `"woof!"`.
Show that `Dog` can call both `eat()` and `bark()`.

```js
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



```

---

### Intermediate

**Q4.**
Create a class `Employee` with properties `name` and `salary` and a method `details()` that returns both.
Create a child class `Manager` that extends `Employee` and adds a property `department`.
Override `details()` in `Manager` to also include the department.

```js
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

```

---

**Q5.**
Create a class `Shape` with a property `color`.
Create two child classes `Triangle` and `Rectangle`, each with their own properties (e.g. `base`, `height` for Triangle).
Each child class should have a `describe()` method that returns the color and the shape name.

```js

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


```

---

**Q6.**
Create a class `BankAccount` with `owner` and `balance`.
Create a child class `SavingsAccount` that adds an `interestRate` property.
Add a method `applyInterest()` in `SavingsAccount` that increases balance by the interest rate percentage.
Print the balance before and after calling `applyInterest()`.

```js

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


```

---

---

## Polymorphism

### Basic

**Q7.**
Create a class `Animal` with a method `sound()` that returns `"..."`.
Create child classes `Cat` and `Cow`, each overriding `sound()` to return their own sound.
Store both in an array and loop through, calling `sound()` on each.

```js

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

```

---

**Q8.**
Create a class `Shape` with a method `area()` that returns `0`.
Create child classes `Circle` (uses radius) and `Rectangle` (uses width and height).
Each overrides `area()` with the correct formula.
Print the area of each shape.

```js

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

```
---

### Intermediate

**Q9.**
Create a class `Employee` with a method `pay()` that returns `"base pay"`.
Create child classes `FullTime` and `PartTime`.
- `FullTime.pay()` returns a fixed monthly salary.
- `PartTime.pay()` returns hours worked × hourly rate.

Store both in an array and call `pay()` on each.

```js

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

```

---

**Q10.**
Create a class `Notification` with a method `send()` that returns `"sending..."`.
Create child classes `EmailNotification`, `SMSNotification`, and `PushNotification`.
Each overrides `send()` to return a different message.
Loop through all three and call `send()`.

```js
```

---

---

## Encapsulation

### Basic

**Q11.**
Create a class `Person` with a private-style property `_password`.
Add a method `getPassword()` that returns `"Access Denied"` always.
Show that direct access to `_password` is possible but the method hides it.

```js
```

---

**Q12.**
Create a class `BankAccount` with a private-style property `_balance` set to `1000`.
Add methods `deposit(amount)` and `withdraw(amount)`.
`withdraw` should not allow balance to go below `0` — print a warning if tried.
Do not allow direct access to `_balance` from outside.

```js
```

---

**Q13.**
Create a class `Thermostat` with a private-style `_temperature`.
Add a getter `getTemperature()` and a setter `setTemperature(value)`.
The setter should only allow values between `15` and `30` — reject anything outside that range with a message.

```js
```

---

### Intermediate

**Q14.**
Create a class `Student` with private-style properties `_name` and `_marks`.
Add:
- `getName()` — returns name
- `getGrade()` — returns `"A"` if marks ≥ 80, `"B"` if ≥ 60, else `"C"`
- `setMarks(value)` — only accepts values between 0 and 100

Test with valid and invalid mark values.

---

**Q15.**
Create a class `UserAccount` with private-style properties `_username` and `_balance`.
Rules:
- `_balance` cannot go below `0`
- `_username` cannot be changed after set in constructor
- Add `deposit()`, `withdraw()`, and `getBalance()` methods

Create two accounts and simulate a transfer from one to another (withdraw from one, deposit to other).

---
