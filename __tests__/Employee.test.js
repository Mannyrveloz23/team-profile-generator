const Employee = require("../lib/employee");

test('Creates new employee', () => {
    const employee = new Employee('John Smith', '1234', 'john@smith.com');

    expect(employee.name).toBe("John Smith");
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('john@smith.com');
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('John Smith', '1234', 'john@smith.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})

