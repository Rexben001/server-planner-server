const request = require('supertest');
const server = require('../server');

describe('index route', () => {
  it('API is live!!!', async done => {
    const res = await request(server).get('/');
    expect(res.text).toBe('API is live!!!');
    expect(res.status).toBe(200);
    done();
  });
});
