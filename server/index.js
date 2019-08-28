const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Made it!');
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
