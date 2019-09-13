const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
