const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/employee-details', (req, res) => {
  const { id, name, age, salary } = req.body;
  console.log('Received Employee Details:', { id, name, age, salary });
  res.send({ id, name, age, salary });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
