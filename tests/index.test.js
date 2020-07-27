const request = require('supertest');
const server = require('../server');

describe('index route', () => {
  it('Api is live!!!', async done => {
    const res = await request(server).get('/');
    expect(res.text).toBe('Api is live!!!');
    expect(res.status).toBe(200);
    done();
  });
});

describe('calculate route', () => {
  it('returns 400', async done => {
    const res = await request(server).post('/api/v1/calculate').send();
    expect(res.body.message).toBe('Provide the right parameters');
    expect(res.status).toBe(400);
    done();
  });
  it('returns results of 2', async done => {
    const res = await request(server)
      .post('/api/v1/calculate')
      .send({
        serverType: {
          CPU: 2,
          RAM: 32,
          HDD: 100,
        },
        virtualMachines: [
          {
            CPU: 1,
            RAM: 16,
            HDD: 10,
          },
          {
            CPU: 1,
            RAM: 16,
            HDD: 10,
          },
          {
            CPU: 2,
            RAM: 32,
            HDD: 100,
          },
        ],
      });
    expect(res.body.result).toBe(2);
    expect(res.status).toBe(200);
    done();
  });
});
