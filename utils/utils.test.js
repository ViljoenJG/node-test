const utils = require('./utils');
const expect = require('expect');
const { describe, it } = require('mocha');

describe('Utils', () => {
    describe('#add(num1, num2)', () => {
        it('Should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBeA('number').toBe(44);
        });
    });

    describe('#asyncAdd(num1, num2, callback)', () => {
        it('Should add two numbers Asynchronously', (done) => {
            utils.asyncAdd(33, 11, (sum) => {
                expect(sum).toBeA('number').toBe(44);
                done();
            });
        });
    });

    describe('#square(num)', () => {
        it('Should square a number', () => {
            let res = utils.square(7);
            expect(res).toBeA('number').toBe(49)
        });
    });

    describe('#setName(user, fullName)', () => {
        it('Should verify that first and last names are set for a user', () => {
            let user = {age: 30};
            user = utils.setName(user, 'Kobus Viljoen');
            expect(user)
                .toBeAn('object')
                .toInclude({
                    firstName: 'Kobus',
                    lastName: 'Viljoen',
                    age: 30
                })
        })
    })
});

