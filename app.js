const express = require('express');
const app = express();
const port = 8080;

//servir contenido estatico
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${8080}`);
});
