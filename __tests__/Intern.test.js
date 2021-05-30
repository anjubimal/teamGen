const Intern = require("../lib/Intern")

test("Can set school via constructor", () => {
    const testValue = "AnySchool";
    const employee = new Intern("snowy", 1, "test@test.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Inten\"", () => {
    const testValue = "Intern";
    const employee = new Intern("snowy", 1, "test@test.com", "AnySchool");
    expect(employee.getRole()).toBe(testValue);
});
test("Can get AnySchool username via getSchool()", () => {
    const testValue = "GitHubUser";
    const employee = new Intern("snowy", 1, "test@test.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});