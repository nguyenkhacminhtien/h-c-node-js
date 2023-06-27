const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'));

// Template engine
const hbs = exphbs.create({
  extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 