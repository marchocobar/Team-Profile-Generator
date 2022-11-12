

const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it('creates the Employee object', () => {
        const employee = new Employee('John', 1, 'john@gmail.com');
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    describe("getName method", () => {
        it('returns employee name', () => {
            const employee = new Employee('John', 1, 'john@gmail.com');
            expect(employee.getName()).toEqual(expect.any(String));
        });
    });
    describe("getId method", () => {
        it('returns employee id', () => {
            const employee = new Employee('John', 1, 'john@gmail.com');
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });
    describe('getEmail method', () => {
        it('returns employee email', () => {
            const employee = new Employee('John', 1, 'john@gmail.com');
            expect(employee.getEmail()).toEqual(expect.any(String));
        });
    });
    describe('getRole method', () => {
        it('returns employee role', () => {
            const employee = new Employee('John', 1, 'john@gmail.com');
            expect(employee.getRole()).toEqual('Employee')
        })
    });
});