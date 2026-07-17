const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from democi!');
});

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`democi listening on port ${port}`);
  });
}

module.exports = app;
