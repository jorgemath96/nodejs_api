// Construyendo la App...
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;


// Motor de plantilla...
const exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + "/public"));


// Middleares...
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// Rutas...
app.use('/api', require('./routes/rps.js'));


// Iniciando App...
app.listen(port, () => {
  console.log(`La App se inició en el puerto: ${port}`);
});