const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 5000;
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db');

// Kết nối đến MongoDB
db.connect();
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))


// HTTP logger
// app.use(morgan('combined'));

// Template engine
const hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
    sum : (a,b) => a+b
}
});
app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
app.use(express.urlencoded({ extended: true }));
route(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 