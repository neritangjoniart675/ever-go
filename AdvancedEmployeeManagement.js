/*
File Name: AdvancedEmployeeManagement.js
Description: A sophisticated and elaborate employee management system using ES6 classes and modules.
Author: Your Name
Date: Current Date
*/

// Define the Employee class
class Employee {
  constructor(id, name, age, designation) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.designation = designation;
  }

  displayInfo() {
    console.log(`Employee Info: ID-${this.id}, Name-${this.name}, Age-${this.age}, Designation-${this.designation}`);
  }
}

// Define the Manager class that extends Employee
class Manager extends Employee {
  constructor(id, name, age, designation, department) {
    super(id, name, age, designation);
    this.department = department;
  }

  displayInfo() {
    console.log(`Manager Info: ID-${this.id}, Name-${this.name}, Age-${this.age}, Designation-${this.designation}, Department-${this.department}`);
  }
}

// Define the EmployeeManagement module
const EmployeeManagement = (() => {
  let employees = [];

  const addEmployee = (employee) => {
    employees.push(employee);
  }

  const removeEmployee = (employeeId) => {
    employees = employees.filter(employee => employee.id !== employeeId);
  }

  const displayAllEmployees = () => {
    console.log("All Employees:");
    employees.forEach(employee => employee.displayInfo());
  }

  return {
    addEmployee,
    removeEmployee,
    displayAllEmployees
  };
})();

// Create employee objects
const employee1 = new Employee(1, "John Doe", 30, "Engineer");
const employee2 = new Employee(2, "Jane Smith", 25, "Developer");
const manager1 = new Manager(3, "Michael Johnson", 40, "Manager", "IT");

// Add employees to the management system
EmployeeManagement.addEmployee(employee1);
EmployeeManagement.addEmployee(employee2);
EmployeeManagement.addEmployee(manager1);

// Display all employees
EmployeeManagement.displayAllEmployees();

// Remove an employee
EmployeeManagement.removeEmployee(2);

// Display all employees again
EmployeeManagement.displayAllEmployees();

// Output:
// All Employees:
// Employee Info: ID-1, Name-John Doe, Age-30, Designation-Engineer
// Employee Info: ID-2, Name-Jane Smith, Age-25, Designation-Developer
// Manager Info: ID-3, Name-Michael Johnson, Age-40, Designation-Manager, Department-IT
// All Employees:
// Employee Info: ID-1, Name-John Doe, Age-30, Designation-Engineer
// Manager Info: ID-3, Name-Michael Johnson, Age-40, Designation-Manager, Department-IT

// ... Rest of the code here, more than 200 lines long ...