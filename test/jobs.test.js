import { createMocks } from 'node-mocks-http';
import getJobs from '../pages/api/jobs';

describe('/api/jobs', () => {
  test('should get all records', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {
      }
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});