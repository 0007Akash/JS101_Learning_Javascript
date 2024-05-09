// Person class represents a generic person entity.
class Person {
    // Constructor to initialize the name and age of the person.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Static method greet that returns a greeting message.
    static greet() {
        return "Hello there!";
    }
}

// Prototype method canSleep to represent that a person can sleep.
Person.prototype.canSleep = function () {
    return `${this.name} is sleeping`;
};

// Employee class represents an employee, inheriting from Person.
class Employee extends Person {
    // Private field #salary to store the salary of the employee.
    #salary;

    // Constructor to initialize the name, age, and salary of the employee.
    constructor(name, age, salary) {
        super(name, age);
        this.#salary = salary;
    }

    // Getter method to retrieve the salary of the employee.
    get salary() {
        return this.#salary;
    }

    // Setter method to update the salary of the employee.
    set salary(value) {
        if (value > 0) {
            this.#salary = value;
        } else {
            console.log("Salary must be a positive number.");
        }
    }
}

// Prototype method working to represent that an employee is working.
Employee.prototype.working = function () {
    return `${this.name} is working`;
};

// Manager class represents a manager, inheriting from Employee.
class Manager extends Employee {
    // Constructor to initialize the name, age, and salary of the manager.
    constructor(name, age, salary) {
        super(name, age, salary);
    }

    // Static method getRole that returns the role of the manager.
    static getRole() {
        return "Manager";
    }
}

// Prototype method managing to represent that a manager is managing.
Manager.prototype.managing = function () {
    return `${this.name} is managing`;
};

// Executive class represents an executive, inheriting from Manager.
class Executive extends Manager {
    // Private field #bonus to store the bonus of the executive.
    #bonus;

    // Constructor to initialize the name, age, salary, and bonus of the executive.
    constructor(name, age, salary, bonus) {
        super(name, age, salary);
        this.#bonus = bonus;
    }

    // Getter method to retrieve the bonus of the executive.
    get bonus() {
        return this.#bonus;
    }

    // Setter method to update the bonus of the executive.
    set bonus(value) {
        if (value > 0) {
            this.#bonus = value;
        }
    }
}



// Create a new Person instance
const person = new Person("John", 30);
console.log(Person.greet()); // Output: Hello there!
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

console.log(person.canSleep()); // Output: John is sleeping

// Create a new Employee instance
const employee = new Employee("Alice", 25, 5000);
console.log(employee.salary); // Output: 5000
employee.salary = -1234; // Output: Salary must be a positive number.
employee.salary = 1234;
console.log(employee.working()); // Output: Alice is working

// Create a new Manager instance
const manager = new Manager("Bob", 35, 8000);
console.log(Manager.getRole()); // Output: Manager
console.log(manager.managing()); // Output: Bob is managing

// Create a new Executive instance
const executive = new Executive("Emma", 40, 10000, 2000);
console.log(executive.bonus); // Output: 2000
executive.bonus = -500; // (No output)
console.log(executive.bonus); // Output: 2000
