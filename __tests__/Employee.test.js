
const Employee = require("../lib/Employee");

test("instantiate employee instance", ()=>{
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
})

test("set name via constructor arguments", ()=>{
    const name = "Anju";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("set id via consrtuctor argument", ()=>{
    const testValue = 100;
    const employee = new Employee("snowy", testValue);
    expect(employee.id).toBe(testValue);
})

test("checking to see if email is there", ()=>{
    const testValue = "test@test.com";
    const employee = new Employee("snowy", 1, testValue);
    expect(employee.email).toBe(testValue);
})

test("get name via getName()",()=>{
    const testValue = "Anju"
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
})

test("get id via getId()",()=>{
    const testValue = 100;
    const employee = new Employee("snowy", testValue);
    expect(employee.getId()).toBe(testValue);
})

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("snowy", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Anju", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
});