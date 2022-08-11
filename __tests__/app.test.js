const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should redirect to Githubs OAuth for login', async () => {

  })
  afterAll(() => {
    pool.end();
  });
});
