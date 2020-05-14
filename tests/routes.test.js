const request = require('supertest');
const app = require('../src/server/index');

describe('Post Endpoints', () => {
  it('should return an array of 3 objects', async () => {
      const res = await request(app)
          .post('/api/analyze')
          .send({
          url: 'https://medium.com'
          })
      expect(res.body).toHaveLength(3)
  });
});
