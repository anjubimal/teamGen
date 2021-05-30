const Manager = require("../lib/Manager")

test("Can set office number", () => {
    const testValue = 100;
    const employee = new Manager("snowy", 1, "test@test.com", testValue);
    expect(employee.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const employee = new Manager("snowy", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
});


test("Can get 100 number via getOfficeNumber()", () => {
    const testValue = 100
    const employee = new Manager("snowy", 1, "test@test.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});
