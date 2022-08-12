const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const agent = request.agent(app);

jest.mock('../lib/services/github');

describe('OAuth routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should redirect to GitHub OAuth for login', async () => {
    const resp = await request
      .agent(app)
      .get('/api/v1/github/callback?code=42')
      .redirects(1);

    expect(resp.body).toEqual({
      id: expect.any(String),
      username: 'user',
      email: 'user@me.com',
      avatar: expect.any(String),
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });

  it('DELETE should log out a user', async () => {
    const resp = await request(app).delete('/api/v1/github/sessions');
    expect(resp.status).toBe(200);
  });

  it ('GET should allow authenticated users to view a list of posts', async () => {
    await agent
      .get('/api/v1/github/callback?code=42');
    const resp = await agent.get('/api/v1/posts');
    expect(resp.body).toEqual(expect.arrayContaining([{
      id: expect.any(String),
      posts: expect.any(String),
    }]));
  });

  afterAll(() => {
    pool.end();
  });
});
