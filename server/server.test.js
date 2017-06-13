const request = require('supertest');
const expect = require('expect');

const { app } = require('./server');

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