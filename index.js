
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.email = `${this.firstName}.${this.lastName}@company.com`;
        // Complete the code!
    }
}

// ### JS Classes

// Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:

// Form the `fullname` by simply joining the first and last name together, separated by a space.
// Form the `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.

// Examples

emp1 = new Employee("John", "Smith");
console.log(emp1.fullName);; //"John Smith"

emp2 = new Employee("Mary", "Sue");
console.log(emp2.email);; // "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstName);; // "Antony"

// * Note :- The properties firstname and lastname are already made for you.
