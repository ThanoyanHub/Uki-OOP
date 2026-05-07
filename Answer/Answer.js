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
