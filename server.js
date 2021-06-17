require('newrelic');
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//set up express-handlebars
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
//set up sessions
const session = require('express-session');

//time logged in
const time = ((60000 * 60) * 5);

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: time
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//express handlebars template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));
});