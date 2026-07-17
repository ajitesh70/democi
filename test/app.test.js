const { test } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('GET /health returns 200 ok', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const res = await fetch(`http://localhost:${port}/health`);
    const body = await res.text();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(body, 'ok');
  } finally {
    server.close();
  }
});
