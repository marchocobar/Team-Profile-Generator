
const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('creates the Intern object', () => {
        const intern = new Intern('John', 3, 'john@gmail.com', 'SPU');
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });
    describe('getSchool method', () => {
        it('returns school name', () => {
            const intern = new Intern('John', 3, 'john@gmail.com', 'SPU');
            expect(intern.getSchool()).toEqual(expect.any(String));
        });
    });
    describe('getRole method', () => {
        it('returns intern role', () => {
            const intern = new Intern('John', 3, 'john@gmail.com', 'SPU');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});