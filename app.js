const express = require('express');
const app = express();
const port = 8080;

//todo: require('hbs)
app.set('view engine', 'hbs');

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Dieguidev',
    title: 'Happy Node',
  });
});

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${8080}`);
});
