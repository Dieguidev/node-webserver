const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Dieguidev',
    title: 'Happy Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Dieguidev',
    title: 'Happy Node',
    class: 'alt',
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Dieguidev',
    title: 'Happy Node',
    class: 'alt',
  });
});

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${8080}`);
});
