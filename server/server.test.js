const request = require('supertest');
const expect = require('expect');
const { describe, it } = require('mocha');

const { app } = require('./server');

describe('Server', () => {
    describe('GET /', () => {
        it('Should return Hello World!', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!')
                .end(done)
        });
    });

    describe('GET /error', () => {
        it('Should return error response', (done) => {
            request(app)
                .get('/error')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done)
        });
    });

    describe('GET /users', () => {
        it('Should return a list of users', (done) => {
            request(app).get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toBeAn('array')
                        .toInclude({
                            name: 'Kobus',
                            age: 30
                        })
                })
                .end(done)
        })
    });
});