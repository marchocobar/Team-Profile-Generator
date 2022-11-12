
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('creates Engineer object', () => {
        const engineer = new Engineer('John', 2, 'john@gmail.com', 'johngit');
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));

    });
    describe('getGithub method', () => {
        it('returns github username', () => {
            const engineer = new Engineer('John', 2, 'john@gmail.com', 'johngit');
            expect(engineer.getGithub()).toEqual(expect.any(String));
        });
    });
    describe('getRole method', () => {
        it('returns engineer role', () => {
            const engineer = new Engineer('John', 2, 'john@gmail.com', 'johngit');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    }); 
});