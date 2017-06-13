const expect = require('expect');
const rewire = require('rewire');
const { describe, it } = require('mocha');

let app = rewire('./app');

describe('App', () => {

    let db = app.__get__('db');
    db.saveUser = expect.createSpy();

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Sam', 30);
        expect(spy).toHaveBeenCalledWith('Sam', 30)
    });

    it('Should call saveUser with user object', () => {
        let email = 'email@somedomain.com';
        let password = '123strongP@ssword';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});