
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('creates the Manager object', () => {
        const manager = new Manager('John', 4, 'john@gmail.com', 2017556243);
        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
    describe('getRole method', () => {
        it('returns manager role', () => {
            const manager = new Manager('John', 4, 'john@gmail.com', 2017556243);
            expect(manager.getRole()).toEqual('Manager');
        });

    });
});
